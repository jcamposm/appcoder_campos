import React, { useState } from "react"
import { StyleSheet, Text, View, Button, FlatList, Image} from "react-native"
import Modal from "./Modal"
import AddItem from "./AddItem"
import Checkbox from 'expo-checkbox';
import FinishScreen from '../screens/FinishScreen'
import FinishList from './FinishList'

const ProductsItem = () => {

  const [textItem, setTextItem] = useState("")
  const [list, setList] = useState([])
  const [itemSelected, setItemSelected] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const [isSelected, setSelection] = useState(false)
  const [isComplete, setComplete] = useState(false)

  const onHandleChangeItem = text => {
    setTextItem(text)
  }

  const onChangeColor = (item) => {
//setItemSelected(item)
setSelection(item)
setComplete()

  }

  const addItem = () => {
    setList(prevState => [...prevState, textItem])
    //setList(const object={...list, select: 'false'})
    setTextItem("")
  }

  const OnHandleDeleteAll = () => {
    setSelection(false)
    setComplete(false)
    setList([])
  }

  const handleModal = item => {
    setItemSelected(item)
    setModalVisible(true)
  }

  const onHandleDelete = item => {
    if(!isSelected) {
    setList(prevState => prevState.filter(element => element !== item))
    setModalVisible(!modalVisible)}
    else{setModalVisible(!modalVisible)
    alert("No puedes eliminar el servicio si se encuentra confirmado")}
  }
  let content = <FinishList finishSale={() => finishingSale()}/>

  const finishingSale = () => {
    if(isSelected) {
      setComplete(true)
  }else{alert("Por Favor, confirme sus servicios antes de continuar")
   }
  }

    if(isComplete && isSelected) {
      content = <FinishScreen 
      DeleteAll={() => OnHandleDeleteAll()}
      />
  }
  

  const renderItem = ({ item }) => (
    <View style={styles.renderItemStyle}>
      <Text>{item}</Text>

      <Checkbox value={isSelected} onValueChange={onChangeColor}></Checkbox>
      <Text style={styles.textState}>Estado: {isSelected ? 'Confirmado' : 'Sin confirmar'}</Text>
  
      <Button title="Edit" onPress={() => handleModal(item)} />
    </View>)

  return (

<View style={styles.container}>
  <View style={styles.imageContainer}>
<Image
          style={styles.image}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
      </View>
      <View style={styles.headerContainer}>
        <Text>Nombre</Text>
        <Text>Descripción</Text>
        <Text>Precio</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Especificar servicio</Text>
        <AddItem
          onChange={onHandleChangeItem}
          textValue={textItem}
          onAddItem={addItem}
          roboto={{fontFamily: "Roboto"}}
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
        roboto={{fontFamily: "Roboto"}}
        //actionChangeColor={onChangeColor(isSelected)}
      />
      {content}
    </View>
  )
}

export default ProductsItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaeaea",
  },
  titleContainer: {
    height: 140,
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  headerContainer: {
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  title: {
    marginBottom: 30,
    fontSize: 30,
    fontWeight: "500",
    color: "#000000",
    fontFamily: "RobotoBold"
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
  },
  buttonFinish:{
    marginBottom: 0,
  }, imageContainer: {
    height: "20%",
  },image: {
    height: "100%",
    width: "100%",
  },
  /*itemContainer: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
  imageContainer: {
    height: "60%",
  },
  textContainer: {
    height: "40%",
  },
  image: {
    height: "100%",
    width: "100%",
  },*/
})