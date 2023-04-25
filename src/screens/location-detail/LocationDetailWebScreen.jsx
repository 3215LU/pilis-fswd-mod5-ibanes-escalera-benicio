import React from 'react'
import { SafeAreaView } from 'react-native'
import { styles } from './LocationDetailWebScreen.styles'
import WebView from 'react-native-webview'

<<<<<<< HEAD
=======

>>>>>>> 1cc4c0e0fb142989bc6bb2aa02462a69e372baf8
export const LocationDetailWebScreen = ({ route }) => {
  const { url } = route.params
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: url }}
      />
    </SafeAreaView>
  )
}
