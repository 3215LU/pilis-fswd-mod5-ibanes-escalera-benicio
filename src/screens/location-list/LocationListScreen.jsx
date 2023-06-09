import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, Pressable, Image } from 'react-native'
import { styles } from './LocationListScreen.styles'
// import { data } from '../../api/data'
import { SearchBar } from '../../components/search-bar/SearchBar'
import { getLocationList } from '../../api/location.service'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../utils/theme'

export const LocationListScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [locationList, setLocationList] = useState([])

  const handleSearch = (query) => {
    setSearchQuery(query)
  }
  const filteredLocations = locationList.filter(location => (
    location.title.toLowerCase().includes(searchQuery.toLowerCase())
  ))

  useEffect(() => {
    getLocationList()
      .then(data => {
        setLocationList(data)
      })
      .catch(err => console.log(err))
  }, [])

  const location = ({ item }) => (
    <Pressable onPress={() => navigation.navigate('LocationDetail', { item })}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: `https://drive.google.com/uc?id=${item.images[0]}` }} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name='md-card-outline' size={18} color={COLORS.blue} />
          <Text style={styles.rating}>{item.price}</Text>
        </View>
      </View>
    </Pressable>
  )

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      <FlatList
        data={filteredLocations}
        renderItem={location}
        keyExtractor={item => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  )
}
