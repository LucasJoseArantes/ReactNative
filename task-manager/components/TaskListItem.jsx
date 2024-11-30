import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function TaskListItem({ task, onDelete, onEdit }) {
  const priorityStyles = {
    Alta: styles.highPriority,
    Média: styles.mediumPriority,
    Baixa: styles.lowPriority,
  };

  return (
    <View style={styles.item}>
      <View style={[styles.priorityIndicator, priorityStyles[task.priority]]} />
      <View style={styles.details}>
        <Text style={styles.name}>{task.name}</Text>
        <Text style={styles.description}>{task.description}</Text>
      </View>
      <Pressable onPress={() => onEdit(task)} style={styles.actionButton}>
        <Text style={styles.edit}>Editar</Text>
      </Pressable>
      <Pressable onPress={() => onDelete(task.name)} style={styles.actionButton}>
        <Text style={styles.delete}>Excluir</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  priorityIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  highPriority: { backgroundColor: '#FF5252' },
  mediumPriority: { backgroundColor: '#FFB74D' },
  lowPriority: { backgroundColor: '#81C784' },
  details: {
    flex: 1,
    marginHorizontal: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  description: {
    color: '#666',
    fontSize: 14,
    marginTop: 2,
  },
  actionButton: {
    padding: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  edit: {
    color: '#1976D2',
    fontWeight: 'bold',
    fontSize: 14,
  },
  delete: {
    color: '#D32F2F',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
