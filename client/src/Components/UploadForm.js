import React, { useState } from 'react';
import { storage } from '../firebase/tinyHomeStorage'
import '../Components/CSS/PhotoGallery.css'

const UploadForm = () => {


    const [image, setImage] = useState(null);
    const [username, setUsername] = useState(null);
    const types = ['image/png', 'image/jpeg', 'image/gif', 'image/jpg'];
    const [error, setError] = useState(null);

    const handleChange = async (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
    const handleNameChange =  (e) =>{
        setUsername({
            ...username,
            [e.target.name]: e.target.value
        })
    }

    const uploadHandler = (e) => {
        e.preventDefault()
        const selected = image;

        if (selected && types.includes(selected.type)) {

            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            console.log(uploadTask)
            uploadTask.on(
                'state_changed',
                (snapshot) => { },
                (error) => {
                },
                () => {
                    storage
                        .ref('images')
                        .child(image.name)
                        .getDownloadURL()

                        .then(async function (url) {
                            console.log(url)

                            fetch('http://localhost:8080/savePhoto', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    username: username,
                                    imageFile: url
                                })
                            }).then(response => response.json())
                                .then(result => {
                                    console.log(result)
                                    window.location.href= '/PhotoGallery'
                                })


                        })
                })
        } else {
            setImage(null);
            setError('Please select an image file of (png, jpg, gif or jpeg)');

        }}




        return (
            <div>
                <h1 class="titleUpload">TinyHomeHelper Gallery</h1>
                <form class="galleryInput">
                    <label>
                        <input type="file" name="file" accept="image/*" multiple={false} onChange={handleChange} />
                        <input type="text" name="username" onChange={handleNameChange} placeholder="Enter Username" />
                        <button className="uploadBtn" onClick={uploadHandler}>Upload</button> 
                    </label>
                   
                </form>
                    <div className="output">
                        {error && <div className="error">{error} </div>}
                        {image && <div> {image.name}</div>}
                        
                    </div>
                
               
            </div>
        )
    }

    export default UploadForm