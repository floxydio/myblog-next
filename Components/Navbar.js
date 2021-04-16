import Link from 'next/link'

export default function Navbar() {
    return(
        <>
            <nav className="px-4 py-2 flex justify-end">
                <Link href="/">
                <span className="text-sm text-white cursor-pointer px-3 py-3 bg-transparent hover:bg-blue-400 hover:text-white">Home</span>
                </Link>
                <Link href="/Flutter">
                <span className="text-sm text-white cursor-pointer px-3 py-3 bg-transparent hover:bg-blue-400 hover:text-white">Learn Flutter</span>
                </Link>
                <Link href="/React">
                <span className="text-sm text-white cursor-pointer px-3 py-3 bg-transparent hover:bg-blue-400 hover:text-white">Learn ReactJS</span>
                </Link>
                
            </nav>
        </>
    )
}