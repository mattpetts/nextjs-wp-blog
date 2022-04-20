import Head from 'next/head'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function Home() {

    return (
        <>
            <div className="flex flex-1 flex-col justify-center items-center h-screen">
                <Head>
                    <title>Matt's Website</title>

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
                </Head>

                <div className="container">
                    <h1 className="w-100 text-left font-main font-bold text-6xl dark:text-white">Matt Petts</h1>
                    <p className="w-100 text-left font-main text-lg mb-3 dark:text-white">Software engineer and full-stack developer</p>
                    <div className="flex flex-row justtiy-start align-center">
                        <h4 className="rounded font-main font-light text-white text-sm px-4 py-1 mr-2 bg-theme-1">React</h4>
                        <h4 className="rounded font-main font-light text-white text-sm px-4 py-1 mr-2 bg-theme-2">Javascript</h4>
                        <h4 className="rounded font-main font-light text-white text-sm px-4 py-1 mr-2 bg-theme-3">PHP</h4>
                    </div>
                </div>
            </div>
            <div className='fixed bottom-3.5 w-full'>
            <ul className='flex flex-row justify-center align-center flex-1'>
                <li className='mx-2 text-2xl cursor-pointer'>
                    <Link href="/">
                        <FontAwesomeIcon icon={ faGithub } className="dark:text-white" />
                    </Link>
                </li>
                <li className='mx-2 text-2xl cursor-pointer'>
                    <Link href="/">
                        <FontAwesomeIcon icon={ faLinkedin } className="dark:text-white" />
                    </Link>
                </li>
                <li className='mx-2 text-2xl cursor-pointer'>
                    <Link href="/">
                        <FontAwesomeIcon icon={ faEnvelope } className="dark:text-white" />
                    </Link>
                </li>
            </ul>
        </div>
     </>
    )
}
