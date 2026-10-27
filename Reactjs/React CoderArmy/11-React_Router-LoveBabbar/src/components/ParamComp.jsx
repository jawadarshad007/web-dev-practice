import React from 'react'
import { useParams } from 'react-router-dom'

const ParamComp = () => {
    // here revied params by useParamsHook() , useParam hme aik object provide krta ha , jis ma jo route ka bad : lga ka behjte hn wo key hota ha and jo url ma enter krte hnn wo isko value bn jata ha.
    // like 
    // const {id} = useParams();
    const params = useParams();
    console.log(params.id)
  return (
    <>
        {/* Params: {id} */}
        Params: {params.id}
     
    </>
  )
}

export default ParamComp