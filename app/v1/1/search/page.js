"use client"
import React from 'react'
import { useState } from 'react'
import Nav from '../../components/homeutils/Nav'
import Footer from '../../components/homeutils/Footer'
import SearchBar from './components/SearchBar'
import Results from './components/Results'
import axios from 'axios'
import { SEARCH_HOST, SEARCH_KEY } from '@/Constants'

const page = () => {
  const [searchdata, setsearchdata] = useState();
  const [result, setresult] = useState();
  const [loading, setloading] = useState(false);
  const [hidden, sethidden] = useState(false);


  const handleclick = (e) => {
    e.preventDefault();
    setloading(true);
    sethidden(true);

    const options = {
      method: 'GET',
      url: 'https://real-time-product-search.p.rapidapi.com/search',
      params: {
        q: searchdata,
        country: 'us',
        language: 'en'
      },
      headers: {
        'X-RapidAPI-Key': SEARCH_KEY,
        'X-RapidAPI-Host': SEARCH_HOST
      }
    };

    (async () => {
      try {
        const response = await axios.request(options);
        setresult(response.data.data);
        setloading(false);
      } catch (error) {
        console.error(error);
        setloading(false);
      }
    })()


  }


  return (
    <>
      <Nav />
      <SearchBar loading={loading} search={searchdata} get={result} set={setsearchdata} handle={handleclick} />
      <Results loading={loading} result={result} />
      <Footer />
    </>
  )
}

export default page