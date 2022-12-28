import React, { useState } from "react"
import { MdAddCircle } from "react-icons/md"

const Experiences = (props) => {
	// const [experiences, setexperiences] = useState([])
	const [hover, setHover] = useState(false)
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
						<div
							className='experience'
							
							onMouseEnter={() => setHover([true, index])}
							// onMouseOut={() => setHover([false, null])}
						>
							<h2>
								{proj.org} - {proj.role} | {proj.location}
							</h2>
							{/* <div className='experience-details'>
								<p>
									<em>{proj.startStr}</em> - <em>{proj.endStr}</em>
								</p>
								<p>{proj.details}</p>
							</div> */}
						</div>
					)
			  })
			: ""

	const onHover = hover[0] ? (
		<div
			className='experience experience-hover'
			onMouseLeave={() => setHover([false, null])}
		>
			<h2>
				{props.experiences[hover[1]].org} - {props.experiences[hover[1]].role} |{" "}
				{props.experiences[hover[1]].location}
			</h2>
			<div className=''>
				<p>
					<em>{props.experiences[hover[1]].startStr}</em> - <em>{props.experiences[hover[1]].endStr}</em>
				</p>
				<p>{props.experiences[hover[1]].details}</p>
			</div>
		</div>
	) : (
		""
	)

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
			<div className="relative-pos" onMouseLeave={() => setHover([false, null])}>
				{onHover}
				<div className='experiences'>{experiencesList}</div>
			</div>
		</div>
	)
}

export default Experiences
