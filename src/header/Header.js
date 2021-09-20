import {Link} from "react-router-dom";
import {HeadNav} from "../nav/Nav";
import Breadcrumb from "./Breadcrumb";

function Header() {
  return (
    <header className="bodyHead">
      <Link className="homeLink" to="/" aria-label="Site Title: Taco Crawl">
        <h1 className="title">Taco Crawl</h1>
      </Link>
      <HeadNav />
			<Breadcrumb />
    </header>
  );
}

export default Header;
