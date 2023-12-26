import React, { useEffect, useState } from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import { addCategoryAPI, getAVideosAPI, getAllCategoryAPI, removeCategoryAPI, updateCategoryAPI } from '../services/allAPI';


function Catagory() {
  const [allCategories,setAllCategories]=useState([])
  const[CategoryName,setCategoryName]=useState("")
  const [show, setShow] = useState(false);
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(()=>{
    getAllCategories()
  },[])

    const getAllCategories=async()=>{
    const{data} =await getAllCategoryAPI()
    setAllCategories(data)
  }

  

  const handleAdd =async()=>{
    if(CategoryName){
      const result =await addCategoryAPI({CategoryName, allVideos:[],})
      if(result.status>=200&&result.status<300){
        handleClose()
        setCategoryName("")
       
      }else{
        alert(result.message)
      }
    }else{
      alert("complete the form")
    }
  }
  const removeCategory=async(id)=>{
    await removeCategoryAPI(id)
    getAllCategories()
  }
  const dragOver=(e)=>{
    console.log("Video card dragging over the category!!");
    e.preventDefault()
  }

  const videoDrop = async (e,categoryId)=>{
    const videoId =e.dataTransfer.getData("VideoId")
    console.log("Video id - "+videoId+" dropprd on category - "+categoryId);
    const {data} = await getAVideosAPI(videoId)
    // console.log(data);
    const seletedCategory = allCategories.find(item.id===categoryId)
    seletedCategory.allVideos.push(data)
    console.log(seletedCategory);
    await updateCategoryAPI(categoryId,seletedCategory)
    getAllCategories()
  }
  console.log(allCategories);
  
  return (
    <>
    <div className='d-grid'>
    <Button className='btn btn-info' onClick={handleShow}>
         Category
      </Button>
      </div>

        {
          allCategories?.length>0?allCategories.map(Category=>(
           <div className='border rounded p-3 mt-2' droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=> videoDrop(e,Category?.id)}>
            <div className='d-flex justify-content-between align-items-center'>
              <h6>{Category?.CategoryName}</h6>
              <button onClick={()=>removeCategory(Category?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
                </div>
           </div> 
      )): <p className='fw-bolder fs-5 text-warning mt-2'>No categories are added</p>
    }
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false} centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category From</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel className='mb-3' controlId="floatingInputCName" label="Category Name">
        <Form.Control type="Text" placeholder="Category Name" onChange={e=>setCategoryName(e.target.value)} />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Catagory