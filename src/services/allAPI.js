import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverURL"
 
 
export const uploadNewVideoAPI = async(video)=>{
    return await commonAPI('POST',`${SERVER_URL}/allVideos`,video) 
}

//get all videos
export const getAllVideosAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")

}

//view single video
export const getAVideosAPI = async(id)=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${id}`,"")
}

//insert video to history
export const addVideoToHistoryAPI=async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,video)

}
export const removeVideoAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${id}`,{})
}

//get video from history
export const getHistoryAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

//remove history
export const removeHistoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})

}

export const getAllCategoryAPI =async()=>{
    return await commonAPI("GET",`${SERVER_URL}/category`,"")
}

//add catogory
export const addCategoryAPI =async(category)=>{
    return await commonAPI("POST",`${SERVER_URL}/category`,category)
}

export const removeCategoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/category/${id}`,{})
}

//update category
export const updateCategoryAPI = async(id,categoryDetails) => {
    return await commonAPI("PUT",`${SERVER_URL}/category/${id}`,categoryDetails)
}