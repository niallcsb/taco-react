import {bioArray, numbers} from "../data/data";

const socialSections = bioArray.map((item, i) =>
  <section className="bioSection" key={"socialSection"+numbers[i]}>
    <h1 className="bioTitle">
      {item.firstName} {item.surName}
    </h1>
    <img className="bioImg" src={item.image} width="100%" height="100%" alt="" />
    <p className="bioBody">{item.body}</p>
    <span className="linkSpan">
      {item.links.map((item, i) =>
        <a className="bioLink" href={item.link} key={"bioLink"+numbers[i]}>
          <img className="socialIcon" src={item.icon} width="32" height="32" alt="" />
        </a>
      )}
    </span>
  </section>
);

function SocialBios() {
  return (
    <article className="socialArticle">
      {socialSections}
    </article>
  );
}

export default SocialBios;
