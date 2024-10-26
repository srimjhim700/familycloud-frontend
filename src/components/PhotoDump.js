import React,{useState} from 'react'
import '../styles/photodump.css'

function PhotoDump() {
  const [photos,setphotos] =useState([]);
  const getphotos = async ()=>{
    try {
            const response = await fetch("http://localhost:8082/photos");
            const files = await response.json();
            setphotos(files);
        } catch (error) {
            console.log(error);
            
        }

  }
  async function putPhotos() {
    const submit_image = document.getElementById("image-input");
    const images = submit_image.files
    console.log(images);
    for(let i=0; i < images.length; i++){
        try {
            const reader = new FileReader();
            reader.readAsDataURL(images[i])
            reader.onload = async function (text) {

                const base64_string = text.target.result.split(",")[1];    
                console.log(typeof(base64_string));
                let data = {image:base64_string};                
                const response = await fetch("http://localhost:8082/photos", {
                    method:'POST',
                    headers: {
                        'Content-Type': 'application/json',        
                    },
                    body: JSON.stringify(data)
    
                                      
                });
                if (response.ok){
                    console.log("File sent successfully");
                }else {
                    console.log("File upload Failed! ");
                }
            }
        }
        catch (error){
            console.log(error);
        }
    }
  }
  return (
   <div>
      <div>PhotoDump</div>
      <div id="images-container">{photos.map((file,index)=>(
        <img key={index} src = {file.data} alt={file.filename}></img>
        
      ))}</div>
      <button onClick={getphotos}>get photos</button> 
      <input type="file" accept="image/*" id="image-input" multiple></input>
      <button id="submit-image" onClick={putPhotos} >Submit photos</button>   
   </div> 
   
  )
}

export default PhotoDump