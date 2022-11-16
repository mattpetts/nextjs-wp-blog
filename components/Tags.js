import React, { useState, useEffect } from 'react'
import { getTags } from '../lib/utils'
import Tag from './Tag';

const Tags = ({ tags }) => {

    const [postTags, setPostTags] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    const returnTags = () => {
        tags.map(async (t) => {
            const tag = await getTags(t);
            setPostTags(postTags => [...postTags, tag.name]);
        });
    }

    useEffect(() => {
        returnTags();
    }, []);

    useEffect(() => {
        if (postTags.length === tags.length) {
            setIsloading(false);
        }
    }, [postTags]);

    return (
        <div className='d-flex'>
            {!isLoading && postTags.map((tag) => (
                <Tag key={tag} tag={tag} />
            ))}
        </div>
    )
}

export default Tags