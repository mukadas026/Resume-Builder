import React, { useState } from "react"

const Experiences = (props) => {
	// const [experiences, setexperiences] = useState([])
	const [experience, setExperience] = useState({
		org: "",
		start: "",
		end: "",
		role: "",
		details: "",
	})

	const handleChange = (e) => {
		let value = e.target.value
		let name = e.target.name
		setExperience((prevExperience) => ({ ...prevExperience, [name]: value }))
	}

	const handleAdd = (e) => {
		e.preventDefault()
		props.addExperience("experience", experience)
		setExperience({
			org: "",
			start: "",
			end: "",
			role: "",
			details: "",
            location: '',
		})
	}

	const experiencesList =
		props.experiences.length > 0
			? props.experiences.map((proj) => {
					return (
						<div className='experience'>
							<h2>{proj.org}, {proj.location}</h2>
							<p>
								From <em>{proj.start}</em> to <em>{proj.end}</em>
							</p>
							<p>{proj.role}</p>
							<p>{proj.details}</p>
						</div>
					)
			  })
			: ""

	return (
		<div>
			<input
				type='text'
				placeholder='Organization Name'
				name='org'
				value={experience.org}
				onChange={handleChange}
			/>
			<input
				type='text'
				placeholder='Role'
				name='role'
				value={experience.role}
				onChange={handleChange}
			/>
            <input
				type='text'
				placeholder='Location'
				name='location'
				value={experience.location}
				onChange={handleChange}
			/>
			<input
				type='text'
				placeholder='Start Date'
				name='start'
				value={experience.start}
				onChange={handleChange}
			/>
			<input
				type='text'
				placeholder='End Date'
				name='end'
				value={experience.end}
				onChange={handleChange}
			/>
			<textarea
				value={experience.details}
				name='details'
				placeholder='Add more details'
				onChange={handleChange}
			></textarea>
			<div>
				<button onClick={handleAdd}>Add Experience</button>
			</div>
			<div className='experiences'>{experiencesList}</div>
		</div>
	)
}

export default Experiences
