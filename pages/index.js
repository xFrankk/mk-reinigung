import Leistungen from "../components/leistungen"
import Start from "../components/start"
import WarumWir from "../components/warum-wir"
import Reviews from "../components/reviews"
import Garantie from "../components/garantie"

export default function Home() {
  return (
    <>
      <div className="bg-marta1 lg:bg-top bg-cover bg-center bg-no-repeat h-screen w-full absolute top-0 left-0"></div>
      <Start />
      <Leistungen />
      <WarumWir />
      <Reviews />
      <Garantie />
    </>
  )
}
