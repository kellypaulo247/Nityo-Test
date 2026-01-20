import React from 'react';
import {
  StyleSheet,
  Alert,
} from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useAuth } from '../../context/AuthContext';
import { MainTabParamList } from '../../navigation/MainNavigator';
import { colors } from '../../assets/colors';
import { strings } from '../../constants/strings';
import Button from '../../components/Button';
import ScreenWrapper from '../../components/ScreenWrapper';

type SettingsScreenNavigationProp = BottomTabNavigationProp<MainTabParamList, 'Settings'>;

interface Props {
  navigation: SettingsScreenNavigationProp;
}

const SettingsScreen: React.FC<Props> = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    Alert.alert(
      strings.main.settings.logoutConfirm,
      '',
      [
        { text: strings.buttons.cancel, style: 'cancel' },
        { text: strings.main.settings.logout, onPress: logout },
      ]
    );
  };

  return (
    <ScreenWrapper>
      <Button
        title={strings.buttons.logout}
        onPress={handleLogout}
        variant="danger"
        style={styles.button}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.primary,
    textAlign: 'center',
  },
  button: {
    marginTop: 50,
    width: '50%',
    alignSelf: 'center',
  },
});

export default SettingsScreen;