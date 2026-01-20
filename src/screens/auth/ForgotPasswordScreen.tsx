import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFormik } from 'formik';
import { useAuth } from '../../context/AuthContext';
import { AuthStackParamList } from '../../navigation/AuthNavigator';
import { colors } from '../../assets/colors';
import { strings } from '../../constants/strings';
import { forgotPasswordSchema, ForgotPasswordFormData } from '../../constants/schemas';
import Button from '../../components/Button';
import Input from '../../components/Input';
import ScreenWrapper from '../../components/ScreenWrapper';
import FormWrapper from '../../components/FormWrapper';

type ForgotPasswordScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'ForgotPassword'>;

interface Props {
  navigation: ForgotPasswordScreenNavigationProp;
}

const ForgotPasswordScreen: React.FC<Props> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { forgotPassword } = useAuth();

  const formik = useFormik<ForgotPasswordFormData>({
    initialValues: {
      email: '',
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        await forgotPassword(values.email);
        Alert.alert(strings.success.forgotPasswordSuccess);
        navigation.navigate('Login');
      } catch (error) {
        Alert.alert(strings.errors.forgotPasswordFailed, (error as Error).message || strings.errors.genericError);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <ScreenWrapper>
      <FormWrapper>
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
        <Button
          title={strings.buttons.resetPassword}
          onPress={() => formik.handleSubmit()}
          loading={isLoading}
          disabled={!formik.isValid || isLoading}
        />
        <TouchableOpacity
          style={styles.link}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.linkText}>{strings.buttons.backToLogin}</Text>
        </TouchableOpacity>
      </FormWrapper>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  link: {
    alignSelf: 'center',
    marginTop: 10,
  },
  linkText: {
    color: colors.primary,
    fontSize: 16,
  },
});

export default ForgotPasswordScreen;