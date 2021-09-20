import {Link} from "react-router-dom";

const ArticleLinks = (props) => {
  const reviewItems = props.array.map((item) =>
    <Link
    className="reviewLink"
    to={`/${item.section}/${item.name}`}
    key={item.id}>
      <article className="review" style={{backgroundImage: `url(${item.image_169})`}}>
        <span className="reviewHeadings">
          <h2 className="headline">{item.headline}</h2>
          <h3 className="subhead">{item.subhead}</h3>
        </span>
        <h4 className="reviewDate">{item.date}</h4>
      </article>
    </Link>
  );
  return (
    <>
      {reviewItems}
    </>
  );
}

export default ArticleLinks;
