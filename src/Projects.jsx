import React, { useState } from "react"

const Projects = (props) => {
	// const [projects, setProjects] = useState([])
	const [project, setProject] = useState({
		name: "",
		start: "",
		end: "",
		description: "",
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
			return setProject((prevProject) => ({ ...prevProject, [name]: value, [nameStr]: str }))
		}

		setProject((prevProject) => ({ ...prevProject, [name]: value }))
	}

	const handleAdd = (e) => {
		e.preventDefault()

		props.addProject("projects", project)
		setProject({
			name: "",
			start: "",
			end: "",
			description: "",
			startStr: '',
			endStr: '',
		})
	}

	const projectsList =
		props.projects.length > 0
			? props.projects.map((proj) => {
					return (
						<div className='project'>
							<h2>{proj.name}</h2>
							<div className="project-details">
							<p>
								{proj.startStr} - {proj.endStr}
							</p>
							<p>{proj.description}</p>
						</div></div>
					)
			  })
			: ""

	return (
		<div>
			<input
				type='text'
				placeholder='Project Name'
				name='name'
				value={project.name}
				onChange={handleChange}
			/>
			<div className='duration'>
				<label>
					Start
					<input
						type='date'
						placeholder='Start'
						name='start'
						value={project.start}
						onChange={handleChange}
					/>
				</label>
				<label>
					End
					<input
						type='date'
						placeholder='End'
						name='end'
						value={project.end}
						onChange={handleChange}
					/>
				</label>
			</div>
			<textarea
				value={project.description}
				name='description'
				placeholder='Project Description'
				onChange={handleChange}
			></textarea>
			<div>
				<button onClick={handleAdd}>Add Project</button>
			</div>
			<div className='projects'>{projectsList}</div>
		</div>
	)
}

export default Projects
