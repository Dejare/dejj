import axios, { Axios } from "axios";
import React, { useState, useEffect, useRef } from "react";
import { Grid } from "react-loader-spinner";
import "../styles/Search.scss";
import Gif from "./Gif";
import Home from './Home'
import Search from './Search'

const SearchResults = ({}) => {

    // states

    const [Searchdata, setSearchdata] = useState();
    const [InputValue, setInputValue] = useState("");
    const [Loading, setLoading] = useState(false);
    const [Submit, setSubmit] = useState(false);

    // 

    // API CALL
    useEffect(() => {
        Submit
          ? axios
              .get(
                `http://api.giphy.com/v1/gifs/search?q=${InputValue}&api_key=YpvCPjedOXNcK5LMK9DbfmSvl4TUqZSU&limit=5`
              )
              .then((res) => {
                console.log(res.data.data);
                setSearchdata(res.data.data);
                setLoading(true);
              })
          : console.log("none");
      }, []);

    //   getting value 
    function getdata(val) {
        console.log(val.target.value);
        setSubmit(false);
        setInputValue(val.target.value);
      }


      {
        Loading ? (
          Searchdata.map((results) => {
            return (
              <Gif
                key={results.id}
                text={results.title}
                imaage={results.images.fixed_height_small.url}
              />
            );
          })
        ) : (
          <Grid />
        );
      }
  return (
    <Home/>

  )
}

export default SearchResults