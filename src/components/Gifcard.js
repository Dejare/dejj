import React,{useEffect, useState} from 'react'
import Gif from './Gif'
import axios from 'axios'
import { Grid } from 'react-loader-spinner'



const Gifcard = () => {

  const [gifs, setGifs] = useState()
  const [Loading, setLoading] = useState(false)
  useEffect(() => {
    axios.get("https://api.giphy.com/v1/gifs/trending?api_key=YpvCPjedOXNcK5LMK9DbfmSvl4TUqZSU")
    .then((res)=>{
      setGifs(res.data.data)
      setLoading(true)
      console.log(res.data)
    })
}, [])

  return (
    <>

    {
      Loading ? gifs.map(gif=>{
        return(
          <div className='gifwrapper'>
          <Gif key={gif.id} text={gif.title} image={gif.images.fixed_height_small.url}/>
          </div> 
        )
      }) : <div className='loaderAligner'>
         <Grid color='white' />
      </div>
    }
          
    </>
  )
}

export default Gifcard