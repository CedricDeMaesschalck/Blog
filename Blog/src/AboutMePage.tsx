import { Link } from 'react-router-dom';
import image from './assets/image.png';

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
      marginBottom: '0.75rem',
      fontSize: '1.3rem',
    },
    articleText: {
      lineHeight: '1.7',
      marginBottom: '0.6rem',
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
        <h1 style={styles.heading}>Over Mij</h1>

        {/* Foto + intro */}
        <section style={styles.article}>
          <img
            style={{ width: '220px', height: '220px', borderRadius: '10px', objectFit: 'cover', float: 'right', marginLeft: '1.5rem', marginBottom: '0.5rem' }}
            src={image}
            alt="Foto van Cedric"
          />
          <h2 style={styles.articleTitle}>Hallo, ik ben Cedric</h2>
          <p style={styles.articleText}>
            Ik ben student graduaat programmeren en dit is mijn stageblog.
          </p>
          <div style={{ clear: 'both' }} />
        </section>

        {/* Stage info */}
        <section style={styles.article}>
          <h2 style={styles.articleTitle}>Mijn Stage</h2>
          <p style={styles.articleText}>
            Ik loop stage bij de <strong>Provincie Antwerpen</strong>, bij de supportgroep. De Provincie Antwerpen
            is een provinciale overheidsinstelling gevestigd in Antwerpen. Het ICT team zorgt voor de digitale
            ondersteuning van de hele organisatie.
          </p>
          <p style={styles.articleText}>
            Mijn hoofdtaak was het ontwikkelen van de <strong>Xurrent Service Wizard</strong> een C# applicatie
            waarmee services automatisch aangemaakt, gedeactiveerd, overgezet en overschreven kunnen worden via de
            Xurrent REST API. Later werd daar ook de <strong>Querybrowser</strong> aan toegevoegd: een tool om
            gebruikers op te zoeken en te beheren.
          </p>
          <p style={styles.articleText}>
            Ik heb tijdens deze stage van 72 dagen veel bijgeleerd over REST API's, C#, en hoe een professioneel
            ICT team werkt in een overheidsomgeving.
          </p>
        </section>

        {/* Mini CV */}
        <section style={styles.article}>
          <h2 style={styles.articleTitle}>Overzicht</h2>
          <p style={styles.articleText}><strong>Opleiding:</strong> Graduaat Programmeren</p>
          <p style={styles.articleText}><strong>Stageplek:</strong> Provincie Antwerpen — ICT Supportgroep</p>
          <p style={styles.articleText}><strong>Stageduur:</strong> 72 dagen (februari – mei 2026)</p>
          <p style={styles.articleText}><strong>Hoofdproject:</strong> Xurrent Service Wizard (C#, REST API, CSV)</p>
          <p style={styles.articleText}><strong>Tweede project:</strong> Querybrowser (C#,Fabric)</p>
        </section>

        {/* Contact */}
        <section style={{ backgroundColor: '#fff8f0', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #d2691e' }}>
           <h2 style={{ color: '#8b5a2b', marginBottom: '1rem' }}>Contact</h2>
          <p><a href="https://www.linkedin.com/in/cedric-de-maesschalck-7797a92a2/" style={{ color: '#d2691e', textDecoration: 'none', fontWeight: 'bold' }}>LinkedIn Profile</a></p>
        </section>
      </div>
    </>
  );
};

export default AboutMePage;