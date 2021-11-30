import { GiOfficeChair, GiStairs, GiFloorPolisher } from "react-icons/gi"
import { MdConstruction, MdBedroomBaby } from "react-icons/md"
import { BsFillHouseDoorFill } from "react-icons/bs"
import { FaBuilding, FaStethoscope } from "react-icons/fa"

export default function Leistungen() {
  return (
    <>
      <div id="leistungen" className="py-20">
        <h3 className="mb-10 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          <b>Unsere Leistungen</b>
        </h3>
        <div className="lg:flex">
          <div className="m-7 lg:w-2/4">
            <FaStethoscope className="text-4xl text-green-300 m-auto md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
            <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl">
              <b>Praxisreinigung</b>
            </h4>
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Wir sind spezialisiert auf die Reinigung von Therapieräumen,
              Arztpraxen oder Wartezimmern.
            </h5>
          </div>
          <div className="m-7 lg:w-2/4">
            <GiOfficeChair className="text-green-300 text-4xl m-auto md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
            <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl">
              <b>Büroreinigung</b>
            </h4>
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Sorgen Sie für ein optimales Arbeitsklima in Ihrer Firma. Wir
              kümmern uns um Ihre Büroreinigung.
            </h5>
          </div>
        </div>
        <div className="lg:flex">
          <div className="m-7 lg:w-2/4">
            <MdConstruction className="text-green-300 text-4xl m-auto md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
            <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl">
              <b>Bau-Feinreinigung</b>
            </h4>
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Bei der Baugrobreinigung entfernen wir den Bauschutt und
              beseitigen weitere Verunreinigungen, damit der Bau in die nächste
              Phase übergehen kann.
            </h5>
          </div>
          <div className="m-7 lg:w-2/4">
            <MdBedroomBaby className="text-4xl text-green-300 m-auto md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
            <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl">
              <b>Kitareinigung</b>
            </h4>
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Für die perfekte Ausstrahlung ihrer Kita verwenden wir Reiniger
              mit material- und umweltschonender Zusammensetzung.
            </h5>
          </div>
        </div>
        <div className="lg:flex">
          <div className="m-7 lg:w-2/4">
            <GiStairs className="text-green-300 text-4xl m-auto md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
            <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl">
              <b>Treppenhausreinigung</b>
            </h4>
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Wir bieten regelmäßige und professionelle Reinigung von Treppen
              an, die monatlich, wöchentlich oder sogar täglich durchgeführt
              werden kann.
            </h5>
          </div>
          <div className="m-7 lg:w-2/4">
            <BsFillHouseDoorFill className="text-4xl text-green-300 m-auto md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
            <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl">
              <b>Unterhaltsreinigung</b>
            </h4>
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Der erste Eindruck ist immer der wichtigste. Das gilt für Menschen
              wie für Häuser gleichermaßen.
            </h5>
          </div>
        </div>
        <div className="lg:flex">
          <div className="m-7 lg:w-2/4">
            <FaBuilding className="text-green-300 text-4xl m-auto md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
            <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl">
              <b>Gebäudereinigung</b>
            </h4>
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Wir haben das nötige Fachwissen und Equipment um Ihr Gebäude
              optimal zu reinigen und dauerhaft zu pflegen.
            </h5>
          </div>
          <div className="m-7 lg:w-2/4">
            <GiFloorPolisher className="text-4xl text-green-300 m-auto md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
            <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl">
              <b>Bodenreinigung</b>
            </h4>
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Durch unser hohes Maß an Fachwissen hat ihr Fußboden eine deutlich
              höhere Lebensdauer.
            </h5>
          </div>
        </div>
      </div>
      ________
    </>
  )
}
