import Leistungen from "../components/leistungen"
import Start from "../components/start"
import WarumWir from "../components/warum-wir"
import Reviews from "../components/reviews"

export default function Home() {
  return (
    <>
      <Start />
      <Leistungen />
      <div id="ueber-uns" className="mx-auto py-20">
        <WarumWir />
        <Reviews />
      </div>
      ________
    </>
  )
}
