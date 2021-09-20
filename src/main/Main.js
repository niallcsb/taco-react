import {Routes, Route} from "react-router-dom";
import {Home, ArticleList, IndividualArticle, Store, Social, Random, Faq} from "../pages/pages";
import {articleArray, mainArray} from "../data/data.js";

function Main() {
  return (
      <Routes>
        <Route exact path="/" element={<Home array={mainArray}/>} />
        <Route exact path="/articles" element={<ArticleList array={articleArray}/>} />
        <Route exact path="/articles/:articleName" element={<IndividualArticle />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/social" element={<Social />} />
        <Route exact path="/random" element={<Random />} />
        <Route exact path="/faq" element={<Faq />} />
      </Routes>
  );
}

export default Main;
