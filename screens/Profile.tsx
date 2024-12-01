// screens/Profile.tsx
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, TextInput, Button, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("Trần Van hung");
  const [email, setEmail] = useState("hungtvdev24@gmail.com");
  const [address, setAddress] = useState("Nam tu niem ha noi");
  const [phone, setPhone] = useState("0123456789");

  const handleSave = () => {
    setModalVisible(false);
    // Lưu thông tin vào cơ sở dữ liệu hoặc xử lý tiếp theo nếu cần
  };

  const handleLogout = () => {
    Alert.alert(
      "Xác nhận",
      "Bạn có chắc muốn đăng xuất không?",
      [
        { text: "Hủy", style: "cancel" },
        { text: "Có", onPress: () => navigation.navigate('Login') }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>PROFILE</Text>

      <View style={styles.profileInfo}>
        <Image
          source={{ uri: 'https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/287844950_749841233029779_7413598733808113457_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGYtlpSldtlk9euXmh5xUqiprnEbZwfLC6mucRtnB8sLvlYCB24o-yzKhDG41Fm--a3z8Af2nzHhb-1COyfglzU&_nc_ohc=T30e60j2RJ4Q7kNvgGT7j_h&_nc_zt=23&_nc_ht=scontent.fhan14-3.fna&_nc_gid=AImbjzpKwqBXWcwE9hylweg&oh=00_AYCbtGPgTKBlN21K4JJ63QBGgD1dP5vev8W4aZMfF4BV1g&oe=673CB193' }}
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.userEmail}>{email}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Chung</Text>
        <TouchableOpacity style={styles.menuItem} onPress={() => setModalVisible(true)}>
          <Text style={styles.menuText}>Chỉnh sửa thông tin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Cẩm nang trồng cây</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Lịch sử giao dịch</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Q & A</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Bảo mật và Điều khoản</Text>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Điều khoản và điều kiện</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Chính sách quyền riêng tư</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
          <Text style={[styles.menuText, styles.logoutText]}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>

      {/* Modal để chỉnh sửa thông tin */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Chỉnh sửa thông tin</Text>

            <TextInput
              style={styles.modalInput}
              placeholder="Tên"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Địa chỉ"
              value={address}
              onChangeText={setAddress}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Số điện thoại"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />

            <View style={styles.modalButtons}>
              <Button title="Lưu" onPress={handleSave} />
              <Button title="Hủy" color="red" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  userInfo: {
    flexDirection: 'column',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: 'gray',
  },
  section: {
    marginTop: 20,
  },
  sectionHeader: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  menuText: {
    fontSize: 16,
    color: 'black',
  },
  logoutText: {
    color: 'red',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalInput: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
});
