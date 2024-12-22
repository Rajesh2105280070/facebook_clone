import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { VectorIcon } from "../../utils/VectorIcon";
import { BLACK, GREY, PRIMARYCOLOR, WHITE } from "../../constatnt/color";
import { TextInputComponent } from "../../components/commonComponents/TextInputComponent";
import { LOGO, METALOGO2, PASSWORD, USER } from "../../constatnt/imagePath";
import { CustomButton } from "../../components/commonComponents/Button";
import { MyStatusBar } from "../../components/commonComponents/MyStatusBar";

export default LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onCreateAccount = () => {
        navigation.navigate('RegisterScreen');
    };

    const onLogin = () => {
        if (email && password) {
            auth()
                .signInWithEmailAndPassword(email, password)
                .then(response => {
                    console.log('response :', response);
                })
                .catch(error => {
                    if (error.code === 'auth/wrong-password') {
                        Alert.alert('Your password is wrong!');
                    } else {
                        Alert.alert(`${error}`);
                    }
                    console.log('error :', error);
                });
        }
    };

    return (
        <>
            <MyStatusBar backgroundColor={WHITE} barStyle={"dark-content"} />
            <View style={styles.container}>
                {/* Facebook Logo at the Top */}
                <Image source={LOGO} style={styles.logoStyle} resizeMode="contain" />
                {/* Input and Button in the Middle */}
                <View style={styles.middleContainer}>
                    <TextInputComponent
                        placeholder="Enter Your Mobile number or Email"
                        inputdata={email}
                        setInputdata={setEmail}
                        autoCapitalize={"none"}
                        width={"90%"}
                        image={USER}
                        borderColor={PRIMARYCOLOR}
                    />
                    <TextInputComponent
                        placeholder="Enter Your Password"
                        inputdata={password}
                        setInputdata={setPassword}
                        keyboardType={"password"}
                        width={"90%"}
                        image={PASSWORD}
                        borderColor={PRIMARYCOLOR}
                    />
                    <CustomButton
                        backgroundColor={PRIMARYCOLOR}
                        text="Login"
                        width={"90%"}
                        color={WHITE}
                        onPress={onLogin}
                    />
                    <Text style={styles.forgotPass}>Forgot Password?</Text>
                </View>
                {/* Create Account and Meta Logo at the Bottom */}
                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.newAccount} onPress={onCreateAccount}>
                        <Text style={styles.newAccountText}>Create new account</Text>
                    </TouchableOpacity>
                    <Image source={METALOGO2} style={styles.metaLogoStyle} />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
        padding: 16,
    },
    logoStyle: {
        height: 150, // Increased size
        width: 150,  // Increased size
        alignSelf: 'center', // Center the logo at the top
        marginBottom: 20,
    },
    middleContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    forgotPass: {
        color: GREY,
        fontSize: 14,
        fontWeight: '500',
        marginTop: 15,
    },
    newAccount: {
        borderColor: PRIMARYCOLOR,
        borderWidth: 1,
        padding: 10,
        borderRadius: 18,
        width: '95%',
        alignItems: 'center',
        marginBottom: 10,
    },
    newAccountText: {
        color: PRIMARYCOLOR,
        fontSize: 14,
        fontWeight: '400',
    },
    metaLogoStyle: {
        height: 15,
        width: 70,
    },
});