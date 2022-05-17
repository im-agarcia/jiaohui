import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { BotonBig, LogoSmall } from '../../components/index'


const Main = () => {
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
          funcion= {()=>{}}
        />

        <BotonBig
          texto='Cumpleañer@s'
          color= 'lime'
          funcion= {()=>{}}
        />

        <BotonBig
          texto='Ministerios'
          color= 'green'
          funcion= {()=>{}}
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
  }
})

