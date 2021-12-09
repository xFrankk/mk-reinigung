import { useState } from "react"
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md"
import { AiFillStar } from "react-icons/ai"

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
      <div className="py-20 px-4 sm:px-16 md:px-32 xl:px-40 2xl:px-96 text-center bg-green-100">
        <h3 className="my-5 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          <b>Unsere Kunden sind zufrieden!</b>
        </h3>
        <div className="w-full flex justify-between items-center text-2xl my-5 h-96">
          <button className="sm:p-5" onClick={decrement}>
            <MdOutlineArrowBackIos />
          </button>
          {number === 1 ? (
            <div>
              <h5 className="2xl:w-3/5 m-auto md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                "Seit über drei Jahren macht Frau Kuliberda mit ihrem
                Reinigungsservice die Treppenreinigung unserer Anlagen. Ihre
                Arbeit ist immer sehr gut und vor Allem konstant. Wir hoffen auf
                eine noch lange Zusammenarbeit."
              </h5>
              <AiFillStar className="m-auto inline" />
              <AiFillStar className="m-auto inline" />
              <AiFillStar className="m-auto inline" />
              <AiFillStar className="m-auto inline" />
              <AiFillStar className="m-auto inline" />
              <h5 className="my-5 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                <b>Fritz Böswald, Geschäftsführer der Rundhaus GmbH</b>
              </h5>
            </div>
          ) : number === 2 ? (
            <div>
              <h5 className="2xl:w-3/5 m-auto md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                "Frau Kuliberda arbeitet äußerst gründlich und ordentlich. Sie
                ist ohne Ausnahmen zuverlässig und vertrauenswürdig. Wir sind
                sehr froh, sie gefunden zu haben."
              </h5>
              <AiFillStar className="m-auto inline" />
              <AiFillStar className="m-auto inline" />
              <AiFillStar className="m-auto inline" />
              <AiFillStar className="m-auto inline" />
              <AiFillStar className="m-auto inline" />
              <h5 className="my-5 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                <b>Franz Lindner, Steuerberater</b>
              </h5>
            </div>
          ) : (
            <div>
              <h5 className="2xl:w-3/5 m-auto md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                "Frau Kuliberda ist eine sehr angenehme und freundliche Person.
                Seit fünf Jahren reinigt sie unsere Büroräume und es gab noch
                nie einen Grund zur Beanstandung. Jeder schätzt ihre Höflichkeit
                und Pünktlichkeit."
              </h5>
              <AiFillStar className="m-auto inline" />
              <AiFillStar className="m-auto inline" />
              <AiFillStar className="m-auto inline" />
              <AiFillStar className="m-auto inline" />
              <AiFillStar className="m-auto inline" />
              <h5 className="my-5 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                <b>Firma van Erp GmbH</b>
              </h5>
            </div>
          )}
          <button className="sm:p-5 cursor-pointer " onClick={increment}>
            <MdOutlineArrowForwardIos />
          </button>
        </div>
      </div>
    </>
  )
}
