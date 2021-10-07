import React from "react";
import Video from "../assets/vidcode2code.mp4";

export default function about() {
	return (
		<div className="about">
			<p id="gotoabout"></p>

			<div className="about__container">
				<h1 className="about__container_header"> Über uns </h1>
				<p className="about__container__text">
					Code2Code ist der weltweit erste KI-gestützte Übersetzer, der Programmiersprachen in eine andere Programmiersprache oder eine echte Sprache
					in eine Programmiersprache übersetzt. Es ist ein universeller Übersetzer für Code. Unabhängig davon, ob man in Java, Objective-C, R oder
					Python programmiert, Code 2 Code übersetzt und behält die Lesbarkeit sowie die Verständlichkeit des Codes bei. Das ist ein Game Changer in
					der Technologiebranche, indem er den Wechsel zwischen Technologien erleichtert. Mit diesem erstaunlichen Tool können Entwickler einfach
					zwischen verschiedenen Programmiersprachen wechseln und Projekte schneller erledigen. Außerdem kann man auf diese Weise andere
					Programmiersprachen leicht erlernen. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates impedit in et eligendi eum optio
					sequi suscipit libero aliquam dicta illum quo sed dignissimos commodi, dolorum earum totam error esse reiciendis autem placeat quae!
					Mollitia debitis aspernatur eos quo quia nihil veritatis ab amet harum quas. Animi eum alias provident consequuntur sit accusantium, cum
					neque velit nemo similique! Ducimus explicabo, error atque doloremque velit quam aspernatur veritatis recusandae nisi culpa adipisci iure
					illum corporis neque rerum eius quis nostrum animi nihil enim. Ea nostrum repellat amet ullam ratione eius reprehenderit numquam sint
					voluptas, molestiae cum! Cupiditate esse harum quia. Commodi!
				</p>
			</div>

			<div className="about__video">
				<video loop autoPlay muted width="1000" height="400">
					<source src={Video} type="video/mp4" />
				</video>
			
			</div>
		</div>
	);
}
