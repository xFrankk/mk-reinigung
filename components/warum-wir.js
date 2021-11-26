import { GiPodiumWinner, GiThrustBend, GiCutDiamond } from "react-icons/gi"
import { AiFillLock, AiOutlineCheckCircle } from "react-icons/ai"

import { useEffect, useState } from "react"
import { BsCircleFill } from "react-icons/bs"
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md"

export default function WarumWir() {
  const [number, setNumber] = useState(1)

  const increment = () => {
    if (number === 5) {
      setNumber(1)
    } else {
      setNumber(number + 1)
    }
  }
  const decrement = () => {
    if (number === 1) {
      setNumber(5)
    } else {
      setNumber(number - 1)
    }
  }

  // const x = setInterval(() => {
  //   increment()
  // }, 3000)

  // useEffect(() => {
  //   x()
  // }, [])

  return (
    <>
      <h3 className="mb-5 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
        <b>Warum wir?</b>
      </h3>
      <div className="flex justify-between text-2xl my-5 h-60 items-center">
        <button className="p-5" onClick={decrement}>
          <MdOutlineArrowBackIos className="text-green-300" />
        </button>
        {number === 1 ? (
          <div>
            <AiFillLock className="text-green-300 m-auto text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
            <h4 className="md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              <b>Zuverlässigkeit</b>
            </h4>
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Wir haben bereits viele zufriedene Kunden für uns begeistern
              können!
            </h5>
          </div>
        ) : number === 2 ? (
          <div>
            <AiOutlineCheckCircle className="text-green-300 m-auto text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
            <h4 className="md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              <b>Kompetenz</b>
            </h4>
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Kundenzufriedenheit steht bei uns an erster Stelle!
            </h5>
          </div>
        ) : number === 3 ? (
          <div>
            <GiPodiumWinner className="text-green-300 m-auto text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
            <h4 className="md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              <b>Individualität</b>
            </h4>
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Sie haben spezifische Anforderungen? Wir kümmern uns drum!
            </h5>
          </div>
        ) : number === 4 ? (
          <div>
            <GiThrustBend className="text-green-300 m-auto text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
            <h4 className="md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              <b>Flexibilität</b>
            </h4>
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Wir versuchen Alles um Ihren Termin möglich zu machen.
            </h5>
          </div>
        ) : number === 5 ? (
          <div>
            <GiCutDiamond className="text-green-300 m-auto text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
            <h4 className="md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              <b> Gründlichkeit</b>
            </h4>
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Jede Ecke und Kante wird von uns sauber gemacht.
            </h5>
          </div>
        ) : null}
        <button className="p-5" onClick={increment}>
          <MdOutlineArrowForwardIos className="text-green-300" />
        </button>
      </div>
      <div className="flex justify-center text-green-100">
        <BsCircleFill
          onClick={() => setNumber(1)}
          className={`cursor-pointer m-1 border-2 border-gray-700 rounded-full ${
            number === 1 ? "text-green-300" : ""
          }`}
        />
        <BsCircleFill
          onClick={() => setNumber(2)}
          className={`cursor-pointer m-1 border-2 border-gray-700 rounded-full ${
            number === 2 ? "text-green-300" : ""
          }`}
        />
        <BsCircleFill
          onClick={() => setNumber(3)}
          className={`cursor-pointer m-1 border-2 border-gray-700 rounded-full ${
            number === 3 ? "text-green-300" : ""
          }`}
        />
        <BsCircleFill
          onClick={() => setNumber(4)}
          className={`cursor-pointer m-1 border-2 border-gray-700 rounded-full ${
            number === 4 ? "text-green-300" : ""
          }`}
        />
        <BsCircleFill
          onClick={() => setNumber(5)}
          className={`cursor-pointer m-1 border-2 border-gray-700 rounded-full ${
            number === 5 ? "text-green-300" : ""
          }`}
        />
      </div>
    </>
  )
}
