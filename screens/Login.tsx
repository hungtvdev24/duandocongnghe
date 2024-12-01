import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../images/cro102lgin.jpg')} style={styles.backgroundImage} />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Chào mừng bạn</Text>
        <Text style={styles.subtitle}>Đăng nhập tài khoản</Text>
      </View>

      <TextInput style={styles.input} placeholder="Nhập email hoặc số điện thoại" />
      
      <View style={styles.passwordContainer}>
        <TextInput style={styles.input} placeholder="Mật khẩu" secureTextEntry={true} />
        <Ionicons name="eye-off-outline" size={24} color="gray" style={styles.eyeIcon} />
      </View>

      <View style={styles.rememberContainer}>
        <TouchableOpacity>
          <Text style={styles.rememberText}>Nhớ tài khoản</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeTabs')}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Hoặc</Text>

     

      <Text style={styles.footerText}>
        Bạn không có tài khoản{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Register')}>
          Tạo tài khoản
        </Text>
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    position: 'absolute',
    top: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 170, // Position title container below image
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 12,
  },
  rememberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  rememberText: {
    color: 'gray',
  },
  forgotPassword: {
    color: 'green',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'green',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    color: 'gray',
    marginVertical: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialIcon: {
    marginHorizontal: 20,
  },
  footerText: {
    color: 'gray',
    textAlign: 'center',
  },
  link: {
    color: 'green',
  },
});
