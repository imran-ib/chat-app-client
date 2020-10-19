import React,{useState,useEffect} from 'react';
import { CloudinaryContext ,Image } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from 'components/utils/CloudinaryService';
const ImageUpload = ({images,setImages}) =>{
    const beginUpload = (tag) => {
        const uploadOptions = {
          folder: "iChat",
          cloudName: "iib-webdevs",
          tags: [tag],
          uploadPreset: "ebazar"
        };
      
        openUploadWidget(uploadOptions, (error, photos) => {
          if (!error) {
            console.log(photos);
            if(photos.event === 'success'){
                //@ts-ignore
              setImages([...images, photos.info.public_id])
            }
          } else {
            console.log(error);
          }
        })
      }
      useEffect( () => {
        fetchPhotos("image", setImages);
      }, [])
    return (
    <CloudinaryContext cloudName="iib-webdevs">
    
        <section>
        {images.map(i => <Image
              key={i}
              publicId={i}
              fetch-format="auto"
              quality="auto"
            />)}
        </section>
        <button onClick={() => beginUpload()}>Upload Image</button>
    </CloudinaryContext>

    )
}

export default ImageUpload;