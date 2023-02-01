import { StyleSheet, Button, View } from 'react-native'
import React from 'react'

const FinishList = ({finishSale}) => {

return (
    <View style={styles.buttonFinish} >
    <Button title="Agendar Servicio" onPress={finishSale} />
</View>
)
}

export default FinishList

const styles = StyleSheet.create({
    buttonFinish:{
        marginBottom: 0,
    },
})