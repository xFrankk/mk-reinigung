import Link from "next/link"

export default function Impressum() {
  return (
    <>
      <div className="flex items-center justify-center">
        <Link href="/impressum">
          <a className="p-2 my-5 pointer-cursor">Impressum</a>
        </Link>
      </div>
    </>
  )
}
