// screens/Search.tsx
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Search = () => {
  const [recentSearches, setRecentSearches] = useState([
    { id: '1', name: 'Spider Plant' },
    { id: '2', name: 'Song of India' },
  ]);

  const handleRemoveSearch = (id) => {
    setRecentSearches(recentSearches.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>TÌM KIẾM</Text>
      </View>

      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Tìm kiếm"
          placeholderTextColor="#999"
        />
        <Ionicons name="search-outline" size={20} color="#999" />
      </View>

      <Text style={styles.sectionTitle}>Tìm kiếm gần đây</Text>
      <FlatList
        data={recentSearches}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.recentSearchItem}>
            <Ionicons name="time-outline" size={18} color="#999" />
            <Text style={styles.recentSearchText}>{item.name}</Text>
            <TouchableOpacity onPress={() => handleRemoveSearch(item.id)}>
              <Ionicons name="close-outline" size={18} color="#999" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recentSearchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  recentSearchText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
});
