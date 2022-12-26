import React, { useState } from "react"

const Skills = (props) => {
	// const [skillsList, setSkills] = useState([])
	const [skill, setSkill] = useState("")

	let skills = props.skills.length > 0 ? props.skills.map((skil) => <span>{skil}</span>) : ""

	const addSkill = (e) => {
        e.preventDefault()
		props.addSkill("skills", skill)
		setSkill("")
	}
	const handleChange = (e) => {
		setSkill(e.target.value)
	}
	return (
		<div className='skills'>
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
				Add Skill
			</button>
			<div className='skills-list'>{skills}</div>
		</div>
	)
}

export default Skills
