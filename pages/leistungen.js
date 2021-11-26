import { GiOfficeChair, GiStairs } from "react-icons/gi"
import { MdConstruction, MdBedroomBaby } from "react-icons/md"
import { BsFillHouseDoorFill } from "react-icons/bs"
import { FaBuilding, FaStethoscope } from "react-icons/fa"

export default function Leistungen() {
  return (
    <>
      <div className="py-20">
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
        <div className="my-7">
          <BsFillHouseDoorFill className="text-4xl m-auto md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
          <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Unterhaltsreinigung
          </h4>
          <h5 className="m-auto md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl xl:w-3/4 2xl:w-2/4">
            Der erste Eindruck ist immer der wichtigste. Das gilt für Menschen
            wie für Häuser gleichermaßen.
          </h5>
        </div>
        <div className="my-7">
          <FaBuilding className="text-4xl m-auto md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
          <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Gebäudereinigung
          </h4>
          <h5 className="m-auto md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl xl:w-3/4 2xl:w-2/4">
            Wir haben das nötige Fachwissen und Equipment um Ihr Gebäude optimal
            zu reinigen und dauerhaft zu pflegen.
          </h5>
        </div>
        <div className="my-7">
          <FaStethoscope className="text-4xl m-auto md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
          <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Praxisreinigung
          </h4>
          <h5 className="m-auto md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl xl:w-3/4 2xl:w-2/4">
            Wir sind spezialisiert auf die Reinigung von Therapieräumen,
            Arztpraxen oder Wartezimmern.
          </h5>
        </div>
        <div className="my-7">
          <MdBedroomBaby className="text-4xl m-auto md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
          <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Kitareinigung
          </h4>
          <h5 className="m-auto md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl xl:w-3/4 2xl:w-2/4">
            Für die perfekte Ausstrahlung ihrer Kita verwenden wir Reiniger mit
            material- und umweltschonender Zusammensetzung.
          </h5>
        </div>
      </div>
      ________
    </>
  )
}
