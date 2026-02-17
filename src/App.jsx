import axios from 'axios'

const App = () => {

  const getData = async () => {
    try {
      const res = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
      <div className='h-screen bg-black text-white p-4'>
        <button onClick={getData} className='bg-green-600 active:scale-95 mb-3 rounded px-5 py-2'>
          getData
        </button> 
      </div>
    )
  }

  export default App