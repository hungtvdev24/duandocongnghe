// screens/Cart.tsx
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Modal, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Cart = () => {
  const [quantity, setQuantity] = useState(2);
  const [modalVisible, setModalVisible] = useState(false);

  const product = {
    id: '1',
    name: 'Spider Plant',
    category: 'Ưa bóng',
    price: '250.000đ',
    image: 'https://via.placeholder.com/100',
  };

  const handleDelete = () => {
    setModalVisible(true);
  };

  const confirmDelete = () => {
    setModalVisible(false);
    Alert.alert('Đã xóa đơn hàng');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} onPress={() => {}} />
        <Text style={styles.headerTitle}>GIỎ HÀNG</Text>
        <Ionicons name="trash-outline" size={24} onPress={handleDelete} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cartItem}>
          <TouchableOpacity style={styles.checkbox}></TouchableOpacity>
          <Image source={{ uri: product.image }} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{product.name} | {product.category}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
                <Ionicons name="remove-circle-outline" size={24} color="gray" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                <Ionicons name="add-circle-outline" size={24} color="gray" />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={handleDelete}>
            <Text style={styles.deleteText}>Xóa</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footerContainer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Tạm tính</Text>
          <Text style={styles.totalPrice}>{(250000 * quantity).toLocaleString()}đ</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Tiến hành thanh toán</Text>
        </TouchableOpacity>
      </View>

      {/* Modal xác nhận xóa */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Xác nhận xóa tất cả đơn hàng?</Text>
            <Text style={styles.modalMessage}>Thao tác này sẽ không thể khôi phục.</Text>
            <TouchableOpacity style={styles.confirmButton} onPress={confirmDelete}>
              <Text style={styles.confirmButtonText}>Đồng ý</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelButtonText}>Hủy bỏ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 10,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    color: 'green',
    marginVertical: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  deleteText: {
    color: 'red',
    marginLeft: 10,
  },
  footerContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  totalText: {
    fontSize: 16,
    color: 'gray',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  checkoutButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  cancelButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: 'gray',
    fontSize: 16,
  },
});
