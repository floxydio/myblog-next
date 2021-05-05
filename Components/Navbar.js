import Link from 'next/link'

export default function Navbar() {
    return(
        <>
            <nav className="px-4 py-2 flex justify-end container">
                <Link href="/"
                >
                <span className="text-sm text-white cursor-pointer px-3 py-3 bg-transparent hover:bg-blue-400 hover:text-white">Home</span>
                </Link>
                <Link href="/Todo">
                <span className="text-sm text-white cursor-pointer px-3 py-3 bg-transparent hover:bg-blue-400 hover:text-white">Schedule Todo</span>
                </Link>
                
            </nav>
        </>
    )
}