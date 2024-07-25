import React from 'react'

function PublicationItem({image, name, url}) {
  const handleClick = () => {
    if (url != null){
      window.open(url, '_blank');
    }
  }

  return (
    <div className="publicationItem">
      <img className='background-image' src={image} alt={name} onClick ={handleClick}/>
      
    </div>
  )
}

export default PublicationItem
