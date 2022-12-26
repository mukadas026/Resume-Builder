import React, { useState } from "react"

const Interests = (props) => {
	const [interest, setInterest] = useState("")

	const addInterest = (e) => {
		e.preventDefault()
		props.addInterest("interests", interest)
		setInterest("")
	}

	const interests = props.interests.length > 0 ? props.interests.map((interest) => <li>{interest}</li>) : ""

	return (
		<div>
			<input
				type='text'
				name='interest'
				placeholder='Add Interest'
				value={interest}
				onChange={(e) => setInterest(e.target.value)}
			/>
			<button onClick={addInterest}>Add Interest</button>

			<div>{interests}</div>
		</div>
	)
}

export default Interests
