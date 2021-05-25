import {useState} from 'react'
import {useEffect} from 'react'
import '../Components/CSS/PhotoGallery.css'

function PhotoGalleryDisplay ({setIsUpLoaded, isUploaded}) {
   const [photoGalleryShow, setPhotoGalleryShow]= useState([])
   
    
        useEffect(() => {
            getphotoGalleryShow()
        }, [])
        const getphotoGalleryShow = () => {
            fetch('http://localhost:8080/displayPhotos')
                .then(response => response.json())
                .then(result => {
                    console.log("photoGalleryResult",result)
                    setPhotoGalleryShow(result)
                    })
                    
                    
                }
            
    
    const photoItems = photoGalleryShow.map((photos) => {
        return (
                
                    <div  class= "column"  key = {photos._id}>   
                            < img class="imgPhotoGallery" src={photos.image}/>
                            <label><h2 class="usernameStyle">{photos.username}</h2></label>
                    </div>

                
            
        )})


        
        

    return(
        <div>
            
            {photoItems}
            
        </div>
    )
    
}

export default PhotoGalleryDisplay