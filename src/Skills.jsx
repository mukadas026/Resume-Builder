import React, { useState } from "react"
import { AiFillCloseCircle } from "react-icons/ai"
import {MdAddCircle} from 'react-icons/md'

const Skills = (props) => {
	// const [skillsList, setSkills] = useState([])
	const [skill, setSkill] = useState("")


	let skills =
		props.skills.length > 0
			? props.skills.map((skil, index) => (
					<p
						key={index}
						id={index}
						className='skill'
						onClick={() => props.removeSkill("skills", index)}
					>
						{skil} <AiFillCloseCircle className='close' />
					</p>
			  ))
			: ""

	const addSkill = (e) => {
		e.preventDefault()
		props.addSkill("skills", skill)
		setSkill("")
	}
	const handleChange = (e) => {
		setSkill(e.target.value)
	}
	return (
		<div>
			<input
				type='text'
				placeholder='Skills'
				name='skills'
				value={skill}
				onChange={handleChange}
			/>
			<button
				className='add-skill'
				onClick={addSkill}
			>
				<MdAddCircle className='add'/>
			</button>
			<div className='skills'>{skills}</div>
		</div>
	)
}

export default Skills
