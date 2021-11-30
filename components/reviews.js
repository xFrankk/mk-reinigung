import { useState } from "react"
import { BsCircleFill } from "react-icons/bs"
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md"

export default function Reviews() {
  const [number, setNumber] = useState(1)

  const increment = () => {
    if (number === 3) {
      setNumber(1)
    } else {
      setNumber(number + 1)
    }
  }
  const decrement = () => {
    if (number === 1) {
      setNumber(3)
    } else {
      setNumber(number - 1)
    }
  }

  setInterval(function () {}, 3000)

  return (
    <>
      <div className="py-20">
        <h3 className="my-5 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          <b>Unsere Kunden sind zufrieden!</b>
        </h3>
        <div className="w-full flex justify-between items-center text-2xl my-5 h-96">
          <button className="sm:p-5" onClick={decrement}>
            <MdOutlineArrowBackIos className="text-green-300" />
          </button>
          {number === 1 ? (
            <div>
              <h5 className="2xl:w-2/4 m-auto md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                "Seit über drei Jahren macht Frau Kuliberda mit ihrem
                Reinigungsservice die Treppenreinigung unserer Anlagen. Ihre
                Arbeit ist immer sehr gut und vor Allem konstant. Wir hoffen auf
                eine noch lange Zusammenarbeit."
              </h5>
              <h5 className="my-5 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                <b>Fritz Böswald, Geschäftsführer der Rundhaus GmbH</b>
              </h5>
            </div>
          ) : number === 2 ? (
            <div>
              <h5 className="2xl:w-2/4 m-auto md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                "Frau Kuliberda arbeitet äußerst gründlich und ordentlich. Sie
                ist ohne Ausnahmen zuverlässig und vertrauenswürdig. Wir sind
                sehr froh, sie gefunden zu haben."
              </h5>
              <h5 className="my-5 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                <b>Franz Lindner, Steuerberater</b>
              </h5>
            </div>
          ) : (
            <h5 className="2xl:w-2/4 m-auto md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              review 3
            </h5>
          )}
          <button className="sm:p-5 cursor-pointer " onClick={increment}>
            <MdOutlineArrowForwardIos className="text-green-300" />
          </button>
        </div>
        {/* <div className="flex justify-center text-green-100">
          <button>
            <BsCircleFill
              onClick={() => setNumber(1)}
              className={`cursor-pointer m-1 border-2 border-gray-700 rounded-full ${
                number === 1 ? "text-green-300" : ""
              }`}
            />
          </button>
          <button>
            <BsCircleFill
              onClick={() => setNumber(2)}
              className={`cursor-pointer m-1 border-2 border-gray-700 rounded-full ${
                number === 2 ? "text-green-300" : ""
              }`}
            />
          </button>
          <button>
            <BsCircleFill
              onClick={() => setNumber(3)}
              className={`cursor-pointer m-1 border-2 border-gray-700 rounded-full ${
                number === 3 ? "text-green-300" : ""
              }`}
            />
          </button>
        </div> */}
      </div>
      ________
    </>
  )
}
