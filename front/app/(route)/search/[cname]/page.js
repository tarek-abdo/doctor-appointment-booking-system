'use client'

import DoctorList from '@/app/_components/DoctorList';
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState, useCallback } from 'react'

function page({params}) {
  const [docorList, setDoctorList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const getDoctors = useCallback(() => {
    setIsLoading(true);
    GlobalApi.getDoctorByCategory(params.cname)
      .then(res => {
        setDoctorList(res.data.data || [])
      })
      .catch(err => {
        console.error('Error fetching doctors:', err);
        setDoctorList([]);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [params.cname]);
  
  useEffect(() => {
    getDoctors()
  }, [getDoctors])
  
  return (
    <div className='mt-5'>
      {isLoading ? (
        <div className='p-5'>Loading...</div>
      ) : (
        <DoctorList heading={decodeURIComponent(params.cname)}
        doctorList={docorList}
        />
      )}
    </div>
  )
}

export default page