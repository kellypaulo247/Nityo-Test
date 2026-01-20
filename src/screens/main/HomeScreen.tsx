import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import LottieView from 'lottie-react-native';
import { useAuth } from '../../context/AuthContext';
import { MainTabParamList } from '../../navigation/MainNavigator';
import { colors } from '../../assets/colors';
import { strings } from '../../constants/strings';
import ScreenWrapper from '../../components/ScreenWrapper';

type HomeScreenNavigationProp = BottomTabNavigationProp<MainTabParamList, 'Home'>;

interface Props {
    navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = () => {
    const { user } = useAuth();

    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <LottieView
                    source={require('../../assets/animations/Welcome.json')}
                    autoPlay
                    loop
                    style={styles.emptyLottie}
                />
                <Text style={styles.title}>
                    {strings.main.home.title} {user?.name}!
                </Text>
                <Text style={styles.subtitle}>{strings.main.home.subtitle}</Text>
            </View>
        </ScreenWrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: colors.background.primary,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: colors.primary,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 30,
        color: colors.gray[600],
        textAlign: 'center',
    },
    emptyLottie: {
        width: 400,
        height: 300,
        marginBottom: 20,
    },
});

export default HomeScreen;