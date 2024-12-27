import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ContactForm = ({ onSubmit, initialData }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [group, setGroup] = useState('Família');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || '');
      setPhone(initialData.phone || '');
      setGroup(initialData.group || 'Família');
    }
  }, [initialData]);

  const handleSubmit = () => {
    onSubmit({
      ...initialData,
      name: name.trim(),
      phone: phone.trim(),
      group,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome do contato"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Telefone"
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <View style={styles.groupContainer}>
        <Text style={styles.label}>Grupo:</Text>
        {['Família', 'Amigos', 'Trabalho'].map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => setGroup(item)}
            style={group === item ? styles.selectedGroup : styles.group}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Button title="Salvar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 8,
  },
  groupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  label: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  group: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  selectedGroup: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#007BFF',
    borderRadius: 5,
    backgroundColor: '#E6F0FF',
    marginHorizontal: 5,
  },
});

export default ContactForm;
