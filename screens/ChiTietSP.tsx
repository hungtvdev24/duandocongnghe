// screens/ChiTietSP.tsx
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChiTietSP = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} onPress={() => navigation.goBack()} />
        <Text style={styles.title}>{product.name}</Text>
        <Ionicons name="cart-outline" size={24} />
      </View>

      <Image source={{ uri: product.image }} style={styles.productImage} />

      <View style={styles.productInfo}>
        <View style={styles.tagContainer}>
          <Text style={styles.tag}>{product.category}</Text>
          <Text style={styles.tag}>Ưa bóng</Text>
        </View>
        <Text style={styles.price}>{product.price}</Text>

        <Text style={styles.sectionTitle}>Chi tiết sản phẩm</Text>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Kích cỡ</Text>
          <Text style={styles.detailValue}>Nhỏ</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Xuất xứ</Text>
          <Text style={styles.detailValue}>Châu Phi</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Tình trạng</Text>
          <Text style={styles.detailValue}>Còn 156 sp</Text>
        </View>

        <View style={styles.quantityContainer}>
          <Text>Đã chọn 0 sản phẩm</Text>
          <Text>Tạm tính 0đ</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.quantityButton}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>0</Text>
          <TouchableOpacity style={styles.quantityButton}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChiTietSP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productImage: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
  },
  productInfo: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  tagContainer: {
    flexDirection: 'row',
  },
  tag: {
    backgroundColor: '#e0f2e9',
    color: 'green',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginRight: 10,
  },
  price: {
    color: 'green',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  detailLabel: {
    color: 'gray',
  },
  detailValue: {
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  buyButton: {
    backgroundColor: 'gray',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
