'use client';
import React from 'react'
import { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary'

interface CloudinaryResult {
  info: {
    public_id: string;
  }
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState('')

  function handleUpload(result) {
    const info = result.info as CloudinaryResult['info'];

    if (result.event !== 'success') return;
    setPublicId(info.public_id);
  }


  return (
    <>
      <div>UploadPage</div>
      {publicId && <CldImage src={publicId} width={270} height={180} alt='image' />}
      <CldUploadWidget
        uploadPreset=""
        options={{
          sources: ['local'],
          multiple: false,
          styles: {
            palette: {
              window: "#F5F5F5",
              sourceBg: "#FFFFFF",
              windowBorder: "#90a0b3",
              tabIcon: "#0094c7",
              inactiveTabIcon: "#69778A",
              menuIcons: "#0094C7",
              link: "#53ad9d",
              action: "#8F5DA5",
              inProgress: "#0194c7",
              complete: "#53ad9d",
              error: "#c43737",
              textDark: "#000000",
              textLight: "#FFFFFF"
            },
          },
        }}
        onUpload={(result) => handleUpload(result)}
      >
        {({ open }) => {
          return (
            <button className="btn btn-primary" onClick={() => open()}>
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </>
  )
}

export default UploadPage
