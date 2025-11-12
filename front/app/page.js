'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import { useEffect, useState, useCallback } from "react";
import GlobalApi from "./_utils/GlobalApi";


export default function Home() {
  const [doctorList, setDoctorList] = useState([]);
  
  const getDoctorList = useCallback(() => {
    GlobalApi.getDoctorsList().then(res => {
      setDoctorList(res.data.data)
    }).catch(err => {
      console.error('Error fetching doctors:', err)
    })
  }, [])
  
  useEffect(() => {
    getDoctorList()
  }, [getDoctorList])
  
  return (
    <div>
      <Hero />
      <CategorySearch />
      <DoctorList doctorList={doctorList}/>
    </div>
  );
}
