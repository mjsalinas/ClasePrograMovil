import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import CustomButton from '../../components/CustomButton';
import api from '../../services/api';

export default function RegisterBookScreen({ navigation }: any) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [publicationYear, setPublicationYear] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [coverImageUrl, setCoverImageUrl] = useState('');

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setCoverImageUrl(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
   
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Título *</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />

      <Text style={styles.label}>Autor *</Text>
      <TextInput style={styles.input} value={author} onChangeText={setAuthor} />

      <Text style={styles.label}>Editorial</Text>
      <TextInput style={styles.input} value={publisher} onChangeText={setPublisher} />

      <Text style={styles.label}>Año de publicación</Text>
      <TextInput
        style={styles.input}
        value={publicationYear}
        onChangeText={setPublicationYear}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Género</Text>
      <TextInput style={styles.input} value={genre} onChangeText={setGenre} />

      <Text style={styles.label}>Descripción</Text>
      <TextInput
        style={[styles.input, styles.textarea]}
        multiline
        value={description}
        onChangeText={setDescription}
      />

      <CustomButton title="Seleccionar imagen" onPress={pickImage} />
      {coverImageUrl ? <Image source={{ uri: coverImageUrl }} style={styles.image} /> : null}

      <CustomButton title="Guardar libro" onPress={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  label: { marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
    marginTop: 4,
  },
  textarea: {
    height: 100,
    textAlignVertical: 'top',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginVertical: 10,
  },
});