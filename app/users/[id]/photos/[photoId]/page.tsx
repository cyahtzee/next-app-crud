import React from 'react'

interface Props {
  params: {
    photoId: number;
  }
}

const PhotoDetails = ({ params: { photoId } }: Props) => {
  return (
    <div>PhotoDetails {photoId}</div>
  )
}

export default PhotoDetails
