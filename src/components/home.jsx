import React from "react";
import ReactTypingEffect from "react-typing-effect";

export default function home() {
	return (
		<div class="home">
			<ReactTypingEffect className="home__p" text={[".Code2Code()", "Java.Code2Code(Rust)", "Python.Code2Code(Rust)", "Java.Code2Code(C)","Python.Code2Code(C)", "Java.Code2Code(Python)",  "Python.Code2Code(Java)"]} />			
		</div>
	);
}
