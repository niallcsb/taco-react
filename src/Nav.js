import {navArray} from "./data.js";

const headListItems = navArray.map((item) =>
  <li className={item.className} key={item.key}>
    <a className="{items.className}Link" href={item.link}>
      {item.title}
    </a>
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

const footListTitles = navArray.map((item) =>
  <section className="footNavSection" key={item.key}>
    <a className="listTitle" href={item.link}>{item.title}</a>
  </section>
);

console.log(footListTitles);

function FootNav() {
  return (
    <nav className="footNav">
      {footListTitles}
    </nav>
  );
}

export {HeadNav, FootNav};
