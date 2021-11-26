import Link from "next/link"

export default function Start() {
  return (
    <>
      <div id="start" className="flex items-center h-screen">
        <div>
          <h5 className="pb-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Gebäudereinigung in Ingolstadt und Umgebung gesucht? Jetzt mit 100%
            Zufriedenheitsgarantie!
          </h5>
          <Link href="/kontakt">
            <button className="p-2 bg-green-300 hover:bg-green-400 text-white rounded-2xl text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
              <b>Angebot anfordern!</b>
            </button>
          </Link>
        </div>
      </div>
      ________
    </>
  )
}
