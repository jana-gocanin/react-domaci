import React from 'react'
import OneDog from './oneDog'

const Dogs = () => {
    const name = "Pas";
    const description = "Opis psa";
  return (
    <div className='all-dogs'>
        <OneDog dogName={name} dogDesc={description} />
        <OneDog dogName={name} dogDesc={description} />
        <OneDog dogName={name} dogDesc={description} />
    </div>
  )
}

export default Dogs