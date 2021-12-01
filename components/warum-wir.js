import { GiPodiumWinner, GiThrustBend, GiCutDiamond } from "react-icons/gi"
import { AiFillLock, AiFillCheckCircle } from "react-icons/ai"
import { FaLightbulb } from "react-icons/fa"

export default function WarumWir() {
  return (
    <>
      <div id="ueber-uns" className="py-20 bg-gray-200 -mx-8">
        <h3 className="mb-10 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          <b>Warum wir?</b>
        </h3>
        <div className="lg:flex">
          <div className="m-7 lg:w-2/4">
            <AiFillLock className="text-4xl text-green-300 m-auto md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
            <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl">
              <b>Zuverlässig</b>
            </h4>
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Wir haben bereits viele zufriedene Kunden für uns begeistern
              können!
            </h5>
          </div>
          <div className="m-7 lg:w-2/4">
            <FaLightbulb className="text-green-300 text-4xl m-auto md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
            <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl">
              <b>Kompetent</b>
            </h4>
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Kundenzufriedenheit steht bei uns an erster Stelle!
            </h5>
          </div>
        </div>
        <div className="lg:flex">
          <div className="m-7 lg:w-2/4">
            <GiPodiumWinner className="text-green-300 text-4xl m-auto md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
            <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl">
              <b>Individuell</b>
            </h4>
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Sie haben spezifische Anforderungen? Wir kümmern uns drum!
            </h5>
          </div>
          <div className="m-7 lg:w-2/4">
            <GiThrustBend className="text-4xl text-green-300 m-auto md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
            <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl">
              <b>Flexibel</b>
            </h4>
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Wir versuchen Alles um Ihren Termin möglich zu machen.
            </h5>
          </div>
        </div>
        <div className="lg:flex">
          <div className="m-7 lg:w-2/4">
            <GiCutDiamond className="text-green-300 text-4xl m-auto md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
            <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl">
              <b>Gründlich</b>
            </h4>
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Jede Ecke und Kante wird von uns sauber gemacht.
            </h5>
          </div>
          <div className="m-7 lg:w-2/4">
            <AiFillCheckCircle className="text-4xl text-green-300 m-auto md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
            <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl">
              <b>Professionell</b>
            </h4>
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Durch unsere jahrelange Erfahrung ist Professionalität garantiert.
            </h5>
          </div>
        </div>
      </div>
    </>
  )
}
