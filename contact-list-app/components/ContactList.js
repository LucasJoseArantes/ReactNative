import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onDelete, onEdit }) => {
  return (
    <FlatList
      data={contacts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ContactItem contact={item} onDelete={onDelete} onEdit={onEdit} />
      )}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ContactList;
