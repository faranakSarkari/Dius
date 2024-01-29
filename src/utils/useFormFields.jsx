import React, { useState } from 'react'

export default function useFormFields() {
    const [fields,setFields]=useState()
    function handleFields(e){
        setFields({
            ...fields,
            [e.target.name]:[e.target.value]
        })
    }
  return{fields,handleFields}
}
