import React,{useEffect, useState} from 'react'
import Gif from './Gif'
import axios from 'axios'
import { Grid } from 'react-loader-spinner'

const Trendsticker = () => {

    const [stickers, setSticker] = useState()
    const [Loading, setLoading] = useState(false)

    useEffect(() => {
      axios.get("https://api.giphy.com/v1/stickers/trending?api_key=YpvCPjedOXNcK5LMK9DbfmSvl4TUqZSU")
      .then((res)=>{
        setSticker(res.data.data)
        setLoading(true)
        console.log(res.data.data)
      })
  }, [])

  return (
      <>
    {Loading ? stickers.map (sticker=> {
        return(
          <div className='gifwrapper'>
          <Gif key={sticker.id} text={sticker.title} image={sticker.images.fixed_height_small.url}/>
          </div> 
        )
      }):  <div className='loaderAligner'>
      <Grid color='white' />
   </div>}
      </>
  )
}

export default Trendsticker