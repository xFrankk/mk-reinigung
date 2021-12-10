import Image from "next/image"

export default function Garantie() {
  return (
    <>
      <div
        id="garantie"
        className="h-screen flex items-center bg-hmarta2 bg-gray-200 xl:bg-cover xl:bg-no-repeat bg-cover bg-center px-4 sm:px-16 md:px-32 xl:px-40 2xl:px-96 text-center bg-green-100"
      >
        <div>
          <div className="text-left sm:hidden">
            <Image
              src="/img/garantie.png"
              placeholder="garantie"
              width={200}
              height={200}
            />
          </div>
          <div className="hidden sm:block text-left md:text-center">
            <Image
              src="/img/garantie.png"
              placeholder="garantie"
              width={400}
              height={400}
            />
          </div>
          <h4 className="md:text-2xl pb-10 lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Freundlicher Service, Reinigung bis ins kleinste Detail und
            Termintreue und Das ohne Ausnahmen. Falls Sie mit unserer Arbeit
            nicht zufrieden sind, nachdem wir Ihren Auftrag ausgeführt haben,
            dann gibt es Ihr Geld zurück! Das ist unser Engagement und unsere
            Garantie. Das ist 100% MK-Reinigung!
          </h4>
        </div>
      </div>
    </>
  )
}
