import React, { useEffect, useState , useDi } from "react";
import { GET_YOUTUBE_SEARCH_SUGGESTIONS } from "../utils/constants";
import { useSelector , useDispatch } from "react-redux";
import { cacheResults } from "../store/slices/searchSlice";
const useYoutubeSuggestions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search.searchInfo);
  const getSearchSuggestions = async () => {
    if (!searchQuery) return;
    const data = await fetch(GET_YOUTUBE_SEARCH_SUGGESTIONS(searchQuery));
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({query: searchQuery, results: json[1], }));
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return { searchQuery, setSearchQuery, suggestions };
};

export default useYoutubeSuggestions;
