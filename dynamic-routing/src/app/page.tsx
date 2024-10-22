import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cyan-500 bg-gradient-to-r from-cyan-600 to-cyan-800 text-white px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 sm:mb-10 uppercase text-center">
        Select a Country
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        <Link
          href="/country/pakistan"
          className="flex flex-col items-center text-base sm:text-lg md:text-xl lg:text-2xl uppercase font-semibold hover:bg-white hover:text-blue-500 px-4 py-2 sm:px-6 sm:py-3 rounded transition duration-300 ease-in-out shadow-lg text-center"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg" alt="Pakistan Flag" className="w-16 h-10 mb-2" />
          Pakistan
        </Link>
        <Link
          href="/country/india"
          className="flex flex-col items-center text-base sm:text-lg md:text-xl lg:text-2xl uppercase font-semibold hover:bg-white hover:text-blue-500 px-4 py-2 sm:px-6 sm:py-3 rounded transition duration-300 ease-in-out shadow-lg text-center"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg" alt="India Flag" className="w-16 h-10 mb-2" />
          India
        </Link>
        <Link
          href="/country/iran"
          className="flex flex-col items-center text-base sm:text-lg md:text-xl lg:text-2xl uppercase font-semibold hover:bg-white hover:text-blue-500 px-4 py-2 sm:px-6 sm:py-3 rounded transition duration-300 ease-in-out shadow-lg text-center"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg" alt="Iran Flag" className="w-16 h-10 mb-2" />
          Iran
        </Link>
        <Link
          href="/country/iraq"
          className="flex flex-col items-center text-base sm:text-lg md:text-xl lg:text-2xl uppercase font-semibold hover:bg-white hover:text-blue-500 px-4 py-2 sm:px-6 sm:py-3 rounded transition duration-300 ease-in-out shadow-lg text-center"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg" alt="Iraq Flag" className="w-16 h-10 mb-2" />
          Iraq
        </Link>
        <Link
          href="/country/palestine"
          className="flex flex-col items-center text-base sm:text-lg md:text-xl lg:text-2xl uppercase font-semibold hover:bg-white hover:text-blue-500 px-4 py-2 sm:px-6 sm:py-3 rounded transition duration-300 ease-in-out shadow-lg text-center"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/1280px-Flag_of_Palestine.svg.png" alt="Palestine Flag" className="w-16 h-10 mb-2" />
          Palestine
        </Link>
      </div>
    </div>
  );
}
