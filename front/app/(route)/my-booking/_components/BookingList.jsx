import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import React from "react";
import CancelAppoinment from "./CancelAppoinment";
import GlobalApi from "@/app/_utils/GlobalApi";
import { toast } from "sonner";

function BookingList({ bookingList, expired, updateRecord }) {
  console.log("🚀 ~ BookingList ~ bookingList:", bookingList);
  const onDeleteBooking = (item) => {
    GlobalApi.deleteBooking(item.id).then((res) => {
      if (res) {
        toast("Booking Deleted Successfully");
        updateRecord();
      }
    });
  };
  return (
    <div>
      {bookingList &&
        bookingList.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 items-center p-3 m-3 border rounded-lg"
          >
            {/* src={item.attributes.doctors.data.attributes?.image?.data?.attributes?.url}  مش شغال */}
            <Image
              src={"/doctor.png"}
              className="rounded-full h-[70px] object-cover"
              width={70}
              height={70}
              alt="doctor-image"
            />
            <div className="flex flex-col gap-2 w-full">
              <h2 className="font-bold text-[18px] flex justify-between items-center ">
                {item.attributes.doctors?.data[0]?.attributes?.Name}{" "}
                {!expired && (
                  <CancelAppoinment
                    onContinueClick={() => onDeleteBooking(item)}
                  />
                )}
              </h2>
              <h2 className="flex gap-2 text-grey-500">
                <MapPin className="text-primary" />{" "}
                {item.attributes.doctors?.data[0]?.attributes?.Address}
              </h2>
              <h2 className="flex gap-2">
                <Calendar className="text-primary h-5 w-5" /> Appoinment on:{" "}
                {moment(item.attributes.Date).format("DD-MM-YYYY")}
              </h2>
              <h2 className="flex gap-2">
                <Clock className="text-primary h-5 w-5" />
                On Time: {item.attributes.Time}
              </h2>
            </div>
          </div>
        ))}
    </div>
  );
}

export default BookingList;
