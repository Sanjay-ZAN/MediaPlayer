import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Catagory from '../Components/Catagory'

function Home() {
  const [uploadVideoResponse,setUploadVideoResponse] = useState({})

  return (
    <>
    <div className="container mt-5 mb-5 d-flex justify-content-between" >
  <div className="addVideo">
    <Add setUploadVideoResponse={setUploadVideoResponse} />
  </div>
  <Link to={'/history'} style={{textDecoration:'none',color:'white',fontSize:'20px'}} > 
  <b>Watch History </b></Link>
  </div>
   <div className="container-fluid w-100 mt-5 mb-5 row">
    <div className="all-videos col-lg-9">
      <h2>All Uploaded Videos</h2>
      <View uploadVideoResponse={uploadVideoResponse}/>
    </div>
    <div className="category col-lg-3">
      <Catagory/>
    </div>
   </div>
    
    </>
  )
}

export default Home