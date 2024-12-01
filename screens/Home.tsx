import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const plants = [
    { id: '1', name: 'Spider Plant', category: 'Ưa bóng', price: '250.000đ', image: 'https://www.btaskee.com/wp-content/uploads/2023/02/trang-tri-chau-cay-don-gian-the-hien-cham-ngon-song.jpg' },
    { id: '2', name: 'Song of India', category: 'Ưa sáng', price: '250.000đ', image: 'https://tse2.mm.bing.net/th?id=OIP.8dNTzQ0SuWJWK9Grq5M3lQHaE8&pid=Api&P=0&h=180' },
    { id: '3', name: 'Aloe Vera', category: 'Cây ưa sáng', price: '180.000đ', image: 'https://via.placeholder.com/100' },
    { id: '4', name: 'Succulent', category: 'Cây để bàn', price: '100.000đ', image: 'https://via.placeholder.com/100' },
  ];

  const pots = [
    { id: '1', name: 'Planta Trắng', price: '250.000đ', image: 'https://via.placeholder.com/100' },
    { id: '2', name: 'Planta Lemon Balm', price: '250.000đ', image: 'https://via.placeholder.com/100' },
    { id: '3', name: 'Planta Rosewood', price: '250.000đ', image: 'https://via.placeholder.com/100' },
    { id: '4', name: 'Planta Dove Grey', price: '250.000đ', image: 'https://via.placeholder.com/100' },
    { id: '5', name: 'Planta Terracotta', price: '300.000đ', image: 'https://via.placeholder.com/100' },
  ];

  const accessories = [
    { id: '1', name: 'Bình tưới CB2 SAIC', price: '250.000đ', image: 'https://via.placeholder.com/100' },
    { id: '2', name: 'Bình xịt Xiaoda', price: '250.000đ', image: 'https://via.placeholder.com/100' },
    { id: '3', name: 'Bộ cuốc xẻng mini', price: '250.000đ', image: 'https://via.placeholder.com/100' },
    { id: '4', name: 'Giá đỡ Finn Terrazzo', price: '250.000đ', image: 'https://via.placeholder.com/100' },
    { id: '5', name: 'Găng tay làm vườn', price: '120.000đ', image: 'https://via.placeholder.com/100' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Planta - tỏa sáng không gian nhà bạn</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Image
            source={require('../icons/bell.png')}
            style={{ width: 24, height: 24, tintColor: 'black' }}
          />

        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.link}>Xem hàng mới về →</Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cây trồng</Text>
        <FlatList
          data={plants}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('ChiTietSP', { product: item })}>
              <View style={styles.item}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemCategory}>{item.category}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Chậu cây trồng</Text>
        <FlatList
          data={pots}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('ChiTietSP', { product: item })}>
              <View style={styles.item}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Phụ kiện</Text>
        <FlatList
          data={accessories}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('ChiTietSP', { product: item })}>
              <View style={styles.item}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Combo chăm sóc (mới)</Text>
        <View style={styles.combo}>
          <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.comboImage} />
          <View style={styles.comboText}>
            <Text style={styles.comboTitle}>Lemon Balm Grow Kit</Text>
            <Text style={styles.comboDescription}>Gồm: hạt giống Lemon Balm, gói đất hữu cơ, chậu Planta, marker đánh dấu...</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cartIcon: {
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
  },
  link: {
    color: 'green',
    marginTop: 5,
    paddingLeft: 20,
  },
  section: {
    paddingVertical: 10,
    paddingLeft: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    marginRight: 15,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  itemName: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '500',
  },
  itemCategory: {
    color: 'gray',
    fontSize: 12,
  },
  itemPrice: {
    color: 'green',
    fontSize: 14,
  },
  combo: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  comboImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  comboText: {
    flex: 1,
  },
  comboTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  comboDescription: {
    fontSize: 14,
    color: 'gray',
  },
});