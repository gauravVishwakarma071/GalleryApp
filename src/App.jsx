import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './components/Card'
const App = () => {

  const [userData, setUserData] = useState([])
  let [pageValue, setPageValue] = useState(1)

  //Fecthing user data via picsum dummy api
  const getData = async () => {
    try {
      const res = await axios.get(`https://picsum.photos/v2/list?page=${pageValue}&limit=40`)
      setUserData(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  //useEffect to trigger function(getData)
  useEffect(() => {
    getData()
  }, [pageValue])

  //default value
  let printUserData = <h4 className='text-white font-bold absolute top-1/2 left-1/2 -translate-y-1 -translate-x-1'>Loading...</h4>

  //diplay user data (logic)
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx} className='bg-white rounded'>
        <Card elem={elem} />
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


      {/*Logic to display button */}
      {userData.length > 0 && (
        <div className='flex justify-center gap-6 items-center p-4'>
          <button
            style={{ opacity: pageValue == 1 ? 0.5 : 1 }}
            className='bg-amber-300 text-sm text-black rounded px-4 py-2 font-semibold active:scale-90'
            onClick={() => {
              if (pageValue > 1) {
                setUserData([])
                setPageValue(pageValue - 1)
              }
            }}
          >
            Prev
          </button>

          <h4 className='text-white'>page : {pageValue}</h4>

          <button
            style={{ opacity: pageValue == 12 ? 0.5 : 1 }}
            className='bg-amber-300 text-sm text-black rounded px-4 py-2 font-semibold active:scale-90'
            onClick={() => {
              if (pageValue < 12) {
                setUserData([])
                setPageValue(pageValue + 1)
              }
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default App