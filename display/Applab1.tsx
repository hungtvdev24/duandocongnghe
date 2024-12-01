import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image, ScrollView } from 'react-native';

const App = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const brandColor = theme === 'light' ? '#1DE9B6' : '#36454F'; 
  const textColor = theme ;
  // const brandColor = theme === 'light' ? '#A8CDBE' : '#36454F'; // Inspired by your image
  // const textColor = theme === 'light' ? '#2B2B2B' : '#F5F5F5';
  return (
    // <ScrollView style={[styles.container, { backgroundColor: theme === 'light' ? '#F2F8F5' : '#1C1C1C' }]}></ScrollView>
    <ScrollView contentContainerStyle={[styles.container,{backgroundColor: theme==='light'?'#F2F8F5' : '#1C1C1C'  }]}>
      {}
 
        <Image style={styles.logo}
        
        source={require('./anhmoi2.jpg')}></Image>
      

      {}
      <View style={styles.block}>
        <Text style={[styles.blockTitle, { color: brandColor }]}>Thônng tin cá nhân</Text>
        <TextInput style={[styles.input, { color: textColor }]} placeholder="Họ và tên" placeholderTextColor="#A9A9A9" />
        <TextInput style={[styles.input, { color: textColor }]} placeholder="Email" placeholderTextColor="#A9A9A9" />
      </View>

      {}
      <View style={styles.block}>
        <Text style={[styles.blockTitle, { color: brandColor }]}>Thông tin khóa học</Text>
        <TextInput style={[styles.input, { color: textColor }]} placeholder="Tên khóa học" placeholderTextColor="#A9A9A9" />
        <TextInput style={[styles.input, { color: textColor }]} placeholder="Ngày bắt đầu" placeholderTextColor="#A9A9A9" />
      </View>

      {}
      <View style={styles.block}>
        <Text style={[styles.blockTitle, { color: brandColor }]}>Thông tin liên hệ</Text>
        <TextInput style={[styles.input, { color: textColor }]} placeholder="Số điện thoại" placeholderTextColor="#A9A9A9" />
        <TextInput style={[styles.input, { color: textColor }]} placeholder="Địa chỉ" placeholderTextColor="#A9A9A9" />
      </View>

      {}
      <TouchableOpacity style={[styles.button, { backgroundColor: brandColor }]}>
        <Text style={{ color: '#FFF' }}>Submit</Text>
      </TouchableOpacity>

      {}
      <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
        <Text style={{ color: brandColor }}>Toggle Theme</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}; 

export default App;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 120,
    borderRadius: 10,
    marginBottom: 20,
    
  },
  block: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginBottom: 15,
  
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  blockTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
  
    borderBottomColor: '#D3D3D3',
    paddingVertical: 8,
    marginBottom: 10,
  },
  button: {
    width: '80%',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginVertical: 15,
  },
  themeToggle: {
    marginTop: 10,
  },
});
