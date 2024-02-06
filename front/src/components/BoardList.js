import React from 'react';

function Board({ posts, onPostClick }) {

    return (
        <div>
            <h2>게시판</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id} onClick={() => onPostClick(post.id)}>
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default Board;