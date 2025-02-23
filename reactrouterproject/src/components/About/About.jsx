import React from "react";

export default function About() {
  return (
    <div className="py-6 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex lg:items-center lg:gap-12 md:gap-6">
          <div className="md:w-5/12 lg:w-6/12">
            <img
              src="https://www.thecuneiform.com/wp-content/uploads/2024/01/MicrosoftTeams-image-56-1024x683.webp"
              alt="image"
              className="rounded-md"
            />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              {" "}
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              eligendi veritatis laudantium consequuntur ea tempora excepturi ex
              delectus inventore ad tempore cupiditate perferendis, nobis minus
              dolor id facere repellat sed!
            </p>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum cumque eius libero maxime obcaecati laborum ipsa optio
              incidunt ad quia?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
