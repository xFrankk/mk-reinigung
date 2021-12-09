import Image from "next/image"

export default function Garantie() {
  return (
    <>
      <div
        id="garantie"
        className="h-screen flex items-center bg-hmarta2 bg-gray-200 xl:bg-cover xl:bg-no-repeat bg-cover bg-center px-4 sm:px-16 md:px-32 xl:px-40 2xl:px-96 text-center bg-green-100"
      >
        <div>
          <div className="xl:hidden">
            <Image
              src="/img/garantie.png"
              placeholder="hi"
              width={200}
              height={200}
            />
          </div>
          <div className="hidden xl:block">
            <Image
              src="/img/garantie.png"
              placeholder="hi"
              width={400}
              height={400}
            />
          </div>
          {/* <button className="cursor-default rotate-45 p-6 bg-green-300 rounded-full md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            logo
          </button> */}
          <div className="bg-gray-100 -mx-4 sm:-mx-16 md:-mx-32 xl:-mx-40 2xl:-mx-96">
            <h4 className="p-4 sm:px-16 md:px-32 xl:px-40 2xl:px-96 my-10 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              Freundlicher Service, Reinigung bis ins kleinste Detail und
              Termintreue und Das ohne Ausnahmen. Falls Sie mit unserer Arbeit
              nicht zufrieden sind, nachdem wir Ihren Auftrag ausgeführt haben,
              dann gibt es Ihr Geld zurück! Das ist unser Engagement und unsere
              Garantie. Das ist 100% MK-Reinigung!
            </h4>
          </div>
        </div>
      </div>
    </>
  )
}
