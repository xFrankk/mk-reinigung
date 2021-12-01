import Link from "next/link"

export default function Impressum() {
  return (
    <div className="px-4 sm:px-16 md:px-32 xl:px-40 2xl:px-96 text-center bg-gray-200">
      <div className="flex items-center justify-center">
        <Link href="/impressum">
          <a className="p-2 pointer-cursor">Impressum</a>
        </Link>
      </div>
    </div>
  )
}
