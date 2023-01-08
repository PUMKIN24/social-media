import * as UploadApi from '../api/UploadRequest.js'



export const uploadImage = (data) => async(dispatch)=> {
    console.log(data,"data in uploadaction image")
    try {
        console.log("acion uploasd")
        await UploadApi.uploadImage(data)
        
    } catch (error) {
        console.log(error)
    }
}

export const uploadPost = (data) => async(dispatch) => {
console.log("upload post in action")
console.log(data,"in upload posts")
    dispatch({type: "UPLOAD_START"})


    try {
        const newPost = await UploadApi.uploadPost(data)

        dispatch({type: "UPLOAD_SUCCESS", data: newPost.data})
    } catch (error) {
        console.log(error)
        
        dispatch({type: "UPLOAD_FAIL"})
    }



} 