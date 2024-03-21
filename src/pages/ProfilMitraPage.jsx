import React from 'react'
import FormProfil from '../fragments/ProfilMitraComponent/FormProfil'
import FinanceStatement from '../fragments/ProfilMitraComponent/FinanceStatement'
import FinanceRecap from '../fragments/ProfilMitraComponent/FinanceRecap'

const ProfilMitraPage = () => {
  return (
    <>
    <FormProfil />
    <FinanceStatement />
    <FinanceRecap />
    </>
  )
}

export default ProfilMitraPage