import React from "react";

export default function Accueil() {
  return (
    <div className="grid grid-cols-12 items-center min-h-screen px-8">
      {/* Texte */}
      <div className="col-span-12 md:col-span-6 space-y-4">
        <span className="block w-20 h-2 bg-gray-800 dark:bg-white mb-4" />
        <p className="text-sm text-gray-700 sm:text-base dark:text-white">Bonjour</p>
        <h1 className="flex flex-col text-5xl md:text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue dark:text-white">
          IMANE
          <span className="text-4xl md:text-6xl ml-5 text-blue-600">Ganbarou</span>
        </h1>
        <p className="text-sm text-gray-700 sm:text-base dark:text-white">
          DÉVELOPPEUSE D'APPLICATION
        </p>
          <div class="flex mt-8">
                <a href="#" class="px-4 py-2 mr-4 text-white uppercase bg-blue-400 border-2 border-transparent rounded-lg text-md hover:bg-blue-400">
                    Contact
                </a>
                <a href="/cv-iman.pdf" 
                 download
                class="px-4 py-2 text-blue-400 uppercase bg-transparent border-2 border-blue-400 rounded-lg dark:text-white hover:bg-blue-400 hover:text-white text-md">
                  
                   Télécharger CV
                </a>
            </div>
      </div>

      {/* Image avec border radius */}
      <div className="col-span-12 md:col-span-6 flex justify-center mt-8 md:mt-0">
        {/* <div className="border-4 border-blue-600  overflow-hidden shadow-lg w-72 md:w-96  p-6"> */}
          <img
            src="/image1.png"
            alt="Imane"
            className="w-full h-auto object-cover   mask-radial-at-bottom"
          />
        </div>
      {/* </div> */}
    </div>
  );
}
