import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import baliye_re_img from './baliye_re_img.jpg'
import hasi_img from './hasi_img.jpg'
import jaiyeSajnaImg from './jaiyeSajnaImg.jpg'
import judaiImg from './judaiImg.jpg'
import Azma_Img from './Azma_Img.jpg'
import mia_Img from './mia_Img.jpg'
import safariImg from './safariImg.jpg'
import vele_img from './vele_img.jpg'
import './img6.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import './img13.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import Baliye_Re from './Baliye_Re.mp3'
import Hasi from './Hasi.mp3'
import JaiyeSajanaDhurandhar from './JaiyeSajanaDhurandhar.mp3'
import Vele from './Vele.mp3'
import Safari from './Safari.mp3'
import MiaCara from './MiaCara.mp3'
import MatAazmaRe from './MatAazmaRe.mp3'
import JudaiJannat from './JudaiJannat.mp3'
import logo from './logo.png'
import logo_small from './logo_small.png'
import upload_area from './upload_area.png'
import upload_added from './upload_added.png'
import add_album from './add_album.png'
import add_song from './add_song.png'
import song_icon from './song_icon.png'
import album_icon from './album_icon.png'
import upload_song from './upload_song.png'

export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon,
    logo,
    logo_small,
    upload_area,
    upload_added,
    add_album,
    add_song,
    song_icon,
    album_icon,
    upload_song
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Global",
        image: img8,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Top 50 India",
        image: img9,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "Trending India",
        image: img10,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Trending Global",
        image: img16,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Mega Hits",
        image: img11,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Happy Favorites",
        image: img15,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210"
    }
]

export const songsData = [
    {
        id:0,
        name: "Baliye Re",
        image: baliye_re_img,
        file:Baliye_Re,
        desc:"Where words fail, music speaks",
        duration:"3:00"
    },
    {
        id:1,
        name: "Hasi ",
        image: hasi_img,
        file:Hasi,
        desc:"Without music, life would be a mistake",
        duration:"2:20"
    },
    {
        id:2,
        name: "Jaiye Sajana Dhurandhar",
        image: jaiyeSajnaImg ,
        file:JaiyeSajanaDhurandhar,
        desc:"Music is the shorthand of emotion",
        duration:"2:32"
    },
    {
        id:3,
        name: "Judai Jannat",
        image: judaiImg,
        file:JudaiJannat,
        desc:"Music is love in search of a word",
        duration:"2:50"
    },
    {
        id:4,
        name: "Mat Azma Re",
        image: Azma_Img,
        file:MatAazmaRe,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:10"
    },
    {
        id:5,
        name: "Mia Cara",
        image: mia_Img,
        file:MiaCara,
        desc:"Music is the universal language of mankind",
        duration:"2:45"
    },
    {
        id:6,
        name: "Safari",
        image: safariImg,
        file:Safari,
        desc:"learn the test not to quit",
        duration:"2:18"
    },
    {
        id:7,
        name: "Vele",
        image: vele_img,
        file:Vele,
        desc:"Happy Tunes!!",
        duration:"3:51"
    }
]