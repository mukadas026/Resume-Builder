import React, { useState } from "react";

const Languages = (props) => {
    const [language, setLanguage] = useState("")

	const addLanguage = (e) => {
		e.preventDefault()
		props.addLanguage("languages", language)
		setLanguage("")
	}

	const languages = props.languages.length > 0 ? props.languages.map((language) => <li>{language}</li>) : ""

	return (
		<div>
			<input
				type='text'
				name='languages'
				placeholder='Add Language'
				value={language}
				onChange={(e) => setLanguage(e.target.value)}
			/>
			<button onClick={addLanguage}>Add Language</button>

			<div>{languages}</div>
		</div>
	)
};

export default Languages;
