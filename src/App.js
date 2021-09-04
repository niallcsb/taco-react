import './styles.css';
import {articleArray, mainArray, bioArray, faqArray} from "./data.js";
import {HeadNav, FootNav} from "./Nav.js"

function Header() {
  return (
    <header className="bodyHead">
      <a className="homeLink" href="" aria-label="Site Title: Taco Crawl">
        <h1 className="title">Taco Crawl</h1>
      </a>
      <HeadNav />
			<nav className="bcNav">
			</nav>
    </header>
  );
}

function Main() {
  return (
    <main id="allContent" className="homeContent">

    </main>
  );
}

function Footer() {
  return (
    <footer className="bodyFoot">
    <FootNav />
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
