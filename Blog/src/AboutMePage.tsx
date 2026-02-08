
import { Link } from 'react-router-dom';

const AboutMePage = () => {

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
        
        <h1 style={styles.heading}>About Me</h1>

        <section style={styles.article}>
          <p style={styles.articleText}>
            Welcome bij mijn blog.
          </p>
        </section>

        <section style={{ backgroundColor: '#fff8f0', padding: '1.5rem', borderRadius: '8px' }}>
          <h2 style={{ color: '#8b5a2b', marginBottom: '1rem' }}>Contact</h2>
          <p><a href="https://www.linkedin.com/in/cedric-de-maesschalck-7797a92a2/" style={{ color: '#d2691e', textDecoration: 'none', fontWeight: 'bold' }}>LinkedIn Profile</a></p>
        </section>
      </div>
      </>
    );
};

export default AboutMePage;