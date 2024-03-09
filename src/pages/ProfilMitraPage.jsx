import React from 'react'
import ProfilMitra from '../layouts/ProfilMitra'

const ProfilMitraPage = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div className='text-center'>
        <h1 className='text-h2 font-bold text-purple'>Profil Mitra</h1>
        <p className='text-p1 text-purple-ph'>Harap Lengkapi Data Berikut</p>
      </div>
      <div className='mt-5'>
        <ProfilMitra />
      </div>
    </div>
  )
}

export default ProfilMitraPage