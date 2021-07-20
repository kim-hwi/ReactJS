import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Auth } from 'aws-amplify';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
export default function SignIn({ navigation, updateAuthState }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function signIn() {
        try {
            await Auth.signIn(username, password);
            console.log('✅ Success');
            updateAuthState('loggedIn');
        } catch (error) {
            console.log('❌ Error signing in...', error);
        }
    }
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Ai FMS</Text>
                <Text style={styles.Text}>이메일</Text>

                <AppTextInput
                    value={username}
                    onChangeText={text => setUsername(text)}
                    leftIcon="account"
                    placeholder="name@email.com"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />
                <Text style={styles.Text}>비밀번호</Text>

                <AppTextInput
                    value={password}
                    onChangeText={text => setPassword(text)}
                    leftIcon="lock"
                    placeholder="*********"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    textContentType="password"
                />
                <Text style={styles.Text}>자동로그인</Text>

                <AppButton title="로그인" onPress={signIn} />
                <View style={styles.footerButtonContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.forgotPasswordButtonText}>
                            회원가입
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.bar}>mtov.net</Text>

            </View>
            
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: 'white',
        
    },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        color: '#202020',
        fontWeight: '500',
        marginVertical: 30
    },
    footerButtonContainer: {
        marginVertical: 15,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    forgotPasswordButtonText: {
        color: 'tomato',
        fontSize: 18,
        fontWeight: '600'
    },
    Text: {
        color: 'gray',
        fontSize: 15,
        fontWeight: '600',
        marginVertical: 5,

    },
    bar: {
        marginVertical: 100,
        color: 'gray',
        fontSize: 15,
        fontWeight: '300'
    }

});