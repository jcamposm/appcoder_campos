import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, Modal as NewModal } from "react-native"

const Modal = ({
  isVisible,
  actionDeleteItem,
  itemSelected,
  onDismissModal,
  //isSelected,
}) => {
    const [isSelected, setSelection] = useState(false);
  return (
    <NewModal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalStyle}>
          <Text style={styles.modalTextStyle}>{itemSelected}</Text>
          <Button title="Delete" onPress={() => actionDeleteItem()} />
          <Button title="Dismiss" onPress={() => onDismissModal(false)} />

          <Checkbox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Do you like React Native?</Text>

        </View>
        <Text>Is CheckBox selected: {isSelected ? '👍' : '👎'}</Text>
      </View>
    </NewModal>
  )
}

export default Modal

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalStyle: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTextStyle: {
    fontSize: 30,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    marginTop: 20,
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
})