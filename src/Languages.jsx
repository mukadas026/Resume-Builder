import React, { useState } from "react"
import { AiFillCloseCircle } from "react-icons/ai"
import {MdAddCircle} from 'react-icons/md'

const Languages = (props) => {
	const [language, setLanguage] = useState("")

	const addLanguage = (e) => {
		e.preventDefault()
		props.addLanguage("languages", language)
		setLanguage("")
	}

	const languages =
		props.languages.length > 0
			? props.languages.map((language, index) => (
					<p
						key={index}
						onClick={() => props.removeLanguage("languages", index)}
						className='language'
					>
						{language} <AiFillCloseCircle className='close' />
					</p>
			  ))
			: ""

	return (
		<div>
			<input
				type='text'
				name='languages'
				placeholder='Add Language'
				value={language}
				onChange={(e) => setLanguage(e.target.value)}
			/>
			<button onClick={addLanguage}><MdAddCircle className='add'/></button>

			<div className='languages'>{languages}</div>
		</div>
	)
}

export default Languages
