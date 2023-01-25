import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FinishScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Felicidades ha terminado sus tareas</Text>
    </View>
  )
}

export default FinishScreen

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
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
    fontFamily: "RobotoBold",
    textAlign: "center",
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