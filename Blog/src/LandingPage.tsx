import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page">
      <header>
        <nav>
          <h1>Welcome</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/AboutMePage">Over Mij</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </nav>
      </header>

      <section />
    </div>
  );
}

export default LandingPage;
