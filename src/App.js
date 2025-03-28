import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet consectetur asperiores perferendis provident molestiae vel maxime, assumenda excepturi dolor ad illum. Ad labore suscipit quam soluta.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet consectetur asperiores perferendis provident molestiae vel maxime, assumenda excepturi dolor ad illum. Ad labore suscipit quam soluta.",
  },
  {
    title: "Do you ship to countries oustide the EU?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet consectetur asperiores perferendis provident molestiae vel maxime, assumenda excepturi dolor ad illum. Ad labore suscipit quam soluta.",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currOpen, setCurrOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem
          index={index + 1}
          title={item.title}
          key={index}
          currOpen={currOpen}
          onOpen={setCurrOpen}
        >
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ index, title, currOpen, onOpen, children }) {
  const isOpen = currOpen === index;
  function handleIsOpen() {
    onOpen(isOpen ? null : index);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleIsOpen}>
      <p className="number">{index < 10 ? `0${index}` : index}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen ? <div className="content-box">{children}</div> : ""}
    </div>
  );
}
