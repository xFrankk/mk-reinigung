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
      <div
        className={`fixed top-0 w-full h-20 z-20 ${menu ? "bg-green-100" : ""}`}
      >
        <div className="flex justify-between items-center mx-4 sm:mx-16 md:mx-32 xl:mx-40 2xl:mx-96">
          <Link href="/#start">
            <div
              className="cursor-pointer text-green-300"
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
            <Link href="/#garantie">
              <a className="p-3 cursor-pointer text-yellow-400">
                <h5 className="lg:text-lg">GARANTIE</h5>
              </a>
            </Link>
          </div>
        </div>
      </div>
      {menu && (
        <div className="md:hidden fixed h-screen w-screen bg-green-100 z-10">
          <div
            className="flex flex-col justify-center items-center h-full bg-green-100"
            onClick={() => setMenu(false)}
          >
            <Link href="/">
              <a className="p-4 sm:p-6 text-xl">STARTSEITE</a>
            </Link>
            <Link href="/#leistungen">
              <a className="p-4 sm:p-6 text-xl">LEISTUNGEN</a>
            </Link>
            <Link href="/#ueber-uns">
              <a className="p-4 sm:p-6 text-xl">ÜBER UNS</a>
            </Link>
            <Link href="/kontakt">
              <a className="p-4 sm:p-6 text-xl">KONTAKT</a>
            </Link>
            <Link href="/#garantie">
              <a className="p-4 sm:p-6 text-xl text-yellow-400">GARANTIE</a>
            </Link>
          </div>
        </div>
      )}
      <Link href="/kontakt">
        <button
          className={`${
            router.pathname === "/kontakt" ? "hidden" : ""
          } bg-green-300 z-10 hover:bg-green-400 text-white rounded-2xl fixed bottom-5 right-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl p-2`}
        >
          Kontakt
        </button>
      </Link>
    </>
  )
}
