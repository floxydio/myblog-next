import Head from 'next/head'

export default function Layouts({title}) {
    return(
        <>
        <Head>
            <title>{title}</title>
        </Head>

        </>
    )
}