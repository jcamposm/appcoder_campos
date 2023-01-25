import React, { useState } from "react"
import { StyleSheet, Text, View, Button, FlatList} from "react-native"
import Modal from "./components/Modal"
import AddItem from "./components/AddItem"
import Checkbox from 'expo-checkbox';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import FinishScreen from './screens/FinishScreen'
import FinishList from './components/FinishList'


export default function App() {

  const [loaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    RobotoThin: require('./assets/fonts/Roboto-Thin.ttf')
  })

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

  const handleModal = item => {
    setItemSelected(item)
    setModalVisible(true)
  }

  const onHandleDelete = item => {
    if(isSelected == true) {
    setList(prevState => prevState.filter(element => element !== item))
    setModalVisible(!modalVisible)}
    else{setModalVisible(!modalVisible)
    alert("Complete la tarea antes de eliminarla de la lista")}
  }
  let content = <FinishList finishSale={() => finishingSale()}/>

  const finishingSale = () => {
    if(isSelected === true) {
      setComplete(true)
  }else{alert("Por Favor, termine sus tareas pendientes")
   }
  }

    if(isComplete === true && isSelected === true) {
      content = <FinishScreen/>
  }
  

  const renderItem = ({ item }) => (
    <View style={styles.renderItemStyle}>
      <Text>{item}</Text>

      <Checkbox value={isSelected} onValueChange={onChangeColor}></Checkbox>
      <Text style={styles.textState}>Estado: {isSelected ? 'Completado' : 'Incompleto'}</Text>
  
      <Button title="Edit" onPress={() => handleModal(item)} />
    </View>
  )

  if(!loaded) {return null}


  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Lista de Tareas</Text>
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
  }
  })