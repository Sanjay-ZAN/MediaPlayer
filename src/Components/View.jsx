import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ViewCard from './ViewCard'
import { getAllVideosAPI } from '../services/allAPI'

function View({uploadVideoResponse}) {
  const [deleteVideoResponse,setDeleteVideoResponse] = useState(false)
  const [allVideos,setAllVideos] = useState([])
  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoResponse(false)
  },[uploadVideoResponse,deleteVideoResponse])

  const getAllUploadedVideos = async ()=>{
   const result = await getAllVideosAPI()
   if(result.status===200){
    console.log(result);
    setAllVideos(result.data)
   }else{
    console.log("API Failed");
    setAllVideos([])
   }
  }
  return (
    <>
      <Row>
        {
          allVideos?.length>0?allVideos.map(video=>(
            <Col className='mb-4' sm={12} md={6} lg={4} x1={3}>
          <ViewCard setDeleteVideoResponse={setDeleteVideoResponse} video={video} />
        </Col>
          )):<p className='fs-3 text-warning fw-older'>No Videos are uploaded yet</p>
          
        }
      </Row>
    </>
  )
}

export default View