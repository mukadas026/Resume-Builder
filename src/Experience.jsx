import React, { useState } from "react"
import { MdAddCircle } from "react-icons/md"

import { IoTrashSharp } from "react-icons/io5"

const Experiences = (props) => {
	// const [experiences, setexperiences] = useState([])
	// const [hover, setHover] = useState(false)
	const [experience, setExperience] = useState({
		org: "",
		start: "",
		end: "",
		role: "",
		details: "",
		startStr: "",
		endStr: "",
	})

	const handleChange = (e) => {
		let value = e.target.value
		let name = e.target.name

		if (name === "start" || name === "end") {
			let date = new Date(value)
			let str = `${date.getMonth()}/${date.getFullYear()}`
			let nameStr = `${name}Str`
			return setExperience((prevExperience) => ({ ...prevExperience, [name]: value, [nameStr]: str }))
		}

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
			location: "",
			startStr: "",
			endStr: "",
		})
	}

	const experiencesList =
		props.experiences.length > 0
			? props.experiences.map((proj, index) => {
					return (
						<details className='experience'>
							<summary>
								<b>
									{proj.org} - {proj.role} | {proj.location}
								</b>{" "}
								<span
									onClick={() => props.removeExperience("experience", index)}
									className='close-container'
								>
									<IoTrashSharp className='close' />
								</span>
							</summary>
							<div className='experience-details'>
								<p>
									<em>{proj.startStr}</em> - <em>{proj.endStr}</em>
								</p>
								<p>{proj.details}</p>
							</div>
						</details>
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
				placeholder='Location | eg. Accra, Ghana'
				name='location'
				value={experience.location}
				onChange={handleChange}
			/>
			<div className='duration'>
				<label>
					Start
					<input
						type='date'
						name='start'
						value={experience.start}
						onChange={handleChange}
					/>
				</label>
				<label>
					End
					<input
						type='date'
						name='end'
						value={experience.end}
						onChange={handleChange}
					/>
				</label>
			</div>
			<textarea
				value={experience.details}
				name='details'
				placeholder='Add more details'
				onChange={handleChange}
			></textarea>
			<div>
				<button onClick={handleAdd}>
					<MdAddCircle className='add' />
				</button>
			</div>

			<div className='experiences'>{experiencesList}</div>
		</div>
	)
}

export default Experiences
