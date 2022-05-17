import { StyleSheet, Image } from 'react-native'
import React from 'react'


const LogoSmall = ({url}) => {
  return (
    <Image
        source={{uri:url}}
        style={styles.small}
    />
  )
}

const styles = StyleSheet.create({
    small: {
        width: 200,
        height: 200
    }
})

export {LogoSmall}
