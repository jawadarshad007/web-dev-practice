import React from 'react'
import { useParams } from 'react-router-dom'

const ParamComp = () => {
    // here revied params by useParamsHook()
    const {id} = useParams();
  return (
    <>
        Params: {id}
    </>
  )
}

export default ParamComp