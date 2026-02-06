import React, { useState } from 'react';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
}

const Blog: React.FC = () => {
    const [posts] = useState<BlogPost[]>([
        {
            id: 1,
            title: 'Welcome to My Blog',
            excerpt: 'This is my first blog post...',
            content: 'Welcome to my blog! Here I share thoughts and ideas about web development.',
            date: '2024-01-15',
            author: 'Cedric',
        },
        {
            id: 2,
            title: 'React Best Practices',
            excerpt: 'Tips for writing better React code...',
            content: 'Learn about hooks, component composition, and more.',
            date: '2024-01-10',
            author: 'Cedric',
        },
    ]);

    return (
        <div className="blog-container" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1>My Blog</h1>
            <div className="posts-list">
                {posts.map((post) => (
                    <article key={post.id} style={{ marginBottom: '2rem', borderBottom: '1px solid #ddd', paddingBottom: '1rem' }}>
                        <h2>{post.title}</h2>
                        <p style={{ color: '#666', fontSize: '0.9rem' }}>
                            {new Date(post.date).toLocaleDateString()} by {post.author}
                        </p>
                        <p>{post.excerpt}</p>
                        <a href={`#post/${post.id}`} style={{ color: '#0066cc', textDecoration: 'none' }}>
                            Read more →
                        </a>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Blog;