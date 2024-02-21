"use client"
import React, { useEffect, useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react'
import Nav from '../../components/homeutils/Nav'
import Footer from '../../components/homeutils/Footer'
import SearchBar from './components/SearchBar'
import Results from './components/Results'
import axios from 'axios'
import { SEARCH_HOST, SEARCH_KEY } from '@/Constants'

const page = () => {
  const ref = useRef(null)
  const [searchdata, setsearchdata] = useState();
  const [result, setresult] = useState();
  const [suggestion, setSuggestion] = useState([]);
  const [loading, setloading] = useState(false);
  const [hidden, sethidden] = useState(false);


  const handleclick = (e) => {
    e?.preventDefault();
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
        ref.current.continuousStart()
        const response = await axios.request(options);
        setsearchdata("")
        setresult(response.data.data);
        setloading(false);
        ref.current.complete()
      } catch (error) {
        console.error(error);
        setsearchdata("")
        setloading(false);
        ref.current.complete()
      }
    })()
  }

  let timeoutId;
useEffect(()=> {
const debounce = (func, delay) => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(func, delay);
};
debounce(async() => {
  if(searchdata?.length > 1) { 
  const ans = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchdata}`)
  console.log(ans.data)
  setSuggestion(ans.data)
  }
   }, );
 

},[searchdata])

const handlesuggestion = (e)=> {
  setSuggestion([])
setsearchdata(e)
handleclick()

}
  return (
    <>
     <LoadingBar color='#f11946' ref={ref} />
      <Nav />
      <SearchBar handlesuggestion={handlesuggestion} suggestion={suggestion} loading={loading} search={searchdata} get={result} set={setsearchdata} handle={handleclick} />
      <Results loading={loading} result={result} />
      <Footer />
    </>
  )
}

export default page