import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'
import Item from './components/Item'


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemCount />
      
    </>
  )
}

export default App