import React,{useState} from 'react'
import Crousels from '../components/crousel'
import Footer from '../components/Footers/Footer'
import LatestAlbum from '../components/LatestAlbum'
import Navbar from '../components/Navbar'
import Sidebar from '../components/sideBar'
import Tickets from '../components/Ticket Booking/Ticket'
import TimeLeft from '../components/TimeLeft/TimeLeft'
import About from './About/About'
import ContactPage from './Contact/Contact'
import Discography from './DiscoGraphy/Discography'
import GalleryArea from './Gallery/Gallery'
import BlogNews from './News/News'
import Tours from './Tours/Tour'



const Home = () => {

    const [isOpen,setIsOpen]= useState(false)

    const toggle= () =>{
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Crousels/>
            <LatestAlbum/>
            <About/>
            <Discography/>
            <TimeLeft/>
            <Tours/>
            <Tickets/>
            <GalleryArea/>
            <BlogNews/>
            <ContactPage/>
            <Footer/>
        </div>
    )
}

export default Home
