"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
const page = () => {
    const router=useRouter()
    useEffect(()=>{
        if(!localStorage.getItem('token'))
            {
                    router.push('/')
            }
    },router.query)
  return (
    <div>
      myAccount
    </div>
  )
}

export default page
