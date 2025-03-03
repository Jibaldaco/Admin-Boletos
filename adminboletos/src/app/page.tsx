'use client'

import React, {useState} from "react";

export default function Home() {
  const [showFrom, setShowFrom] = useState(false)

  const handleToggleForm = () => {
    setShowFrom(!showFrom)
  }

  const handelClick = (e) =>{
    e.preventDefault()
    console.log('SUBIRIMAGEN')
  }

  const handelSubmit = (e) =>{
    e.preventDefault()
    console.log('GUARDAR')
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:px-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <div className="bg-sky-600 px-4 py-2 rounded-lg">
          <h2 className="text-white mb-3 text-base">Agregar nevo evento</h2>
          <button onClick={handleToggleForm} className="bg-white text-black px-2 py-1 rounded-lg w-full text-sm hover:bg-blue-200">
            Agregar
          </button>
        </div>

        <form action="" className={showFrom ? "block":"hidden"}>
          <div id="evento" className="flex flex-col gap-2 p-4 w-3xsl">
            <label htmlFor="nombre" className="text-gray-800 font-medium text-center sm:text-left">Nombre del evento</label>
            <input 
              type="text"
              id="nombre"
              name="nombre"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Evento nuevo"
            />
            <div className="w-full">
              <label htmlFor="fecha" className="text-gray-800 font-medium">Fecha de disponibilidad</label>
              <input 
                type="date"
                id="fechaI"
                name="fechaI"
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            
            <div className="flex gap-2">
              <div className="w-1/2">
                <label htmlFor="fecha" className="text-gray-800 font-medium">Fecha de inicio</label>
                <input 
                  type="date"
                  id="fechaI"
                  name="fechaI"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="" className="text-gray-800 font-medium">Hora de inicio</label>
                <input 
                  type="time" 
                  name="horaI"
                  placeholder="HH:MM"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-1/2">
                <label htmlFor="fecha" className="text-gray-800 font-medium">Fecha de finalizacion</label>
                <input 
                  type="date"
                  id="fecha"
                  name="fechaF"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="" className="text-gray-800 font-medium">Hora de finalizacion</label>
                <input 
                  type="time"
                  name="horaF"
                  placeholder="HH:MM"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
            </div>
            <label htmlFor="" className="text-gray-800 font-medium text-center sm:text-left">Descripcion</label>
            <textarea 
              name="descripcion" 
              id=""
              placeholder="Descripcion del evento"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <label htmlFor="" className="text-gray-800 font-medium text-center sm:text-left">Tipo de evento</label>
            <select 
              name="tipoEvento" 
              id="" 
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="1" className="text-gray-800 text-center sm:text-left">Opcion 1</option>
              <option value="2" className="text-gray-800 text-center sm:text-left">Opcion 2</option>
              <option value="3" className="text-gray-800 text-center sm:text-left">Opcion 3</option>
            </select>
            <label htmlFor="" className="text-gray-800 font-medium text-center sm:text-left">Imagen del evento</label>
            <button className="bg-sky-600 text-white px-2 py-1 rounded-md w-full sm:w-32 hover:bg-sky-800" onClick={handelClick}>Subir imagen</button>
            <label htmlFor="" className="text-gray-800 font-medium text-center sm:text-left">Estado del evento</label>
            <div className="flex gap-2 mx-auto sm:mx-0 sm:space-x-16">
              <div className="flex items-center gap-2">
                <label htmlFor="">
                  <input type="checkbox" name="option" id=""/>Borrador
                </label>
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="">
                  <input type="checkbox" name="option" id=""/>Publicado
                </label>
              </div>
            </div>
            <button className="bg-sky-600 text-white px-2 py-1 rounded-md w-full sm:w-32 sm:mx-auto hover:bg-sky-800" onClick={handelSubmit}>Guardar</button>
          </div>
        </form>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>&copy; 2025</p>
      </footer>
    </div>
  );
}
