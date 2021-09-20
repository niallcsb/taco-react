import {articleArray} from "../data/data";

const ArticleBody = () => {
	const locationString = window.location.pathname.toString().replace('/articles/', '');
	let validatedArticle = articleArray.find(({name}) => name === locationString);
	return (
	  <article className="articleBody" key={validatedArticle.id}>
	    <figure className="articleFigure">
	      <img className="articleImg" src={validatedArticle.imageArticle} width="100%" alt=""/>
	      <figcaption className="articleCaption">
	        {validatedArticle.caption}
	      </figcaption>
	    </figure>
	    <span className="articleHeading">
	      <h1 className="articleHeadline">{validatedArticle.headline}</h1>
	      <h2 className="articleDate">{validatedArticle.date}</h2>
	    </span>
	    <h2 className="articleSubhead">{validatedArticle.subhead}</h2>
	  </article>
	)
};

export default ArticleBody;
