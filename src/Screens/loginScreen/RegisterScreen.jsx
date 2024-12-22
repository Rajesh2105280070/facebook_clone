import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { VectorIcon } from "../../utils/VectorIcon";
import { BLACK, PRIMARYCOLOR, WHITE } from "../../constatnt/color";
import { LOGO, METALOGO2, NAME, PASSWORD, USER } from "../../constatnt/imagePath";
import { TextInputComponent } from "../../components/commonComponents/TextInputComponent";
import { CustomButton } from "../../components/commonComponents/Button";

export default RegisterScreen = ({ navigation }) => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onCreateAccount = () => {
        navigation.navigate('Login');
    };

    const onRegister = () => {
        if (password !== confirmPassword) {
            Alert.alert("Password don't match.");
            return;
        }
        if (email && password) {
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('User account created & signed in!');
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }
                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }
                    console.error(error);
                });
        } else {
            Alert.alert('Please fill in details!');
        }
    };

    return (
        <View style={styles.container}>
            <VectorIcon
                name="arrow-back"
                type="Ionicons"
                color={BLACK}
                size={20}
                onPress={() => navigation.navigate('Login')}
                style={styles.backIcon}
            />
            <Image source={LOGO} style={styles.logoStyle} resizeMode="contain" />
            <View style={styles.middleContainer}>
                <TextInputComponent
                    placeholder="Enter Your Full Name"
                    inputdata={fullname}
                    setInputdata={setFullname}
                    width={"90%"}
                    image={NAME}
                    borderColor={PRIMARYCOLOR}
                />
                <TextInputComponent
                    placeholder="Enter Your Email or Mobile Number"
                    inputdata={email}
                    setInputdata={setEmail}
                    width={"90%"}
                    image={USER}
                    borderColor={PRIMARYCOLOR}
                    autoCapitalize={"none"}
                />
                <TextInputComponent
                    placeholder="Enter Your Password"
                    inputdata={password}
                    setInputdata={setPassword}
                    width={"90%"}
                    image={PASSWORD}
                    borderColor={PRIMARYCOLOR}
                    keyboardType={"password"}
                />
                <TextInputComponent
                    placeholder="Enter Your Confirm Password"
                    inputdata={confirmPassword}
                    setInputdata={setConfirmPassword}
                    width={"90%"}
                    image={PASSWORD}
                    borderColor={PRIMARYCOLOR}
                    keyboardType={"password"}
                />
                <CustomButton
                    backgroundColor={PRIMARYCOLOR}
                    text="Register"
                    width={"90%"}
                    color={WHITE}
                    onPress={onRegister}
                    style={styles.registerButton}
                />
            </View>
            <View style={styles.bottomContainer}>
                <CustomButton
                    backgroundColor={PRIMARYCOLOR}
                    text="Already Have Account? Login"
                    width={"90%"}
                    color={WHITE}
                    onPress={onCreateAccount}
                />
                <Image source={METALOGO2} style={styles.metaLogoStyle} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
        paddingHorizontal: 16,
    },
    backIcon: {
        marginTop: 10,
    },
    logoStyle: {
        height: 150, // Properly resized logo height
        width: 150, // Properly resized logo width
        alignSelf: "center",
        marginTop: 20,
    },
    middleContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    bottomContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    metaLogoStyle: {
        height: 15,
        width: 70,
        marginTop: 10,
    },
    registerButton: {
        marginTop: 20, // Gap between inputs and register button
    },
});