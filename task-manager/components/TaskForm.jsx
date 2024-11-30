import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';

export default function TaskForm({ onSubmit, taskToEdit, onCancel }) {
  const [name, setName] = useState(taskToEdit?.name || '');
  const [description, setDescription] = useState(taskToEdit?.description || '');
  const [priority, setPriority] = useState(taskToEdit?.priority || 'Média');

  const handleSubmit = () => {
    if (!name || !description) {
      alert('Preencha todos os campos!');
      return;
    }
    onSubmit({ name, description, priority });
    setName('');
    setDescription('');
    setPriority('Média');
  };

  return (
    <View style={styles.form}>
      <Text style={styles.header}>
        {taskToEdit ? 'Editar Tarefa' : 'Nova Tarefa'}
      </Text>
      <View style={styles.inputsContainer}>
        <TextInput
          placeholder="Nome da Tarefa"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Descrição"
          value={description}
          onChangeText={setDescription}
          style={[styles.input, styles.descriptionInput]}
          multiline
        />
      </View>
      <View style={styles.priorityContainer}>
        <Text style={styles.priorityHeader}>Prioridade:</Text>
        <View style={styles.radioGroup}>
          {['Alta', 'Média', 'Baixa'].map((level) => (
            <Pressable
              key={level}
              onPress={() => setPriority(level)}
              style={[
                styles.radio,
                priority === level && styles.selectedRadioBackground,
              ]}
            >
              <Text style={[styles.radioText, priority === level && styles.selectedRadioText]}>
                {level}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      <View style={styles.actionsContainer}>
        <Pressable onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>
            {taskToEdit ? 'Salvar Alterações' : 'Adicionar Tarefa'}
          </Text>
        </Pressable>
        {taskToEdit && (
          <Pressable onPress={onCancel} style={[styles.button, styles.cancelButton]}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    elevation: 3,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  inputsContainer: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FFF',
    marginBottom: 10,
  },
  descriptionInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  priorityContainer: {
    marginBottom: 15,
  },
  priorityHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 5,
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radio: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
  },
  selectedRadioBackground: {
    backgroundColor: '#E3F2FD',
    borderColor: '#1976D2',
  },
  radioText: {
    fontSize: 14,
    color: '#333',
  },
  selectedRadioText: {
    fontWeight: 'bold',
    color: '#1976D2',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    flex: 1,
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#F44336',
  },
});
