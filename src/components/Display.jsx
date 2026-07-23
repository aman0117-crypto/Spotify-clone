import { useContext } from 'react'
import { assets, albumsData, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Display = () => {
  const { playWithId } = useContext(PlayerContext)

  return (
    <div className='w-full h-full m-2 px-6 pt-4 pb-24 rounded bg-gradient-to-b from-[#3a2a5d] to-[#121212] overflow-auto text-white'>

      {/* Top nav */}
      <div className='flex items-center justify-between mb-6'>
        <div className='flex items-center gap-2'>
          <img className='w-8 bg-black p-2 rounded-full cursor-pointer' src={assets.arrow_left} alt="" />
          <img className='w-8 bg-black p-2 rounded-full cursor-pointer' src={assets.arrow_right} alt="" />
        </div>
        <div className='flex items-center gap-4'>
          <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl cursor-pointer font-semibold'>
            Explore Premium
          </p>
          <p className='bg-black py-1 px-3 rounded-2xl cursor-pointer'>Install App</p>
          <p className='bg-purple-600 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer'>
            U
          </p>
        </div>
      </div>

      {/* Filter pills */}
      <div className='flex items-center gap-3 mb-6'>
        <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
        <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
        <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
      </div>

      {/* Featured Charts */}
      <div className='mb-8'>
        <h1 className='text-2xl font-bold mb-4'>Featured Charts</h1>
        <div className='flex overflow-auto gap-4 pb-2'>
          {albumsData.map((item) => (
            <div
              key={item.id}
              className='min-w-[180px] p-3 rounded cursor-pointer hover:bg-[#242424]'
              style={{ backgroundColor: item.bgColor + '33' }}
            >
              <img className='rounded w-full aspect-square object-cover' src={item.image} alt={item.name} />
              <p className='font-bold mt-2 truncate'>{item.name}</p>
              <p className='text-gray-300 text-sm line-clamp-2'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Today's biggest hits */}
      <div className='mb-8'>
        <h1 className='text-2xl font-bold mb-4'>Today's biggest hits</h1>
        <div className='flex overflow-auto gap-4 pb-2'>
          {songsData.map((item) => (
            <div
              key={item.id}
              onClick={() => playWithId(item.id)}
              className='min-w-[180px] p-3 rounded cursor-pointer hover:bg-[#242424]'
            >
              <img className='rounded w-full aspect-square object-cover' src={item.image} alt={item.name} />
              <p className='font-bold mt-2 truncate'>{item.name}</p>
              <p className='text-gray-300 text-sm line-clamp-2'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Display