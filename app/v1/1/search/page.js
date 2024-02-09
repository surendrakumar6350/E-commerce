"use client"
import React from 'react'
import { useState } from 'react'
import Nav from '../../components/homeutils/Nav'
import Footer from '../../components/homeutils/Footer'
import SearchBar from './components/SearchBar'
import Results from './components/Results'
import axios from 'axios'

const page = () => {
    const [searchdata, setsearchdata] = useState();
    const [result, setresult] = useState();


    const handleclick = (e)=> {
        e.preventDefault();


        const options = {
            method: 'GET',
            url: 'https://real-time-product-search.p.rapidapi.com/search',
            params: {
              q: searchdata,
              country: 'us',
              language: 'en'
            },
            headers: {
              'X-RapidAPI-Key': '5b41ed7617msh6a88b6c11efb20ap11438djsn1bc269413c17',
              'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
            }
          };
          
            (async()=> {
                try {
                    const response = await axios.request(options);
                    setresult(response.data.data);
                } catch (error) {
                    console.error(error);
                }
            })()


    }


  return (
    <>
      <Nav />
      <SearchBar search={searchdata} get={result} set={setsearchdata} handle={handleclick} />
      <Results result={result} />
      <Footer />
    </>
  )
}

export default page