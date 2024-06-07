import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flatcard from './components/Flatcard'
import ElevatedCards from './components/Elevatedcards'
import FancyCard from './components/fancycard'
import Actioncard from './components/Actioncard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcard />
        <ElevatedCards />
        <FancyCard />
        <ContactList />
        <Actioncard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App