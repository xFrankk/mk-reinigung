import { useState } from "react"
import { AiOutlineMenu, AiOutlineMail } from "react-icons/ai"
import { MdCancelPresentation } from "react-icons/md"
import { GiVacuumCleaner } from "react-icons/gi"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Nav() {
  const [menu, setMenu] = useState(false)
  const router = useRouter()

  return (
    <>
      <div className={`fixed top-0 w-full h-20 ${menu ? "bg-green-100 " : ""}`}>
        <div className="flex justify-between items-center mx-4 sm:mx-16 md:mx-32 xl:mx-40 2xl:mx-96">
          <Link href="/#start">
            <div
              className="text-center text-black cursor-pointer"
              onClick={() => setMenu(false)}
            >
              <h3>
                <b>MK</b> <GiVacuumCleaner className="inline" />
              </h3>
              <h4>Reinigung</h4>
            </div>
          </Link>
          <div className="md:hidden" onClick={() => setMenu(!menu)}>
            {menu ? (
              <MdCancelPresentation className="text-4xl" />
            ) : (
              <AiOutlineMenu className="text-4xl" />
            )}
          </div>
          <div className="hidden md:flex" onClick={() => setMenu(false)}>
            <Link href="/#leistungen">
              <a className="p-3 cursor-pointer">
                <h5 className="lg:text-lg">LEISTUNGEN</h5>
              </a>
            </Link>
            <Link href="/#ueber-uns">
              <a className="p-3 cursor-pointer ">
                <h5 className="lg:text-lg">ÜBER UNS</h5>
              </a>
            </Link>

            <Link href="/kontakt">
              <a className="p-3 cursor-pointer">
                <h5 className="lg:text-lg">KONTAKT</h5>
              </a>
            </Link>
            <Link href="/#impressum">
              <a className="p-3 cursor-pointer">
                <h5 className="lg:text-lg">IMPRESSUM</h5>
              </a>
            </Link>
          </div>
        </div>
      </div>
      {menu && (
        <div
          className="lg:hidden fixed bg-green-100  flex flex-col justify-around w-screen text-center top-20 h-screen pb-40"
          onClick={() => setMenu(false)}
        >
          <Link href="/">
            <h4 className="p-4">STARTSEITE</h4>
          </Link>
          <Link href="/#leistungen">
            <h4 className="p-6">LEISTUNGEN</h4>
          </Link>
          <Link href="/#ueber-uns">
            <h4 className="p-6">ÜBER UNS</h4>
          </Link>
          <Link href="/kontakt">
            <h4 className="p-6">KONTAKT</h4>
          </Link>
          <Link href="/#impressum">
            <h4 className="p-6">IMPRESSUM</h4>
          </Link>
        </div>
      )}
      <Link href="/kontakt">
        <div className={router.pathname === "/kontakt" ? "hidden" : ""}>
          <button className="fixed bottom-5 right-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl p-2 rounded-full border-2 border-black">
            <b>Kontakt</b>
          </button>
        </div>
      </Link>
    </>
  )
}
