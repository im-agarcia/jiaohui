import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Toast from 'react-native-root-toast';

const BotonSmall = () => {
  return (
    <View>
      <Text>Small</Text>
    </View>
  )
}

const BotonMedium = () => {
    return (
      <View>
        <Text>Medium</Text>
      </View>
    )
  }

const BotonBig = ({texto, color, funcion}) => {
    return (
      <TouchableOpacity
        style={styles.opacity}
        onPress={funcion}
      >
          <View
            style={{
                width: 300,
                height:150,
                borderRadius: 20,
                borderColor: color,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
          >
            <Text>
                {texto}
            </Text>
          </View>
      </TouchableOpacity>
    )
  }

export {BotonSmall, BotonMedium, BotonBig}

const styles = StyleSheet.create({
    opacity: {
        padding: 10
    }
})