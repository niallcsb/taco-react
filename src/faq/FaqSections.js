import {faqArray, numbers} from "../data/data";

const faqs = faqArray.map((item, i) =>
  <details className="faqDetails" key={"faqDetails"+numbers[i]}>
    <summary className="faqSummary">{item.question}</summary>
    {item.answer.map((item, i) =>
      <p className="faqPara" key={"faqPara"+numbers[i]}>{item}</p>
    )}
  </details>
);

function FaqSections() {
  return (
    <article className="faqArticle">
      <h1 className="faqHeading">Frequently Asked Questions</h1>
      {faqs}
    </article>
  );
}

export default FaqSections;
