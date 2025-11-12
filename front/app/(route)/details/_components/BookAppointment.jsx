"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";

import { Button } from "@/components/ui/button";
import { CalendarSearch, Clock } from "lucide-react";
import { isPast } from "date-fns";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import GlobalApi from "@/app/_utils/GlobalApi";
// import { useToast } from "@/components/hooks/use-toast"
import { toast } from "sonner";

function BookAppointment({ doctor }) {
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState([]);
  const { user } = useKindeBrowserClient();
  // const { toast } = useToast();
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = useCallback(() => {
    setIsDisabled(true);
    // Perform other actions
  }, []);

  useEffect(() => {
    getTime();
  }, []);

  const getTime = useCallback(() => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ":00PM",
      });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ":30PM",
      });
    }
    setTimeSlot(timeList);
  }, []);

  useEffect(() => {
    getTime();
  }, [getTime]);

  const saveBookings = useCallback(() => {
    const data = {
      data: {
        UserName: user?.given_name,
        Email: user?.email,
        Time: selectedTimeSlot,
        Date: date,
        doctors: doctor.id,
      },
    };

    GlobalApi.bookAppointment(data).then((res) => {
      if (res) {
        GlobalApi.sendEmail(data).then((res) => {});
        toast("Booking confirmation will be sent on email");
      }
    });
  }, [user, selectedTimeSlot, date, doctor.id]);

  const isPastDay = (day) => {
    return day <= new Date();
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="mt-3 rounded-full">Book Appointment</Button>
      </DialogTrigger>
      <DialogContent className="bg-white flex flex-col">
        <DialogHeader>
          <DialogTitle>Book Appointment</DialogTitle>
          <DialogDescription>
            <div>
              <div className="flex flex-col md:flex-row  gap-5  justify-start align-top items-start">
                {/* Calender */}
                <div className="flex flex-col items-baseline">
                  <h2 className="flex items-center gap-3 m-3">
                    <CalendarSearch className="text-primary h-5 w-5" />
                    Select Date
                  </h2>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={isPastDay}
                    className="rounded-md border"
                  />
                </div>
                {/* Time Slot */}
                <div>
                  <h2 className="flex gap-2 items-center m-3">
                    <Clock className="text-primary h-5 w-5" />
                    Select Time
                  </h2>
                  <div className="grid grid-cols-3 gap-2 border rounded:lg p-5">
                    {timeSlot?.map((item, index) => (
                      <h2
                        onClick={() => setSelectedTimeSlot(item.time)}
                        className={`p-2 border rounded-full text-center hover:bg-primary hover:text-white cursor-pointer ${
                          item.time == selectedTimeSlot &&
                          "bg-primary text-white"
                        } `}
                        key={index}
                      >
                        {item.time}
                      </h2>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <>
              <Button
                type="button"
                className="text-red-500 border-red-500"
                variant="outline"
              >
                Close
              </Button>
              <Button
                type="button"
                disabled={isDisabled}
                onClick={() => (saveBookings(), handleClick())}
              >
                Submit
              </Button>
            </>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default React.memo(BookAppointment);
