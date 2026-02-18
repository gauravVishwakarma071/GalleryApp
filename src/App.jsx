import axios from 'axios'
import { useEffect, useState } from 'react'
const App = () => {

  const [userData, setUserData] = useState([])

  //Fecthing user data via picsum dummy api
  const getData = async () => {
    try {
      const res = await axios.get('https://picsum.photos/v2/list?page=2&limit=40')
      setUserData(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  //useEffect to trigger function(getData)
  useEffect(() => {
    getData()
  }, [])

  //default value
  let printUserData = <h3 className='text-white font-bold'>User are not found</h3>

  //diplay user data (logic)
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx} className='bg-white rounded'>
        <a href={elem.url} target="_blank" rel="noopener noreferrer">
          <div className='bg-black p-0.4 rounded-md'>
            <img
              className='h-40 w-full object-cover rounded'
              src={elem.download_url}
              alt="image" />
          </div>
          <h2 className='text-black font-bold ml-2 '>{elem.author}</h2>
        </a>
      </div>
    })
  }


  // Rendering image on App
  return (
    //Main screen
    <div className=' bg-gray-900 overflow-auto min-h-screen p-2'>

      {/* grid view for user (image data) */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-2'>
        {printUserData}
      </div>

      {userData.length > 0 && (
        <div className='flex justify-center gap-6 items-center p-4'>
          <button className='bg-amber-300 text-sm text-black rounded px-4 py-2 font-semibold active:scale-90'>Prev</button>
          <button className='bg-amber-300 text-sm text-black rounded px-4 py-2 font-semibold active:scale-90'>Next</button>
        </div>
      )}
    </div>
  )
}

export default App