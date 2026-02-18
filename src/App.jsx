import axios from 'axios'
import { useState } from 'react'
const App = () => {

  const [userData, setUserData] = useState([])

  const getData = async () => {
    try {
      const res = await axios.get('https://picsum.photos/v2/list?page=2&limit=40')
      setUserData(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  let printUserData = 'Users are not found';

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


  // for printing data in console
  return (
    <div className=' bg-gray-900 overflow-auto min-h-screen p-2'>
      <button onClick={getData} className='bg-green-600 font-semibold text-white active:scale-95 mb-3 rounded px-5 py-2'>
        getData
      </button>

      <div className='text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-2'>
        {printUserData}
      </div>
    </div>
  )
}

export default App