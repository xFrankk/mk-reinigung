import Image from "next/image"

export default function Leistungen() {
  return (
    <>
      <div
        id="leistungen"
        className="py-20 px-4 sm:px-16 md:px-32 xl:px-40 2xl:px-96 text-center bg-green-100"
      >
        <h3 className="mb-10 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          <b>Unsere Leistungen</b>
        </h3>
        <div className="lg:flex">
          <div className="m-7 lg:w-2/4">
            <Image
              src="/img/leistungen/praxis.png"
              placeholder="praxis"
              width={200}
              height={200}
            />
            <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl">
              <b>Praxisreinigung</b>
            </h4>
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Wir sind spezialisiert auf die Reinigung von Therapieräumen,
              Arztpraxen oder Wartezimmern.
            </h5>
          </div>
          <div className="m-7 lg:w-2/4">
            <Image
              src="/img/leistungen/büro.png"
              placeholder="büro"
              width={200}
              height={200}
            />
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
            <Image
              src="/img/leistungen/bau.png"
              placeholder="bau"
              width={200}
              height={200}
            />
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
            <Image
              src="/img/leistungen/kita.png"
              placeholder="kita"
              width={200}
              height={200}
            />
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
            <Image
              src="/img/leistungen/treppe.png"
              placeholder="treppe"
              width={200}
              height={200}
            />
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
            <Image
              src="/img/leistungen/haus.png"
              placeholder="haus"
              width={200}
              height={200}
            />
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
            <Image
              src="/img/leistungen/gebäude.png"
              placeholder="gebäude"
              width={200}
              height={200}
            />
            <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl">
              <b>Gebäudereinigung</b>
            </h4>
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Wir haben das nötige Fachwissen und Equipment um Ihr Gebäude
              optimal zu reinigen und dauerhaft zu pflegen.
            </h5>
          </div>
          <div className="m-7 lg:w-2/4">
            <Image
              src="/img/leistungen/boden.png"
              placeholder="boden"
              width={200}
              height={200}
            />
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
    </>
  )
}
