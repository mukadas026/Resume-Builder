import React, { useState } from "react"

const Education = (props) => {
	const [education, setEducation] = useState({
		institution: "",
		location: "",
		program: "",
		graduation: "",
	})

	const handleChange = (e) => {
		let value = e.target.value
		let name = e.target.name

		return setEducation((prevEducation) => ({ ...prevEducation, [name]: value }))
	}

	const addEducation = (e) => {
		e.preventDefault()
		props.addEducation("education", education)
		setEducation({
			institution: "",
			location: "",
			program: "",
			graduation: "",
		})
	}

	const educationList =
		props.education.length > 0
			? props.education.map((item) => {
					return (
						<div>
							<p>
								<b>{item.institution}</b> {item.location} - <em>{item.graduation}</em>
							</p>
							<p>
								<b>{item.program}</b>
							</p>
						</div>
					)
			  })
			: ""

	return (
		<div>
			<div>
				<input
					type='text'
					name='institution'
					placeholder='Name of Institution'
					value={education.institution}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='location'
					placeholder='Location | eg. Accra, Ghana'
					value={education.location}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='program'
					placeholder='Program'
					value={education.program}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='graduation'
					placeholder='Graduation Date'
					value={education.graduation}
					onChange={handleChange}
				/>
				<button onClick={addEducation}>Add Education</button>
			</div>
			<div>{educationList}</div>
		</div>
	)
}

export default Education
