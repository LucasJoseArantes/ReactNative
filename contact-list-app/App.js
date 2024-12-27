import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

const groupImages = {
  Família: require('./assets/family.png'),
  Amigos: require('./assets/friends.png'),
  Trabalho: require('./assets/work.png'),
};

const App = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'Alice',
      phone: '(21) 9876-5432',
      group: 'Família',
      groupImage: groupImages['Família'],
    },
    {
      id: 2,
      name: 'Bob',
      phone: '(21) 8765-4321',
      group: 'Amigos',
      groupImage: groupImages['Amigos'],
    },
    {
      id: 3,
      name: 'Charlie',
      phone: '(21) 7654-3210',
      group: 'Trabalho',
      groupImage: groupImages['Trabalho'],
    },
  ]);

  const [editingContact, setEditingContact] = useState(null);

  const getGroupImage = (group) => groupImages[group] || null;

  const handleAddContact = (contact) => {
    if (contact.id) {
      handleEditContact(contact);
    } else {
      const newContact = {
        ...contact,
        id: contacts.length + 1,
        groupImage: getGroupImage(contact.group),
      };
      setContacts((prevContacts) => [...prevContacts, newContact]);
    }
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  const handleEditContact = (updatedContact) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) => (contact.id === updatedContact.id ? updatedContact : contact))
    );
    setEditingContact(null);
  };

  return (
    <View style={styles.container}>
      <ContactForm initialData={editingContact} onSubmit={handleAddContact} />
      <ContactList
        contacts={contacts}
        onDelete={handleDeleteContact}
        onEdit={setEditingContact}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default App;
