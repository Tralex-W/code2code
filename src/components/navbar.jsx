import React from "react";

export default function navbar() {
	return (
		<header className="nav__header">
			<a class="logo" href="/">
				Code2Code
			</a>
			<nav>
				<ul class="nav__links">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#gotoabout">Über uns</a>
					</li>
					<li>
						<a href="#gotologo">Logos</a>
					</li>
				</ul>
			</nav>
			<a class="cta" href="mailto:eric.wramling@gmail.com?subject=Deine Webseite ist ja voll der Banger!&body=Halli Hallo lieber Eric, %0D%0A was geht bei dir, du kranke Legende">
				Kontact
			</a>
		</header>
	);
}
