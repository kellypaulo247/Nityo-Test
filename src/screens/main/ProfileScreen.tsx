import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useAuth } from '../../context/AuthContext';
import { MainTabParamList } from '../../navigation/MainNavigator';
import { colors } from '../../assets/colors';
import { strings } from '../../constants/strings';
import ScreenWrapper from '../../components/ScreenWrapper';

type ProfileScreenNavigationProp = BottomTabNavigationProp<MainTabParamList, 'Profile'>;

interface Props {
  navigation: ProfileScreenNavigationProp;
}

const ProfileScreen: React.FC<Props> = () => {
  const { user } = useAuth();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>{strings.main.profile.title}</Text>
        <View style={styles.profileCard}>
          <Text style={styles.label}>{strings.main.profile.name}</Text>
          <Text style={styles.value}>{user?.name}</Text>
          <Text style={styles.label}>{strings.main.profile.email}</Text>
          <Text style={styles.value}>{user?.email}</Text>
          <Text style={styles.label}>{strings.main.profile.userId}</Text>
          <Text style={styles.value}>{user?.id}</Text>
        </View>
      </View>
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
  profileCard: {
    backgroundColor: colors.background.card,
    borderRadius: 10,
    padding: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: colors.text.primary,
    marginBottom: 5,
  },
});

export default ProfileScreen;