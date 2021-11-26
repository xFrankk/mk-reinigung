import { GiOfficeChair, GiStairs } from "react-icons/gi"
import { MdConstruction } from "react-icons/md"
import Link from "next/link"

export default function Leistungen() {
  return (
    <>
      <div id="leistungen" className="py-20">
        <h3 className="mb-10 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          <b>Unsere Leistungen</b>
        </h3>
        <div className="my-7">
          <GiOfficeChair className="text-4xl m-auto md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
          <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Büroreinigung
          </h4>
          <h5 className="m-auto md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl xl:w-3/4 2xl:w-2/4">
            Sorgen Sie für ein optimales Arbeitsklima in Ihrer Firma. Wir
            kümmern uns um Ihre Büroreinigung.
          </h5>
        </div>
        <div className="my-7">
          <MdConstruction className="text-4xl m-auto md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
          <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Bau-Feinreinigung
          </h4>
          <h5 className="m-auto md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl xl:w-3/4 2xl:w-2/4">
            Bei der Baugrobreinigung entfernen wir den Bauschutt und beseitigen
            weitere lose aufliegende Verunreinigungen, damit der Bau in die
            nächste Phase übergehen kann.
          </h5>
        </div>
        <div className="my-7">
          <GiStairs className="text-4xl m-auto md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
          <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Treppenhausreinigung
          </h4>
          <h5 className="m-auto md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl xl:w-3/4 2xl:w-2/4">
            Wir bieten regelmäßige und professionelle Reinigung von Treppen an,
            die monatlich, wöchentlich oder sogar täglich durchgeführt werden
            kann.
          </h5>
        </div>
        <Link href="/leistungen">
          <button className="border-2 border-black p-2 mt-10 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            Alle Leistungen
          </button>
        </Link>
      </div>
      ________
    </>
  )
}
