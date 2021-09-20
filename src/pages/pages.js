import ArticleLinks from "../articles/ArticleLinks";
import ArticleBody from "../articles/ArticleBody";
import SocialBios from "../social/SocialBios";
import FaqSections from "../faq/FaqSections";

export function Home(props) {
  return (
    <main id="allContent" className="homeContent">
      <ArticleLinks array={props.array} />
    </main>
  );
}

export function ArticleList(props) {
  return (
    <main id="allContent" className="articlesContent">
      <ArticleLinks array={props.array} />
    </main>
  );
}

export function IndividualArticle(props) {
  return (
    <main id="allContent" className="individualArticle">
      <ArticleBody />
    </main>
  );
}

export function Store() {
  return (
    <main id="allContent" className="storeContent">
      <h1> Store </h1>
    </main>
  );
}

export function Social() {
  return (
    <main id="allContent" className="socialContent">
      <SocialBios />
    </main>
  );
}

export function Random() {
  return (
    <main id="allContent" className="randomContent">
      <h1> Random </h1>
    </main>
  );
}

export function Faq() {
  return (
    <main id="allContent" className="faqContent">
      <FaqSections />
    </main>
  );
}
