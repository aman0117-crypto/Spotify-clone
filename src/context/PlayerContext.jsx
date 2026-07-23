import { createContext, useEffect, useRef, useState } from 'react'
import { songsData } from '../assets/assets'

// eslint-disable-next-line react-refresh/only-export-components
export const PlayerContext = createContext()

const PlayerContextProvider = (props) => {
  const audioRef = useRef(null)
  const [track, setTrack] = useState(songsData[0])
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(70)
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    if (!audioRef.current) return
    audioRef.current.src = track.file
    audioRef.current.load()
    if (playing) audioRef.current.play()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track])

  useEffect(() => {
    if (!audioRef.current) return
    playing ? audioRef.current.play() : audioRef.current.pause()
  }, [playing])

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume / 100
  }, [volume])

  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = muted
  }, [muted])

  const togglePlay = () => setPlaying((p) => !p)
  const toggleMute = () => setMuted((m) => !m)

  const playWithId = (id) => {
    const selected = songsData.find((s) => s.id === id)
    if (!selected) return
    setTrack(selected)
    setPlaying(true)
  }

  const playNext = () => {
    const idx = songsData.findIndex((s) => s.id === track.id)
    const next = songsData[(idx + 1) % songsData.length]
    setTrack(next)
    setPlaying(true)
  }

  const playPrev = () => {
    const idx = songsData.findIndex((s) => s.id === track.id)
    const prev = songsData[(idx - 1 + songsData.length) % songsData.length]
    setTrack(prev)
    setPlaying(true)
  }

  const handleSeek = (e) => {
    const val = Number(e.target.value)
    setProgress(val)
    if (audioRef.current) audioRef.current.currentTime = val
  }

  const formatTime = (s) => {
    if (!isFinite(s) || s < 0) s = 0
    return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`
  }

  const contextValue = {
    audioRef,
    track, setTrack,
    playing, setPlaying, togglePlay,
    progress, setProgress,
    duration, setDuration,
    volume, setVolume,
    muted, toggleMute,
    playWithId, playNext, playPrev,
    handleSeek, formatTime,
  }

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  )
}

export default PlayerContextProvider