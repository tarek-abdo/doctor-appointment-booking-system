import Image from "next/image";
import React, { useMemo } from "react";
import GlobalApi from "../_utils/GlobalApi";
import Link from "next/link";

function DoctorList({ doctorList, heading = "Popular Doctor" }) {
  // Memoize the list rendering to prevent unnecessary re-renders
  const memoizedDoctors = useMemo(() => doctorList, [doctorList]);
  return (
    <div className="mb-10 px-7">
      <h2 className="font-bold text-xl mb-5">{heading}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 ">
        {memoizedDoctors.length > 0
          ? memoizedDoctors.map((doctor, index) => (
              <div
                key={index}
                className="border-[1px] rounded-lg p-4 cursor-pointer hover:border-primary hover:shadow-md"
              >
                {/* doctor.attributes?.image?.data?.attributes?.url  مش شغال */}
                {/* src='/The Doctor.jpeg' */}
                <Image
                  src={doctor.attributes?.image?.data?.[0]?.attributes?.url}
                  alt="Doctor Image"
                  width={500}
                  height={200}
                  className="border-[1px] h-[250px] w-full object-cover rounded-lg"
                />
                <div className="mt-3 items-baseline flex flex-col gap-1">
                  <h2 className="text-[15px] bg-blue-100 p-1 rounded-lg px-2 text-primary ">
                    {doctor.attributes?.categories?.data?.attributes?.Name}
                  </h2>
                  <h2 className="font-bold text-xl">
                    {doctor.attributes.Name}
                  </h2>
                  <h2 className="text-primary text-sm">
                    {doctor.attributes?.Years_of_experience}
                  </h2>
                  <h2 className="text-gray-500 text-sm">
                    {doctor.attributes?.Address}
                  </h2>
                  <Link href={"/details/" + doctor?.id} className="w-full">
                    <h2 className="p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full text-center text-[14px] font-bold mt-2 cursor-pointer hover:bg-primary hover:text-white">
                      Book Now
                    </h2>
                  </Link>
                </div>
              </div>
            ))
          : //Skeleton Effect
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <div className="h-[220px] bg-slate-200 w-full rounded-lg animate-pulse"></div>
            ))}
      </div>
    </div>
  );
}

export default React.memo(DoctorList);
