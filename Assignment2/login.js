import {useState} from 'react';

import {
  Button,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// const _gotoHome = () => {
//   console.log('HomePage');
// };

const Login = props => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const _login = () => {
    console.log('Login Function Hit');

    //console.log(password);
    if (userName === password) {
      props.navigation.replace('Home');
    } else {
      console.log('user name and password does not match');
    }
    // Use props.navigation to navigate to 'Home' screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.login}>Login</Text>
        <Text style={styles.subTitle}>Welcome To DSU Login</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter User Name"
        placeholderTextColor={'black'}
        value={userName}
        onChangeText={value => setUserName(value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        placeholderTextColor={'black'}
        value={password}
        onChangeText={value => setPassword(value)}
        secureTextEntry
      />

      <TouchableOpacity onPress={() => _login()} style={styles.button}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    height: 50,
    width: 120,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 25,
  },
  headerView: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    height: 50,
    paddingHorizontal: 15,
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  login: {
    color: 'black',
    fontSize: 25,
    // textAlign:'center',
  },
  subTitle: {
    color: 'black',
    fontSize: 25,
  },
});
