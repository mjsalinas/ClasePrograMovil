import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton';

type Book = {
  id: string;
  title: string;
  author: string;
  publisher?: string;
  publication_year?: number;
  genre?: string;
  description?: string;
  cover_image_url?: string;
};

export default function Home({ navigation, route }: any) {
  const { email } = route.params;
  const [books, setBooks] = useState<Book[]>([]);

  const renderItem = ({ item }: { item: Book }) => (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{ uri: item.cover_image_url || 'https://via.placeholder.com/150' }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
        {item.genre && <Text style={styles.genre}>{item.genre}</Text>}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bienvenido, {email}</Text>
      <CustomButton
        title="Agregar nuevo libro"
        onPress={() => navigation.navigate('RegisterBook')}
      />
      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 20, backgroundColor: '#fff' },
  header: { fontSize: 20, textAlign: 'center', marginBottom: 10 },
  list: { paddingHorizontal: 16 },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    marginVertical: 8,
    padding: 10,
    alignItems: 'center'
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 4,
    marginRight: 10,
  },
  info: {
    flexShrink: 1
  },
  title: { fontWeight: 'bold', fontSize: 16 },
  author: { color: '#555' },
  genre: { fontStyle: 'italic' },
});