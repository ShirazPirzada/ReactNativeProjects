import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Home = props => {
  const _logoff = () => {
    props.navigation.replace('Login');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.txtColor}>{'This is HomePage page.'}</Text>
      <TouchableOpacity onPress={() => _logoff()} style={styles.button}>
        <Text>LogOff</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

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
  txtColor: {
    color: 'black',
  },
});
