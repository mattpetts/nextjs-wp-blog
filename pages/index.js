import HeadMeta from '../components/HeadMeta'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function Home() {

    return (
        <>
            <div className="flex flex-1 flex-col justify-center items-center min-h-screen">
                <HeadMeta seo={{
                    'title': 'Matt\'s Website'
                }}/>
                <div className="w-10/12 py-8 m-auto sm:w-8/12">
                    <h1 className="w-100 text-center font-main font-bold text-6xl dark:text-white sm:text-left">Matt Petts</h1>
                    <p className="w-100 text-center font-main text-lg mb-3 dark:text-white sm:text-left">Software engineer and full-stack developer</p>
                    <div className="w-full flex flex-row justify-center align-center sm:justify-start">
                        <h4 className="rounded font-main font-light text-white text-sm px-4 py-1 mr-2 bg-theme-1">React</h4>
                        <h4 className="rounded font-main font-light text-white text-sm px-4 py-1 mr-2 bg-theme-2">Javascript</h4>
                        <h4 className="rounded font-main font-light text-white text-sm px-4 py-1 mr-2 bg-theme-3">PHP</h4>
                    </div>
                </div>
            </div>
            <div className='fixed bottom-3.5 w-full pb-5'>
                <ul className='flex flex-row justify-center align-center flex-1'>
                    <li className='mx-2 text-2xl cursor-pointer'>
                        <a href="https://github.com/mattpetts" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={ faGithub } className="dark:text-white" />
                        </a>
                    </li>
                    <li className='mx-2 text-2xl cursor-pointer'>
                        <a href="https://www.linkedin.com/in/matt-petts-51230968/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={ faLinkedin } className="dark:text-white" />
                        </a>
                    </li>
                    <li className='mx-2 text-2xl cursor-pointer'>
                        <a href="mailto:mattpetts23@gmail.com" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={ faEnvelope } className="dark:text-white" />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
