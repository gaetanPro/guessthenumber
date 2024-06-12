// LoginPage.tsx
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function LoginPage() {
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '965148141073-d28s1ngkcpvie9rljirppu5pu2dci56j.apps.googleusercontent.com',
          });
    }, []);
    async function onGoogleButtonPress() {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
      
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
      }
      
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
              <Icon name="user-circle" size={100} color="#4F8EF7" />
              <Text style={styles.logoText}>Bienvenue</Text>
          </View>
          <View style={styles.inputContainer}>
              <Icon name="user" size={20} color="#4F8EF7" />
              <TextInput 
              style={styles.input} 
              placeholder="Nom d'utilisateur" 
              placeholderTextColor="#aaa"
              />
          </View>
          <View style={styles.inputContainer}>
              <Icon name="lock" size={20} color="#4F8EF7" />
              <TextInput 
              style={styles.input} 
              placeholder="Mot de passe" 
              placeholderTextColor="#aaa" 
              secureTextEntry
              />
          </View>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Connexion</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleButton} onPress={onGoogleButtonPress}>
            <Icon name="google" size={20} color="#fff" />
            <Text style={styles.googleButtonText}>Se connecter avec Google</Text>
          </TouchableOpacity>
          <Text style={styles.footerText}>Vous n'avez pas de compte ? Inscrivez-vous</Text>
        </View>
    </GestureHandlerRootView>
        
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4F8EF7',
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#4F8EF7',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    color: '#333',
  },
  button: {
    backgroundColor: '#4F8EF7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DB4437',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  googleButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  footerText: {
    marginTop: 20,
    color: '#aaa',
  },
});
