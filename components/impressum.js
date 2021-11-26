import Link from "next/link"

export default function Impressum() {
  return (
    <>
      <div className="flex items-center justify-center">
        <Link href="/impressum">
          <a className="p-2 my-5 pointer-cursor">Impressum</a>
        </Link>
      </div>
      <h5 className="p-5">© 2021 MK-Reinigung. All rights reserved.</h5>
    </>
  )
}
