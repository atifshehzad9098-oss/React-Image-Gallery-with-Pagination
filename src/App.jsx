import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getdata = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
    console.log(userData)
  }
  useEffect(function() {
    getdata();
  }, [index])

  let printUserData = <h3 className='text-gray-200 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>
  if(userData.length > 0){
    printUserData = userData.map(function (elem, idx) {
      return (
        <Card key={idx} elem={elem} />
      ) 
    })
  }

  return (
    <div className='bg-black overflow-auto p-4 h-screen text-white'>
      <div className='mt-5 flex flex-wrap gap-5 h-{80%}'>{printUserData}</div>
      <div className='flex justify-center items-center m-5 gap-10'>
        <button className='bg-gray-600 text-white rounded px-8 cursor-pointer active:scale-95 py-2 font-semibold'onClick={() => {
          if(index>1){
            setIndex(index - 1)
            setUserData([])
          }
        }}>Prev</button>
        <h3>Page {index}</h3>
        <button className='bg-gray-600 text-white rounded px-8 cursor-pointer active:scale-95 py-2 font-semibold'onClick={() => {
          setUserData([])
          setIndex(index + 1)
        }}>Next</button>
      </div>
    </div>
  )
}

export default App
