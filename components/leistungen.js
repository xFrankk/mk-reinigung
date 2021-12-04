import { GiOfficeChair } from "react-icons/gi"
import { MdConstruction, MdBedroomBaby } from "react-icons/md"
import Link from "next/link"
import { FaStethoscope } from "react-icons/fa"
import Image from "next/image"

export default function Leistungen() {
  return (
    <div className="px-4 sm:px-16 md:px-32 xl:px-40 2xl:px-96 text-center bg-green-100">
      <div id="leistungen" className="py-20">
        <h3 className="mb-10 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          <b>Unsere Leistungen</b>
        </h3>
        <div className="lg:flex">
          <div className="m-7 lg:w-2/4">
            {/* <FaStethoscope className="text-4xl text-green-300 m-auto md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
            <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl">
              <b>Praxisreinigung</b>
            </h4> */}
            <Image
              src="/img/leistungen/praxis.png"
              placeholder="praxis"
              width={200}
              height={200}
            />
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Wir sind spezialisiert auf die Reinigung von Therapieräumen,
              Arztpraxen oder Wartezimmern.
            </h5>
          </div>
          <div className="m-7 lg:w-2/4">
            {/* <GiOfficeChair className="text-green-300 text-4xl m-auto md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
            <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl">
              <b>Büroreinigung</b>
            </h4> */}
            <Image
              src="/img/leistungen/office.png"
              placeholder="praxis"
              width={200}
              height={200}
            />
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Sorgen Sie für ein optimales Arbeitsklima in Ihrer Firma. Wir
              kümmern uns um Ihre Büroreinigung.
            </h5>
          </div>
        </div>
        <div className="lg:flex">
          <div className="m-7 lg:w-2/4">
            {/* <MdConstruction className="text-green-300 text-4xl m-auto md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
            <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl">
              <b>Bau-Feinreinigung</b>
            </h4> */}
            <Image
              src="/img/leistungen/construction.png"
              placeholder="praxis"
              width={200}
              height={200}
            />
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Bei der Baugrobreinigung entfernen wir den Bauschutt und
              beseitigen weitere Verunreinigungen, damit der Bau in die nächste
              Phase übergehen kann.
            </h5>
          </div>
          <div className="m-7 lg:w-2/4">
            {/* <MdBedroomBaby className="text-4xl text-green-300 m-auto md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl" />
            <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl">
              <b>Kitareinigung</b>
            </h4> */}
            <Image
              src="/img/leistungen/kita.png"
              placeholder="praxis"
              width={200}
              height={200}
            />
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Für die perfekte Ausstrahlung ihrer Kita verwenden wir Reiniger
              mit material- und umweltschonender Zusammensetzung.
            </h5>
          </div>
        </div>

        <Link href="/leistungen">
          <button className="bg-green-300 hover:bg-green-400 rounded-2xl p-2 mt-10 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            Alle Leistungen
          </button>
        </Link>
      </div>
    </div>
  )
}
