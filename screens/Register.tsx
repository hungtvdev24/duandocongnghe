import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Register = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../images/cro102lgin.jpg')} style={styles.backgroundImage} />

      <Text style={styles.title}>Đăng Ký</Text>

      <View style={styles.formContainer}>
        <Text style={styles.subtitle}>Tạo tài khoản</Text>

        <TextInput style={styles.input} placeholder="Họ tên" />
        <TextInput style={styles.input} placeholder="E-mail" />
        <TextInput style={styles.input} placeholder="Số điện thoại" />
        <TextInput style={styles.input} placeholder="Mật khẩu" secureTextEntry={true} />

        <Text style={styles.terms}>
          Để đăng ký tài khoản, bạn đồng ý <Text style={styles.link}>Terms & Conditions</Text> và{' '}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Đăng ký</Text>
        </TouchableOpacity>

        <Text style={styles.or}>Hoặc</Text>

        {/* <View style={styles.socialContainer}>
          <Ionicons name="logo-google" size={24} color="#DB4437" style={styles.socialIcon} />
          <Ionicons name="logo-facebook" size={24} color="#4267B2" style={styles.socialIcon} />
        </View> */}

        <Text style={styles.footerText}>
          Đã có tài khoản{' '}
          <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
            Đăng nhập
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20, // Added padding to push the content below
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 190, // Increased margin to ensure spacing below the image
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    marginTop: 20, // Added margin to create space between title and form
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
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
  terms: {
    color: 'gray',
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 10,
  },
  link: {
    color: 'green',
    textDecorationLine: 'underline',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'green',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  or: {
    marginVertical: 15,
    color: 'gray',
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
  },
});
