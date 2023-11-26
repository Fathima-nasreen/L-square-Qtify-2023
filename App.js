import axios from 'axios';
import {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Section from './Components/section';
import {useEffect} from 'react'

const ENDPOINT = 'https://qtify-backend-labs.crio.do/'

function App() {
    const [topAlbums, setTopAlbums] = useState([])
    const [newAlbums, setNewAlbums] = useState([])

    useEffect(() => {
        axios.get('${ENDPOINT)albums/top')
        .then(({data}) => {
            setTopAlbums(data)
        })
        axios.get('${ENDPOINT)albums/new')
        .then(({data}) => {
            setNewAlbums(data)
        })
    }, [])

    return ( <>
    <Navbar />
    <HeroSection />
    <Section title='Top Albums' data={topAlbums}/>
    <Section title='New Albums' data={newAlbums}/>
    </>
    );
}

export default App;
