import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <View style={{alignItems: 'center', marginTop: 100}}>
          <View>
            <Text style={styles.judulc}>Wellcome to</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.judula}>Miss</Text>
            <Text style={styles.judulb}>Book</Text>
          </View>
        </View>
        <View style={{marginTop: 50, marginLeft: 20, flexDirection: 'row'}}>
          <Text style={styles.input}>Username</Text>
          <TextInput
            value={this.state.username}
            style={{
              width: 100,
              height: 30,
              borderWidth: 1,
              color: 'black',
              flexBasis: 200,
              margin: 3,
            }}
          />
        </View>
        <View style={{marginLeft: 20, flexDirection: 'row'}}>
          <Text style={styles.input}>Password</Text>
          <TextInput
            value={this.state.username}
            style={{
              width: 100,
              height: 30,
              borderWidth: 1,
              color: 'black',
              flexBasis: 200,
              margin: 3,
            }}
          />
        </View>

        <TouchableOpacity style={styles.login}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 17}}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  judula: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
  judulb: {
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',
  },
  judulc: {
    fontSize: 20,
  },
  input: {
    marginBottom: 20,
    fontSize: 17,
  },
  login: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    borderRadius: 50,
    elevation: 5,
    marginTop: 10,
  },
});
