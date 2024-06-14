import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

// Veritabanı bağlantısını oluştur
const db = SQLite.openDatabase(
  {
    name: 'shopping_list.db',
    location: 'default',
  },
  () => {
    console.log('Database opened');
  },
  error => {
    console.log('Error opening database: ' + error);
  }
);

// Veritabanı ve Tablo Oluşturma
const createTables = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);',
      [],
      () => {
        console.log('Table created successfully');
      },
      error => {
        console.log('Error creating table: ' + error);
      }
    );
  });
};

// Öğe Ekleme
const addItemToDB = (name, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO Items (name) VALUES (?);',
      [name],
      (_, results) => {
        if (results.rowsAffected > 0) {
          callback();
        }
      },
      error => {
        console.log('Error adding item: ' + error);
      }
    );
  });
};

// Öğeleri Getirme
const getItemsFromDB = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM Items;',
      [],
      (_, results) => {
        const rows = results.rows;
        let items = [];
        for (let i = 0; i < rows.length; i++) {
          items.push(rows.item(i));
        }
        callback(items);
      },
      error => {
        console.log('Error retrieving items: ' + error);
      }
    );
  });
};

const ShoppingList = () => {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Uygulama başlatıldığında tabloyu oluştur
    createTables();
    // Öğeleri yükle
    loadItems();
  }, []);

  const loadItems = () => {
    getItemsFromDB(setItems);
  };

  // Öğe Ekleme ve Güncelleme
  const addItem = () => {
    if (item.trim() !== '') {
      addItemToDB(item, () => {
        setItem('');
        loadItems();
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Shopping List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter item"
          value={item}
          onChangeText={text => setItem(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addItem}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {items.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.footerContainer}>
        <Text style={styles.footer}>Derya Gülmez</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  itemContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  footerContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 20,
  },
  footer: {
    fontSize: 16,
  },
});

export default ShoppingList;
