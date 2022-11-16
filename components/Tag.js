import React, { useState } from 'react'
import { getRandom } from '../lib/utils'

const Tag = ({ tag }) => {
    const [theme, setTheme] = useState(getRandom());

    return (
        <span className={`rounded font-main font-light text-white text-sm px-4 py-1 mr-2 mb-2 bg-theme-${theme}`}>{tag}</span>
    )
}

export default Tag