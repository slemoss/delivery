import Head from '../../../components/Head'
import Snacks from '../../../components/Snacks'
import SnackTitle from '../../../components/SnackTitle'
import { useState, useEffect } from 'react'
import { getIceCreams } from '../../../services/api'

export default function IceCream() {
  const [ iceCreams, setIceCreams ] = useState([])

  useEffect(() => {
    (async () => {
      const drinksRequest = await getIceCreams()

      setIceCreams(drinksRequest.data)
    })()
  }, [])
  return (
    <>
      <Head title='Sobremesas' description='As melhores sobremesas' />
      <SnackTitle>Sobremesas</SnackTitle>
      <Snacks snacks={iceCreams} />
    </>
  )
}
