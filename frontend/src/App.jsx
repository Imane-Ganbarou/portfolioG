import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Accueil from "./Components/Accueil/Accueil";
function App() {
  return (
    <>
      <Navbar />

      <main className="pt-24 container mx-auto mt-20">
        <section id="accueil" className="h-screen ">
          <Accueil/>
        </section>
        <section id="about" className="h-screen bg-gray-200">
          <h1 className="text-3xl text-center pt-20">À propos</h1>
        </section>
        <section id="projects" className="h-screen bg-gray-300">
          <h1 className="text-3xl text-center pt-20">Projets</h1>
        </section>
        <section id="services" className="h-screen bg-gray-400">
          <h1 className="text-3xl text-center pt-20">Services</h1>
        </section>
        <section id="contact" className="h-screen bg-gray-500">
          <h1 className="text-3xl text-center pt-20">Contact</h1>
        </section>
      </main>
    </>
  );
}

export default App;
