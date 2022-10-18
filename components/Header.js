import HeaderLink from './HeaderLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { getRandom } from '../lib/utils'

export default function Header({ darkTheme, toggleDarkTheme }) {

    const setTheme = (darkTheme) => {

        if (darkTheme) {
            toggleDarkTheme(false)
        } else {
            toggleDarkTheme(true)
        }
    }

    const rand = getRandom()

    return (
        <header className="w-100 py-8 flex flex-row justify-center fixed w-full border-b border-gray-100 z-30 bg-white dark:bg-gray-900 dark:border-gray-800">
            <ul className="flex flex-row justify-end px-2 container">
                <HeaderLink text="Home" href="/" />
                <HeaderLink text="Tech Blog" href="/blog" />
                <li className="mx-2 font-main text-md cursor-pointer blog-hover relative dark:text-white" onClick={() => setTheme(darkTheme)}>
                    <span className='z-10 relative'><FontAwesomeIcon icon={ darkTheme ? faSun : faMoon } /></span>
                    <span className={`hover-underline absolute left-0 -bottom-0 w-full h-1 transition-all bg-theme-${rand}`}></span>
                </li>
            </ul>
        </header>
    )
}
