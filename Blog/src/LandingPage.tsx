import { Link } from "react-router-dom";

function LandingPage() {
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
    <div className="landing-page" style={{ backgroundColor: '#fef9f3' }}>
      <header style={styles.header}>
      <nav >
      <ul style={styles.nav}>
      <li key="home"><Link to="/" style={styles.navLink}>Home</Link></li>
      <li key="about"><Link to="/about" style={styles.navLink}>Over Mij</Link></li>
      <li key="blog"><Link to="/blog" style={styles.navLink}>Blog</Link></li>
      </ul>
      </nav>
      </header>

      <main>
      <section style={{ textAlign: 'center', padding: '6rem 2rem', background: 'linear-gradient(135deg, #d2691e 0%, #8b4513 100%)', color: '#fff', borderRadius: '8px', margin: '2rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welkom op mijn Blog!</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>Hier deel ik mijn ervaringen en inzichten over mijn stage bij de Provincie Antwerpen.</p>
      <Link to="/blog" style={{ display: 'inline-block', padding: '0.75rem 1.5rem', backgroundColor: '#f5e6d3', color: '#8b4513', textDecoration: 'none', borderRadius: '4px', fontWeight: '600', transition: 'transform 0.2s' }}>
      Lees mijn Blog
      </Link>
      </section>
      </main>
    </div>
  );
}

export default LandingPage;
