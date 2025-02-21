import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <div className="bg-sky-600 px-4 py-2 rounded-lg">
          <h2 className="text-white mb-3 text-base">Agregar nevo evento</h2>
          <button className="bg-white text-black px-2 py-1 rounded-lg w-full text-sm hover:bg-blue-200">Agregar</button>
        </div>

        <div id="evento" className="flex flex-col gap-2 p-4 w-96">
          <label htmlFor="nombre" className="text-gray-800 font-medium">Nombre del evento</label>
          <input 
            type="text"
            id="nombre"
            name="nombre"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Evento nuevo"
          />
          <div className="flex gap-2">
            <div>
              <label htmlFor="fecha" className="text-gray-800 font-medium">Fecha de inicio</label>
              <input 
                type="date"
                id="fecha"
                name="fecha"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label htmlFor="" className="text-gray-800 font-medium">Hora de inicio</label>
              <input 
                type="text" 
                placeholder="HH:MM"
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <label htmlFor="fecha" className="text-gray-800 font-medium">Fecha de finalizacion</label>
              <input 
                type="date"
                id="fecha"
                name="fecha"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label htmlFor="" className="text-gray-800 font-medium">Hora de finalizacion</label>
              <input 
                type="text"
                placeholder="HH:MM"
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>
          <label htmlFor="" className="text-gray-800 font-medium">Descripcion</label>
          <textarea 
            name="" 
            id=""
            placeholder="Descripcion del evento"
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <label htmlFor="" className="text-gray-800 font-medium">Tipo de evento</label>
          <select 
            name="" 
            id="" 
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="1" className="text-gray-800">1</option>
            <option value="2" className="text-gray-800">2</option>
            <option value="3" className="text-gray-800">3</option>
          </select>
          <label htmlFor="" className="text-gray-800 font-medium">Imagen del evento</label>
          <button className="bg-sky-600 text-white px-2 py-1 rounded-md w-full">Subir imagen</button>
          <label htmlFor="" className="text-gray-800 font-medium">Estado del evento</label>
          <div className="flex gap-2">
            <input type="checkbox" name="" id="" /><h4>Borrador</h4>
            <input type="checkbox" name="" id="" /><h4>Publicado</h4>
          </div>
          <button className="bg-sky-600 text-white px-2 py-1 rounded-md w-full">Guardar</button>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
