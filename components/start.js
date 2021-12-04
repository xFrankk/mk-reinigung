import Link from "next/link"
import Image from "next/image"

export default function Start() {
  return (
    <div className="bg-hmarta1 xl:bg-cover xl:bg-no-repeat bg-gray-200 bg-cover bg-center px-4 sm:px-16 md:px-32 xl:px-40 2xl:px-96 text-center">
      <div id="start" className="relative h-screen">
        <Link href="/#garantie">
          <div className="xl:hidden absolute left-0 top-32 cursor-pointer">
            <Image
              src="/img/garantie.png"
              placeholder="hi"
              width={200}
              height={200}
            />
          </div>
        </Link>
        <Link href="/#garantie">
          <div className="hidden xl:block absolute right-0 rotate-45 top-32 cursor-pointer">
            <Image
              src="/img/garantie.png"
              placeholder="hi"
              width={300}
              height={300}
            />
          </div>
        </Link>
        <div className="absolute top-2/4">
          <div className="flex items-center">
            <div>
              <h5 className="pb-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                <b>
                  Gebäudereinigung in Ingolstadt und Umgebung gesucht? Jetzt mit
                  100% Zufriedenheitsgarantie!
                </b>
              </h5>
              <Link href="/kontakt">
                <button className="p-4 bg-green-300 hover:bg-green-400 rounded-2xl text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                  <b>Angebot anfordern!</b>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
