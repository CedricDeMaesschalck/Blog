import { Link } from "react-router-dom";

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
  intro: {
    backgroundColor: '#fff8f0',
    padding: '1.5rem',
    borderRadius: '8px',
    borderLeft: '4px solid #d2691e',
    marginBottom: '2rem',
    lineHeight: '1.7',
  },
  introTitle: {
    color: '#8b5a2b',
    fontSize: '1.4rem',
    marginBottom: '0.75rem',
  },
  introText: {
    marginBottom: '0.75rem',
    lineHeight: '1.7',
  },
  sectionLabel: {
    color: '#8b5a2b',
    fontSize: '1.3rem',
    marginBottom: '1rem',
    marginTop: '0.5rem',
  },
  article: {
    marginBottom: '1.5rem',
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
  readMoreLink: {
    display: 'inline-block',
    marginTop: '0.75rem',
    color: '#c85a3a',
    textDecoration: 'none' as const,
    fontWeight: 'bold' as const,
    fontSize: '0.95rem',
  },
};

function LandingPage() {
  const featuredPost = {
      id: 15,
            title : "week 15",
            excerpt: "Laatste week stage",
            content: "Tijdens mijn laatste week heb ik nog de laatste paar foutjes aangepast en de Querybrowser verder afgemaakt.",
            date: "05-17-2026",
            author: "Cedric",
            tag: ["Afwerken","Einde Stage"] 
  };

  return (
    <div style={{ backgroundColor: '#f5ede0', minHeight: '100vh', fontFamily: 'Georgia, serif', color: '#5a4a3a' }}>
      <header style={styles.header}>
        <nav>
          <ul style={styles.nav}>
            <li key="home"><Link to="/" style={styles.navLink}>Home</Link></li>
            <li key="about"><Link to="/about" style={styles.navLink}>Over Mij</Link></li>
            <li key="blog"><Link to="/blog" style={styles.navLink}>Blog</Link></li>
          </ul>
        </nav>
      </header>

      <div style={styles.container}>
        <h1 style={styles.heading}>Stageblog — Provincie Antwerpen</h1>

        {/* Intro */}
        <div style={styles.intro}>
          <h2 style={styles.introTitle}>Waarvoor dient deze blog?</h2>
          <p style={styles.introText}>
            Ik ben Cedric, student graduaat programmeren. Op deze blog houd ik bij wat ik week per week doe
            tijdens mijn stage bij de Supportgroep van de Provincie Antwerpen.
          </p>
          <p style={styles.introText}>
            De blog is bedoeld voor mijn stagebegeleider en mentor, maar ook gewoon voor mezelf om bij te houden
            wat ik geleerd heb. Je vindt hier wekelijkse updates over mijn hoofdproject de <strong>Xurrent Service Wizard</strong>,
            een C# applicatie die automatisch services aanmaakt,deactiveerd,etc. via de Xurrent REST API maar ook kleinere taken,
            tegenslagen en dingen die goed gingen.
          </p>
          <Link to="/blog" style={styles.readMoreLink}>Bekijk alle blogposts →</Link>
        </div>

        {/* Uitgelichte post */}
        <h2 style={styles.sectionLabel}>Meest recente post</h2>
        <article style={styles.article}>
          <h2 style={styles.articleTitle}>{featuredPost.title}</h2>
          <p style={styles.articleMeta}>
            {new Date(featuredPost.date).toLocaleDateString()} by {featuredPost.author}
          </p>
          <p style={styles.articleText}>{featuredPost.content}</p>
          <p style={styles.articleText}>Tags: {featuredPost.tag.join(', ')}</p>
          <Link to="/blog" style={styles.readMoreLink}>Lees meer op de blogpagina →</Link>
        </article>
      </div>
    </div>
  );
}

export default LandingPage;