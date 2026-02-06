import React from 'react';

export default function AboutMePage() {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
            <h1>About Me</h1>
            
            <section style={{ marginBottom: '2rem' }}>
                <p>
                    Welcome to my blog! I'm a passionate developer interested in creating 
                    meaningful digital experiences.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2>Skills</h2>
                <ul>
                    <li>TypeScript / React</li>
                    <li>Web Development</li>
                    <li>Software Engineering</li>
                </ul>
            </section>

            <section>
                <h2>Connect</h2>
                <p>Feel free to reach out or follow my work on GitHub and other platforms.</p>
            </section>
        </div>
    );
}