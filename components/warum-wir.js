import Image from "next/image"

export default function WarumWir() {
  return (
    <>
      <div
        id="ueber-uns"
        className="py-20 bg-gray-200 px-4 sm:px-16 md:px-32 xl:px-40 2xl:px-96 text-center bg-green-100"
      >
        <h3 className="mb-10 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          <b>Warum wir?</b>
        </h3>
        <div className="lg:flex">
          <div className="m-7 lg:w-2/4">
            <Image
              src="/img/eigenschaften/zuverlässig.png"
              placeholder="praxis"
              width={200}
              height={200}
            />
            <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl">
              <b>Zuverlässig</b>
            </h4>
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Wir haben bereits viele zufriedene Kunden für uns begeistern
              können!
            </h5>
          </div>
          <div className="m-7 lg:w-2/4">
            <Image
              src="/img/eigenschaften/kompetent.png"
              placeholder="praxis"
              width={200}
              height={200}
            />
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
            <Image
              src="/img/eigenschaften/individuell.png"
              placeholder="praxis"
              width={200}
              height={200}
            />
            <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl">
              <b>Individuell</b>
            </h4>
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Sie haben spezifische Anforderungen? Wir kümmern uns drum!
            </h5>
          </div>
          <div className="m-7 lg:w-2/4">
            <Image
              src="/img/eigenschaften/flexibel.png"
              placeholder="praxis"
              width={200}
              height={200}
            />
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
            <Image
              src="/img/eigenschaften/gründlich.png"
              placeholder="praxis"
              width={200}
              height={200}
            />
            <h4 className="my-2 md:text-2xl lg:text-3xl xl:text-4xl">
              <b>Gründlich</b>
            </h4>
            <h5 className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Jede Ecke und Kante wird von uns sauber gemacht.
            </h5>
          </div>
          <div className="m-7 lg:w-2/4">
            <Image
              src="/img/eigenschaften/professionell.png"
              placeholder="praxis"
              width={200}
              height={200}
            />
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
