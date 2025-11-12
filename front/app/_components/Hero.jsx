import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-6 py-4 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt="doctors image"
              src="/doctors.jpg"
              width={800}
              height={800}
              className="absolute inset-0 h-full w-full object-cover rounded-3xl"
            />
          </div>

          <div className="lg:py-20">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Find & Book <span className="text-primary">Appointment</span> With
              Your Fav <span className="text-primary">Doctors</span>
            </h2>

            <p className="mt-4 text-gray-600">
              Welcome to our website, your trusted platform for finding and
              booking appointments with top-rated doctors in your area. Whether
              you're seeking specialized care, a routine check-up, or urgent
              medical advice, we make it easy to connect with healthcare
              professionals who meet your needs. Browse through verified
              profiles, read patient reviews, and schedule your appointment at
              your convenience.
            </p>

            <Button className="mt-10">Explore Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
