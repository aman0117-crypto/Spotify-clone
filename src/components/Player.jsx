import { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {
  const {
    audioRef, track, playing, togglePlay,
    progress, setProgress, duration, setDuration,
    volume, setVolume, muted, toggleMute,
    playNext, playPrev, handleSeek, formatTime,
  } = useContext(PlayerContext)

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      <audio
        ref={audioRef}
        onTimeUpdate={(e) => setProgress(e.target.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.target.duration)}
        onEnded={playNext}
      />

      {/* Now playing */}
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12' src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p className='text-gray-400 text-sm'>{track.desc}</p>
        </div>
      </div>

      {/* Controls */}
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4'>
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
          <img className='w-4 cursor-pointer' onClick={playPrev} src={assets.prev_icon} alt="" />
          <img
            className='w-4 cursor-pointer'
            onClick={togglePlay}
            src={playing ? assets.pause_icon : assets.play_icon}
            alt=""
          />
          <img className='w-4 cursor-pointer' onClick={playNext} src={assets.next_icon} alt="" />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
        </div>
        <div className='flex items-center gap-5'>
          <p className='text-xs'>{formatTime(progress)}</p>
          <input
            type='range'
            min={0}
            max={duration || 0}
            value={progress}
            onChange={handleSeek}
            className='w-[60vw] max-w-[500px] accent-green-500'
          />
          <p className='text-xs'>{formatTime(duration)}</p>
        </div>
      </div>

      {/* Right controls */}
      <div className='hidden lg:flex items-center gap-2 opacity-75'>
        <img className='w-4' src={assets.mic_icon} alt="" />
        <img className='w-4' src={assets.queue_icon} alt="" />
        <img className={`w-4 cursor-pointer ${muted ? 'opacity-40' : ''}`} onClick={toggleMute} src={assets.speaker_icon} alt="" />
        <img className='w-4' src={assets.volume_icon} alt="" />
        <input type='range' min={0} max={100} value={volume} onChange={(e) => setVolume(Number(e.target.value))} className='w-20 accent-green-500'/>
        <img className='w-4' src={assets.mini_player_icon} alt="" />
        <img className='w-4' src={assets.zoom_icon} alt="" />
      </div>
    </div>
  )
}

export default Player