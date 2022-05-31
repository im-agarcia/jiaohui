import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { BotonBig, LogoSmall } from '../../components/index'
import { useNavigation } from '@react-navigation/native'


const Main = () => {

  const navigation = useNavigation()

  return (

      <View 
        style={styles.container}
      >
        <LogoSmall
          url= 'https://i.ibb.co/7YnH0vj/Isotipo-full-color.png'
        />
        
        <BotonBig
          texto='Miembros'
          color= 'red'
          funcion= {()=>navigation.navigate('Members')}
        />

        <BotonBig
          texto='Cumpleañer@s'
          color= 'lime'
          funcion= {()=>navigation.navigate('BirthDays')}
        />

        <BotonBig
          texto='Ministerios'
          color= 'green'
          funcion= {()=>navigation.navigate('Ministries')}
        />

      </View>
  )
}


export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'blue',
    justifyContent: 'center', 
    alignItems:'center',
  },
  imagen: {
    width: 200,
    height: 200
  },
  opacity: {
    padding: 10
  }
})

