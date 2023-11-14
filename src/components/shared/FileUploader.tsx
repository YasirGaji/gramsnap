import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button } from '../ui/button'




const FileUploader = () => {
  const [fileUrl, setFileUrl] = useState('')

  const onDrop = useCallback(acceptedFiles => {

  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpeg', '.jpg', '.svg', '.gif']
    }
  })


  return (
    <div {...getRootProps()} className='flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer'>
      <input {...getInputProps()} className='cursor-pointer' />
      {
       fileUrl ? (
        <div>test 1</div>
       ) : (
        <div className='file_uploader-box'>
          <img
            src='/assets/icons/file-upload.svg'
            width={96}
            height={77}
            alt='Upload image'
          />

          <h3 className='base-medium text-light-2 mb-2 mt-6'>Drag Photo Here</h3>
          <p className='text-light-4 small-regular mb-6'>JPG, PNG, SVG</p>

          <Button className='shad-button_dark_4'>
            Select from device
          </Button>
        </div>
       )
      }
    </div>
  )
}

export default FileUploader