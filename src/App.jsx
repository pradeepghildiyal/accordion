import "./styles.css";

import { useState } from "react";

const faqs = [
	{
		title: "Where are these chairs assembled?",
		text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
	},
	{
		title: "How long do I have to return my chair?",
		text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
	},
	{
		title: "Do you ship to countries outside the EU?",
		text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
	},
];

export default function App() {
	// const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<Accordion data={faqs} />
		</div>
	);
}

function Accordion({ data }) {
	const [currentOpen, setCurrentOpen] = useState(null);
	return (
		<div className="accordion">
			{data.map((el, i) => (
				<AccordionItem
					currentOpen={currentOpen}
					onOpen={setCurrentOpen}
					key={el.title}
					title={el.title}
					text={el.text}
					num={i + 1}
				>
					{el.text}
				</AccordionItem>
			))}
		</div>
	);
}

function AccordionItem({ num, title, currentOpen, onOpen, children }) {
	const isOpen = num === currentOpen;

	function handleToggle() {
		onOpen(isOpen ? null : num);
	}
	return (
		<div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
			<p className="number">{num < 9 ? `0${num}` : num}</p>
			<p className="title">{title}</p>
			<p className="icon">{isOpen ? "-" : "+"}</p>
			{isOpen && <div className="content-box">{children}</div>}
		</div>
	);
}
