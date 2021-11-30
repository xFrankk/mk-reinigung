import Link from "next/link"

export default function Start() {
  return (
    <>
      <div id="start" className="relative h-screen">
        <Link href="/#garantie">
          <a className="absolute right-1/4 top-40 rotate-45 text-yellow-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            logo
          </a>
        </Link>
        <div className="absolute top-2/4">
          <div className="flex items-center">
            <div>
              <h5 className="pb-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                Gebäudereinigung in Ingolstadt und Umgebung gesucht? Jetzt mit
                100% Zufriedenheitsgarantie!
              </h5>
              <Link href="/kontakt">
                <button className="p-2 bg-green-300 hover:bg-green-400 text-white rounded-2xl text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                  <b>Angebot anfordern!</b>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      ________
    </>
  )
}
