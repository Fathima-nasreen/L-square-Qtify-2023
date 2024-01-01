import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import './App.css';
//import Navbar from '../components/Navbar/Navbar';
//import HeroSection from '../components/HeroSection/HeroSection';
//import Section from '../components/Section/Section';

import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import Section from './Components/Section/Section';

//import Filter from './Components/Filter Section/Filter Section';
//import Navbar from '../../L-Square-Qtify-2023/src/Components/Navbar';
//import HeroSection from '../../L-Square-Qtify-2023/src/Components/Hero Section';
//import Section from '../../L-Square-Qtify-2023/src/Components/Section';
import {useEffect} from 'react'

//const ENDPOINT = 'your-endpoint-value';

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

