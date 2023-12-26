import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
      <div className="container">
        <div className="row align-items-center m-5">
          <div className="col-lg-6">
            <h3> Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{color:'white'}} className='mt-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat quibusdam itaque, minus eligendi alias non voluptates esse expedita quidem nemo ipsum similique? Dolores velit vitae saepe, deserunt reprehenderit earum.</p>
            <br />
            <Link to={'/home'}className='btn btn-info border border-radius-rounded'> Get staterd</Link> 
          </div>
          <div className="col-lg-1">
          </div>
          <div className="col-lg-5">
            <img  src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt=""  />

          </div>
        </div>

      </div>
      <div className='mt-5'>
        <h2 className='text-center text-bold mt-5'>Features</h2>
      <div className="d-flex justify-content-between ms-5 me-5 mt-5">
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src=" https://i.pinimg.com/originals/53/97/7e/53977ec36a46d13a45ceeb5974b3d117.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
        caption
        </Card.Text>
      </Card.Body>
    </Card>
     
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src=" https://media1.tenor.com/images/18a0a33c874e26a55fe2456347567ae9/tenor.gif?itemid=16911003" />
      <Card.Body>
        <Card.Title>Categorise Video</Card.Title>
        <Card.Text>
        caption
        </Card.Text>
      </Card.Body>
    </Card>

      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src=" https://th.bing.com/th/id/R.e2899d325cae9f83240852fc09a111d8?rik=CE8%2birz5hOKvVw&riu=http%3a%2f%2fwww.animated-gifs.fr%2fcategory_leisure%2fmusic-notes%2f03951725.gif&ehk=3GXh503EIi3FrlQ5LFiNBlPZgZubL1ZwHXJHBi3SDgU%3d&risl=&pid=ImgRaw&r=0" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
        caption
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className='container border border-radius mt-5'>
      <div className='row align-items-center  m-5'> 
      <div className="col-lg-6">
        <h3 style={{color:'orange'}}> Simple,Fast and poweurful  </h3>
        <h4 >Play Everything :</h4>
         <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, nemo alias ipsa amet doloribus unde voluptas nulla vel assumenda dolor</p>
         <h4>Categorise Video :</h4>
         <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, nemo alias ipsa amet doloribus unde voluptas nulla vel assumenda dolor</p>
         <h4>Watch History :</h4>
         <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, nemo alias ipsa amet doloribus unde voluptas nulla vel assumenda dolor</p>
        </div>
        <div className="col-lg-6">
          <div className='justify-content'>
          <iframe style={{width:'550px',height:'260px'}} src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
    </div>
      </div> 
</div>
    </>
  )
}

export default LandingPage
