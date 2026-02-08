import { useState } from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    tag: string[];
}

const styles = {
    header: {
        marginBottom: '2rem',
        borderBottom: '3px solid #c85a3a',
    },
    nav: {
        listStyle: 'none' as const,
        padding: 0,
        display: 'flex' as const,
        gap: '2rem',
    },
    navLink: {
        color: '#c85a3a',
        textDecoration: 'none' as const,
        fontSize: '1.1rem',
        fontWeight: 'bold' as const,
    },
    container: {
        maxWidth: '100%',
        margin: 0,
        padding: '2rem',
        backgroundColor: '#f5ede0',
        minHeight: '100vh',
        fontFamily: 'Georgia, serif',
        color: '#5a4a3a',
    },
    heading: {
        color: '#8b5a2b',
        fontSize: '2.5rem',
        marginBottom: '1rem',
    },
    article: {
        marginBottom: '2rem',
        backgroundColor: '#fff8f0',
        padding: '1.5rem',
        borderRadius: '8px',
        borderLeft: '4px solid #d2691e',
    },
    articleTitle: {
        color: '#8b5a2b',
        marginBottom: '0.5rem',
    },
    articleMeta: {
        color: '#a0704d',
        fontSize: '0.9rem',
        marginBottom: '1rem',
    },
    articleText: {
        lineHeight: '1.6',
        marginBottom: '0.5rem',
    },
};

const Blog = () => {
    const [posts] = useState<BlogPost[]>([
        {
            id: 1,
            title: 'Eerste Blog Post',
            excerpt: 'Sammenvatting van mijn eerste week op stage.',
            content: 'Deze Week heb ik een kleine opleiding gevolgd van Xurrent 1 van de tools dat de Provincie Antwerpen gebruikt. Ook heb ik een aangenaam ontvangst gekregen van het team waar ik stage loop.',
            date: '2025-02-08',
            author: 'Cedric',
            tag: ['opleiding'],
        },
    ]);

    return (
        <>
            <header style={styles.header}>
                <nav>
                    <ul style={styles.nav}>
                        <li><Link to="/" style={styles.navLink}>Home</Link></li>
                        <li><Link to="/about" style={styles.navLink}>Over Mij</Link></li>
                        <li><Link to="/blog" style={styles.navLink}>Blog</Link></li>
                    </ul>
                </nav>
            </header>
            <div style={styles.container}>
                <h1 style={styles.heading}>Blog</h1>
                <div className="posts-list">
                    {posts.map((post) => (
                        <article key={post.id} style={styles.article}>
                            <h2 style={styles.articleTitle}>{post.title}</h2>
                            <p style={styles.articleMeta}>
                                {new Date(post.date).toLocaleDateString()} by {post.author}
                            </p>
                            <p style={styles.articleText}>{post.excerpt}</p>
                            <p style={styles.articleText}>{post.content}</p>
                            <p style={styles.articleText}>Tags: {post.tag.join(', ')}</p>
                        </article>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Blog;