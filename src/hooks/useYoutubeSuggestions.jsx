import React, { useEffect, useState } from 'react'
import { GET_YOUTUBE_SEARCH_SUGGESTIONS } from '../utils/constants';

const useYoutubeSuggestions = () => {
  const [searchQuery , setSearchQuery] = useState("");
  const [suggestions , setSuggestions] = useState([]);
  const getSearchSuggestions = async () => {
     if(!searchQuery) return;
     const data = await fetch(GET_YOUTUBE_SEARCH_SUGGESTIONS(searchQuery));
     const json = await data.json();
     setSuggestions(json[1]);

  }
  useEffect(()=>{
     const timer = setTimeout(() => getSearchSuggestions(), 200);
     return () => {
        clearTimeout(timer);
     }
  } , [searchQuery]);

  return {searchQuery , setSearchQuery , suggestions};
}

export default useYoutubeSuggestions;