import React, { useState } from "react"
import { AiFillCloseCircle } from "react-icons/ai"
import {MdAddCircle} from 'react-icons/md'

const Interests = (props) => {
	const [interest, setInterest] = useState("")

	const addInterest = (e) => {
		e.preventDefault()
		props.addInterest("interests", interest)
		setInterest("")
	}

	const interests =
		props.interests.length > 0
			? props.interests.map((interest, index) => (
					<p
						key={index}
						id={index}
						onClick={() => props.removeInterest("interests", index)}
						className='interest'
					>
						{interest} <AiFillCloseCircle className='close' />
					</p>
			  ))
			: ""

	return (
		<div>
			<input
				type='text'
				name='interest'
				placeholder='Add Interest'
				value={interest}
				onChange={(e) => setInterest(e.target.value)}
			/>
			<button onClick={addInterest}><MdAddCircle className='add'/></button>

			<div className='interests'>{interests}</div>
		</div>
	)
}

export default Interests
