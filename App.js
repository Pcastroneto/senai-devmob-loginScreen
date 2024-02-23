import React from 'react';
import { View, TextInput, Button, Image, Text } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Image source={require('./download.png')} style={styles.image} resizeMode="contain"/>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
        <Button title="Entrar" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // fundo cinza
  },
  loginContainer: {
    backgroundColor: '#ffffff', // fundo branco
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 100,
    marginBottom: 20,

  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
};

export default App;