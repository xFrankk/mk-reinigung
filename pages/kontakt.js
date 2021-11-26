import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlinePhone
} from "react-icons/ai"

export default function Kontakt() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div>
          <h3 className="mb-10 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            <b>Lernen Sie uns kennen!</b>
          </h3>
          <h4 className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Wir sind gerne für Sie da. Kontaktieren Sie uns jetzt.
          </h4>
          <h4 className="border-2 border-black p-2 my-5 text-sm sm:text-md md:lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            <AiOutlinePhone className="inline" /> 015208635640
          </h4>
          <h4 className="border-2 border-black p-2 my-5 text-sm sm:text-md md:lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            <AiOutlineMail className="inline" /> kuliberdamarta146@gmail.com
          </h4>
          <h4 className="border-2 border-black p-2 my-5 text-sm sm:text-md md:lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            <AiOutlineWhatsApp className="inline" /> 015208635640
          </h4>
        </div>
      </div>
      ________
    </>
  )
}
