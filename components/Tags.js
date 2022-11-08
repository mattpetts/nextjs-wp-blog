import React, { useState, useEffect } from 'react'
import { getTags, getRandom } from '../lib/utils'

const Tags = ({ tags }) => {

    const [postTags, setPostTags] = useState([]);

    const returnTags = () => {
        tags.map(async (t) => {
            const tag = await getTags(t);
            setPostTags(postTags => [...postTags, tag.name])     
        });
    }

    useEffect(() => {
        returnTags();
    }, []);

    return (
        <div className='d-flex'>
            {postTags.map((tag) => (
                <span key={tag} className={`rounded font-main font-light text-white text-sm px-4 py-1 mr-2 mb-2 bg-theme-${getRandom()}`}>{tag}</span>
            ))}
        </div>
    )
}

export default Tags