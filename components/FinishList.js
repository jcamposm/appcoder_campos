import { StyleSheet, Button, View } from 'react-native'
import React from 'react'

const FinishList = ({finishSale}) => {

return (
    <View style={styles.buttonFinish} >
    <Button title="Finalizar Tareas" onPress={finishSale} />
</View>
)
}

export default FinishList

const styles = StyleSheet.create({
    buttonFinish:{
        marginBottom: 0,
    },
})