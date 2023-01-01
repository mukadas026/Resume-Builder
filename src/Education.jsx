import React, { useState } from "react"

import { MdAddCircle } from "react-icons/md"
import { IoTrashSharp } from "react-icons/io5"

const Education = (props) => {
	const [education, setEducation] = useState({
		institution: "",
		location: "",
		degree: "",
		program: "",
		gradDate: "",
		gradDateStr: "",
	})

	const handleChange = (e) => {
		let value = e.target.value
		let name = e.target.name

		if (name === "gradDate") {
			let date = new Date(value)
			let str = `${date.getMonth() + 1}/${date.getFullYear()}`
			let nameStr = `${name}Str`
			return setEducation((prev) => ({ ...prev, [name]: value, [nameStr]: str }))
		}

		return setEducation((prevEducation) => ({ ...prevEducation, [name]: value }))
	}

	const addEducation = (e) => {
		e.preventDefault()
		props.addEducation("education", education)
		setEducation({
			institution: "",
			location: "",
			degree: "",
			program: "",
			gradDate: "",
			gradDateStr: "",
		})
	}

	const educationList =
		props.education.length > 0
			? props.education.map((item, index) => {
					return (
						<div className='education'>
							<p>
								<b>{item.institution}</b> - {item.location} <em>{item.gradDateStr}</em>{" "}
								<span
									className='close-container'
									onClick={() => props.removeEducation("education", index)}
								>
									<IoTrashSharp className='close' />
								</span>
							</p>
							<p>
								<b>
									{item.degree} - {item.program}
								</b>
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
				<div className='program'>
					<input
						type='text'
						name='degree'
						placeholder='Degree'
						value={education.degree}
						onChange={handleChange}
					/>
					<input
						type='text'
						name='program'
						placeholder='Program'
						value={education.program}
						onChange={handleChange}
					/>
				</div>
				<label className='grad-date'>
					Graduation
					<input
						type='date'
						name='gradDate'
						value={education.gradDate}
						onChange={handleChange}
					/>
				</label>
				<button onClick={addEducation}><MdAddCircle className='add'/></button>
			</div>
			<div>{educationList}</div>
		</div>
	)
}

export default Education
