import React, { useState } from 'react';
import createNoteMutation from '../../mutations/createNote';

export default () => {
    const [content, setContent] = useState('');

    const _handleSubmit = (e) => {
        e.preventDefault();
        createNoteMutation(content);
        setContent('');
    };

    return (
        <form onSubmit={_handleSubmit}>
            <label htmlFor="content">Content</label>
            <input type="text" id="content" onChange={(e) => setContent(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    )
}