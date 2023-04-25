import React from 'react'
import { TextInput, View } from 'react-native'
import { styles } from './SearchBar.styles'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../utils/theme'

<<<<<<< HEAD
=======

>>>>>>> 1cc4c0e0fb142989bc6bb2aa02462a69e372baf8
export const SearchBar = ({ handleSearch, searchQuery }) => {
  return (
    <View style={styles.searchContainer}>
      <Ionicons name='search' size={20} color={COLORS.blue} />
      <TextInput
        placeholder='¿A dónde quieres ir?'
        style={styles.searchInput}
        onChangeText={handleSearch}
        value={searchQuery}
      />
    </View>
  )
}
