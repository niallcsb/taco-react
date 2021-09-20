import {navArray, numbers} from "../data/data.js";
import {Link} from "react-router-dom";

const headListItems = navArray.map((item, i) =>
  <li className={item.className} key={"headList"+numbers[i]}>
    <Link className={item.className+"Link"} to={item.link}>
      {item.title}
    </Link>
  </li>
);

function HeadNav() {
  return (
    <nav className="headNav">
      <ul className="headNavList">
        {headListItems}
      </ul>
    </nav>
  );
}

const footListItems = navArray.map((item, i) => {
  return item.subLinks.length !== 0
  ?
    <ul className="footList" key={"footList"+numbers[i]}>
      <li className="footListItem">
        <Link className="listTitle" to={item.link}>{item.title}</Link>
      </li>
      {item.subLinks.map((item, i) => {
        return Object.prototype.hasOwnProperty.call(item, "title")
        ?
          <li className="footListItem" key={"footListItem"+numbers[i]}>
            <h4 className="subLinkTitle">{item.title}</h4>
          </li>
        :
          <li className="footListItem" key={"footListItem"+numbers[i]}>
            <a className="subLink" href={item.link}>{item.name}</a>
          </li>
      })}
    </ul>
  :
    <ul className="footList" key={"footList"+numbers[i]}>
      <li className="footListItem">
        <Link className="listTitle" to={item.link}>{item.title}</Link>
      </li>
    </ul>
});

function FootNav() {
  return (
    <nav className="footNav">
      {footListItems}
    </nav>
  );
}

export {HeadNav, FootNav};
