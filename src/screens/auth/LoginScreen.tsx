import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFormik } from 'formik';
import { useAuth } from '../../context/AuthContext';
import { AuthStackParamList } from '../../navigation/AuthNavigator';
import { colors } from '../../assets/colors';
import { strings } from '../../constants/strings';
import { loginSchema, LoginFormData } from '../../constants/schemas';
import Logo from '../../assets/Logo';
import Button from '../../components/Button';
import Input from '../../components/Input';
import ScreenWrapper from '../../components/ScreenWrapper';
import FormWrapper from '../../components/FormWrapper';

type LoginScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Login'>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { login } = useAuth();

  const formik = useFormik<LoginFormData>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        await login(values.email, values.password);
      } catch (error) {
        Alert.alert(strings.errors.loginFailed, (error as Error).message || strings.errors.genericError);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <ScreenWrapper>
      <FormWrapper style={{ backgroundColor: colors.background.primary }}>
        <Image source={Logo.SignIn} style={styles.logo} />
        <Text style={styles.title}>{strings.auth.welcomeBack}</Text>
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
        <Button
          title={strings.buttons.login}
          onPress={() => formik.handleSubmit()}
          loading={isLoading}
          disabled={!formik.isValid || isLoading}
        />
        <TouchableOpacity
          style={styles.link}
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          <Text style={styles.linkText}>{strings.links.forgotPassword}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.link}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.linkText}>{strings.links.dontHaveAccount}</Text>
        </TouchableOpacity>
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
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: colors.background.primary,
  },
  logo: {
    width: 420,
    height: 280,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
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

export default LoginScreen;