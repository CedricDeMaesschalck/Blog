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
            title: 'Week 1',
            excerpt: 'Sammenvatting van mijn eerste week op stage.',
            content: 'Deze Week heb ik een kleine opleiding gevolgd van Xurrent 1 van de tools dat de Provincie Antwerpen gebruikt. Ook heb ik een aangenaam ontvangst gekregen van het team waar ik stage loop.',
            date: '08-02-2026',
            author: 'Cedric',
            tag: ['opleiding'],
        },
        {
            id: 2,
            title: 'Week 2',
            excerpt: 'Service maken',
            content: 'Deze week mocht ik beginnen met code schrijven en mijn eerste taak was het automatiseren van een service aan te maken. Dit lukte op het einde van de week maar zeker niet zonder enige tegenslagen. Hier en daar wat extra opzoekwerk gedaan. Het Supportteam heeft me ook geholpen als ik iets niet goed begreep.',
            date: '02-15-2026',
            author: 'Cedric',
            tag: ['Bijleren', 'Ups and Downs','Coderen',],
        },
        {
            id: 3,
            title: 'Week 3',
            excerpt: 'Service maken voltooid',
            content: 'Deze week ging goed en de service chain is volledig klaar. zou nu een service kunnen aanmaken deze dan een service instance geven -> service Offering -> SLA -> Category en dit wordt dan elke keer via de xurrent api naar xurrent zelf gestuurd. Nu mijn volgende taak is iets moeilijker het updaten van een service naar onbruikbaar en ook alles errond in 1 keer.',
            date: '02-22-2026',
            author: 'Cedric',
            tag: ['Voltooid'],
        },
        {
            id: 4,
            title: "week 4",
            excerpt: "Deactiveren van Service",
            content: "Mijn nieuwe taak voor deze week was het deactiveren van een Service en alles dat er rond hing. Dus heb ik de Xurrent Rest API documentatie moeten raadplegen voor wat er nodig is om een service uit te zetten en zo als een soort van waterval te werk te gaan. Toen ik dit had afgemaakt kon ik beginnen aan het overzetten van een service van de test omgeving in xurrent naar de Productie omgeving of omgekeerd.",
            date: "02-28-2026",
            author: "Cedric",
            tag: ["Bijleren","Coderen",]
        },
        {
            id: 5,
            title: "week 5",
            excerpt: "Service Overzetten",
            content: "Deze week heb ik verder gewerkt aan het overzetten van services dit is toch het moeilijkste dat ik tot nu toe heb gedaan. Wegens dat je veel checks moet doen of het al bestaat in 1 van de 2 platformen. Ook omdat niet alles hetzelfde is Bv. Ids zijn anders waardoor als je een service van de ene naar de andere wilt overzetten je de id moet verwijderen. Maar ik krijg de nodige hulp van mijn team als ik met vragen zit voor als ik een keer niet zeker ben.",
            date: "03-08-2026",
            author: "Cedric",
            tag: ["Bijleren","Ups and Downs",]
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