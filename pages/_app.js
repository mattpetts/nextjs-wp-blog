import React,{ useState } from 'react'

import Header from '../components/Header'
import '../public/css/global.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

function MyApp({ Component, pageProps }) {

    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <main className={darkTheme ? 'dark' : 'light'}>
            <div className='bg-white min-h-screen dark:bg-gray-900'>
                <Header
                    darkTheme={darkTheme}
                    toggleDarkTheme={(bool) => setDarkTheme(bool)}
                />
                <Component {...pageProps} />
            </div>
        </main>
    )
}

export default MyApp
