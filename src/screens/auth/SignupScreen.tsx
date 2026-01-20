import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFormik } from 'formik';
import { useAuth } from '../../context/AuthContext';
import { AuthStackParamList } from '../../navigation/AuthNavigator';
import { colors } from '../../assets/colors';
import { strings } from '../../constants/strings';
import { signupSchema, SignupFormData } from '../../constants/schemas';
import Button from '../../components/Button';
import Input from '../../components/Input';
import ScreenWrapper from '../../components/ScreenWrapper';
import FormWrapper from '../../components/FormWrapper';

type SignupScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Signup'>;

interface Props {
  navigation: SignupScreenNavigationProp;
}

const SignupScreen: React.FC<Props> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const { signup } = useAuth();

  const formik = useFormik<SignupFormData>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        await signup(values.email, values.password, values.name);
        Alert.alert(strings.success.signup, strings.auth.signupSuccess);
        setTimeout(() => navigation.navigate('Login'), 500); // Ensure navigation after alert
      } catch (error) {
        Alert.alert(strings.errors.signupFailed, (error as Error).message || strings.errors.genericError);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <ScreenWrapper>
      <FormWrapper>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <Text style={styles.title}>{strings.auth.createAccount}</Text>
            <Input
              placeholder={strings.placeholders.fullName}
              value={formik.values.name}
              onChangeText={(text) => {
                formik.setFieldValue('name', text);
                if (formik.errors.name) formik.setFieldError('name', undefined);
              }}
              autoCapitalize="words"
              error={formik.errors.name}
            />
            <Input
              placeholder={strings.placeholders.email}
              value={formik.values.email}
              onChangeText={(text) => {
                formik.setFieldValue('email', text);
                if (formik.errors.email) formik.setFieldError('email', undefined);
              }}
              keyboardType="email-address"
              autoCapitalize="none"
              error={formik.errors.email}
            />
            <Input
              placeholder={strings.placeholders.password}
              value={formik.values.password}
              onChangeText={(text) => {
                formik.setFieldValue('password', text);
                if (formik.errors.password) formik.setFieldError('password', undefined);
              }}
              secureTextEntry={!isPasswordVisible}
              error={formik.errors.password}
              rightIcon={isPasswordVisible ? 'visibility-off' : 'visibility'}
              onRightIconPress={() => setIsPasswordVisible(!isPasswordVisible)}
            />
            <Input
              placeholder={strings.placeholders.confirmPassword}
              value={formik.values.confirmPassword}
              onChangeText={(text) => {
                formik.setFieldValue('confirmPassword', text);
                if (formik.errors.confirmPassword) formik.setFieldError('confirmPassword', undefined);
              }}
              secureTextEntry={!isConfirmPasswordVisible}
              error={formik.errors.confirmPassword}
              rightIcon={isConfirmPasswordVisible ? 'visibility-off' : 'visibility'}
              onRightIconPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
            />
            <Button
              title={strings.buttons.signup}
              onPress={() => formik.handleSubmit()}
              loading={isLoading}
              disabled={!formik.isValid || isLoading}
            />
            <TouchableOpacity
              style={styles.link}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.linkText}>{strings.links.alreadyHaveAccount}</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </FormWrapper>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: colors.background.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: colors.primary,
  },
  link: {
    alignSelf: 'center',
    marginTop: 10,
  },
  linkText: {
    color: colors.primary,
    fontSize: 16,
  },
});

export default SignupScreen;