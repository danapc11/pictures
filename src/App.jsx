import {useState} from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import SearchImage from './api'
import './App.css'
import searchImage from './api'

function App() {
  const [images, setImages] =useState([])

  const handleSubmit=async(term)=>{
  console.log('uste está buscando con:', term)
  const result=await searchImage(term)

  console.log(result)
  setImages(result)

  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={images} />
    </div>
  )
}

export default App
