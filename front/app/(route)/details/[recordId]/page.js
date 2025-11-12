"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import DoctorDetail from '../_components/DoctorDetail'

function Details({params}) {
  const [doctor, setDoctor] = useState([])
  useEffect(()=>{
    getDoctorById()
  }, [params.recordId])
  const getDoctorById=()=>{
    GlobalApi.getDoctorById(params.recordId).then(res=>{
      setDoctor(res.data.data)
    })
  }
  return (
    <div className='p-5 px-20'>
      <h2 className='font-bold text-[22px]'>Details</h2>
      <div className='grid grid-cols-1 md:grid-cols-5'>
        
        {/* Doctor Details */}
        <div className='col-span-3'>
            {doctor&&<DoctorDetail doctor={doctor}/>}
        </div>
        
        {/* Doctor Suggestion */}
        <div>

        </div>
      </div>
    </div>
  )
}

export default Details