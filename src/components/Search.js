import axios, { Axios } from "axios";
import React, { useState, useEffect, useRef } from "react";
import { Grid } from "react-loader-spinner";
import "../styles/Search.scss";
import Gif from "./Gif";

const Search = ({}) => {
  const [Searchdata, setSearchdata] = useState();
  const [InputValue, setInputValue] = useState("");
  const [Loading, setLoading] = useState(false);
  const [Submit, setSubmit] = useState(false);
  // useEffect(() => {
  //   Submit
  //     ? axios
  //         .get(
  //           `http://api.giphy.com/v1/gifs/search?q=${InputValue}&api_key=YpvCPjedOXNcK5LMK9DbfmSvl4TUqZSU&limit=5`
  //         )
  //         .then((res) => {
  //           console.log(res.data.data);
  //           setSearchdata(res.data.data);
  //           setLoading(true);
  //         })
  //     : console.log("none");
  // }, []);

  function startApi() {
    setSubmit(true);
    {
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
    }
    
  }
  // useEffect(() => {
  //   console.log(inputo.value)
  // }, [])
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
    <div className="searchInput">
      <input type="text" placeholder="Search" onChange={getdata}></input>
      <button onClick={startApi}>Submit</button>
    </div>
  );
};

export default Search;
