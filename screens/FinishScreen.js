import { StyleSheet, Text, Button, View } from 'react-native'
import React from 'react'

const FinishScreen = ({DeleteAll}) => {
  return (
    <View>
      <Text style={styles.title}>Servicio agendado exitosamente</Text>
      <Button title="Volver a empezar" onPress={DeleteAll}/>
    </View>
  )
}

export default FinishScreen

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
    flex: 1,
    backgroundColor: "#89cbc0",
    marginBottom: 0,
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
  }
  })