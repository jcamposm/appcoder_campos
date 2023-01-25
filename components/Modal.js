import Checkbox from 'expo-checkbox';
import { View, StyleSheet, Text, Button, Modal as NewModal } from "react-native"

const Modal = ({
  isVisible,
  actionDeleteItem,
  itemSelected,
  onDismissModal,
  onChangeColor,
  isSelected,
  roboto,
}) => {
    //const [isSelected, setSelection] = useState(false);
  return (
    <NewModal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalStyle}>
          <Text style={{...styles.modalTextStyle, ...roboto}}>{itemSelected}</Text>
          <View style={styles.buttonModal}>
          <Button style={styles.button} title="Volver" onPress={() => onDismissModal(false)} />
          <Button style={styles.button} title="Borrar" onPress={() => actionDeleteItem()} />

          </View>
          <Text style={{...styles.label, ...roboto}}>¿Quiéres completar la tarea?</Text>
          <Checkbox
          //value={isSelected}
          //onValueChange={onChangeColor}
          value={isSelected}
          onValueChange={onChangeColor}
          style={styles.checkbox}
        />


        </View>
        <Text>La tarea está: {isSelected ? '👍' : '👎'}</Text>
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
    backgroundColor: "#d4fff7",
    borderRadius: 10,
    padding: 50,
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
    justifyContent: 'space-around',
  },
  checkbox: {
    marginTop: 20,
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  buttonModal:{
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  button: {
    margin: 1,
    padding: 1,
    color: 'red',
  }
})
