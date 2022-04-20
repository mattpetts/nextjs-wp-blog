import React from 'react'
import Link from 'next/link'
import { getRandom } from '../utilities/getRand'

export default function HeaderLink({ text, href }) {

    const rand = getRandom()

    return (
        <Link href={href}>
            <li className="mx-2 font-main text-md cursor-pointer blog-hover relative dark:text-white">
                <span className='z-10 relative'>{text}</span>
                <span className={`hover-underline absolute left-0 -bottom-0 w-full h-1 transition-all bg-theme-${rand}`}></span>
            </li>
        </Link>
    )
}
