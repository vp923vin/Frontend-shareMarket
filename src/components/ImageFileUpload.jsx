import React, { useState } from 'react';
import axios from 'axios';

const ImageFileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {

        try {

            const formData = new FormData();
            formData.append('myFile', selectedFile);

            const response = await axios.post('http://192.227.234.133/backend/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Upload successful:', response);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div className='flex flex-col gap-3 w-60 mx-auto py-20'>
            <input type="file"
                className='inline-block'
                onChange={handleFileChange} />

            <button
                className='bg-blue-500 text-white rounded'
                onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default ImageFileUpload;
