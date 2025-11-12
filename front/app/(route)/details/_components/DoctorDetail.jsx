import { Button } from "@/components/ui/button";
import { GraduationCap, MapIcon } from "lucide-react";
import Image from "next/image";
import React, { useMemo } from "react";
import BookAppointment from "./BookAppointment";

function DoctorDetail({ doctor }) {
  const socialMedaiList = useMemo(() => [
    {
      id: 1,
      icon: "/twitter.png",
      url: "",
    },
    {
      id: 2,
      icon: "/facebook.png",
      url: "",
    },
    {
      id: 3,
      icon: "/youtube.png",
      url: "",
    },
  ], []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 border-[1px] mt-5 p-5 rounded-lg">
        {/* Doctor Image */}
        <div>
          <Image
            src={doctor.attributes?.image?.data?.[0]?.attributes?.url}
            width={200}
            height={270}
            alt="doctor-image"
            priority
            quality={85}
            className="rounded-lg h-[270px] object-cover w-full"
          />
        </div>

        {/* Doctor Information */}
        <div className="col-span-2 mt-5 md:px-10 flex flex-col gap-3 items-baseline">
          <h2 className="font-bold text-2xl">{doctor?.attributes?.Name}</h2>
          <h2 className="flex gap-2 text-grey-500 text-md justify-center">
            <GraduationCap />
            <span>
              {doctor.attributes?.Years_of_experience} Years of experience
            </span>
          </h2>
          <h2 className="text-md flex gap-2 text-gray-400">
            <MapIcon />
            <span>{doctor.attributes?.Address}</span>
          </h2>
          <h2 className="text-[15px] bg-blue-100 p-1 rounded-lg px-2 text-primary ">
            {doctor.attributes?.categories?.data?.attributes?.Name}
          </h2>
          <div className="flex gap-3">
            {socialMedaiList.map((item) => (
              <Image 
                src={item.icon} 
                key={item.id} 
                width={30} 
                height={30}
                alt={`social-icon-${item.id}`}
                loading="lazy"
                quality={75}
              />
            ))}
          </div>

          <BookAppointment doctor={doctor} />
        </div>

        {/* About Doctor */}
      </div>
      <div className="border-[1px] mt-5 p-5 rounded-lg">
        <h2 className="font-bold text-[20px] mt-3">About Doctor </h2>
        <p className="text-grey-500 tracking-wide mt-2">
          {doctor.attributes?.About}
        </p>
      </div>
    </div>
  );
}

export default React.memo(DoctorDetail);
