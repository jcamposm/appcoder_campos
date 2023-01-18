import React, { useState } from "react"
import { StyleSheet, Text, View, Button, FlatList} from "react-native"
import Modal from "./components/Modal"
import AddItem from "./components/AddItem"
import Checkbox from 'expo-checkbox';


export default function App() {
  const [textItem, setTextItem] = useState("")
  const [list, setList] = useState([])
  const [itemSelected, setItemSelected] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const [isSelected, setSelection] = useState(false)

  const onHandleChangeItem = text => {
    setTextItem(text)
  }

  const onChangeColor = (item) => {
//setItemSelected(item)
setSelection(item)

  }

  const addItem = () => {
    setList(prevState => [...prevState, textItem])
    //setList(const object={...list, select: 'false'})
    setTextItem("")
  }

  const handleModal = item => {
    setItemSelected(item)
    setModalVisible(true)
  }

  const onHandleDelete = item => {
    setList(prevState => prevState.filter(element => element !== item))
    setModalVisible(!modalVisible)
  }

  const renderItem = ({ item }) => (
    <View style={styles.renderItemStyle}>
      <Text>{item}</Text>

      <Checkbox value={isSelected} onValueChange={onChangeColor}></Checkbox>
      <Text style={styles.textState}>Estado: {isSelected ? 'Completado' : 'Incompleto'}</Text>
  
      <Button title="Edit" onPress={() => handleModal(item)} />
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Lista de compras</Text>
        <AddItem
          onChange={onHandleChangeItem}
          textValue={textItem}
          onAddItem={addItem}
        />
      </View>
      <View style={styles.listContainer} >
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item}
          
        />
      </View>
      <Modal
        isVisible={modalVisible}
        itemSelected={itemSelected}
        actionDeleteItem={() => onHandleDelete(itemSelected)}
        onDismissModal={setModalVisible}
        onChangeColor={onChangeColor}
        isSelected={isSelected}
        //actionChangeColor={onChangeColor(isSelected)}

      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#89cbc0",
  },
  titleContainer: {
    height: 200,
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  title: {
    marginBottom: 30,
    fontSize: 30,
    fontWeight: "500",
    color: "#1E283C",
  },
  listContainer: {
    flex: 2,
    marginHorizontal: 30,
    marginTop: 40,
    padding: 3,
  },
  renderItemStyle: {
    height: 60,
    flexDirection: "row",
    marginBottom: 25,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 3,
  },
  renderItemStyleReject: {
    height: 60,
    flexDirection: "row",
    marginBottom: 25,
    backgroundColor: "red",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 3,
  },
  green:{
    backgroundColor: "#5eb130",
  },
  red: {
    backgroundColor: "#e5241e",
  },
  textState:{
    fontSize: 10,
  }
})