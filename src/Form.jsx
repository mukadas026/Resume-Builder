import React, { useState } from "react"
import Skills from "./Skills"
import Projects from "./Projects"
import Experience from "./Experience"
import Education from "./Education"
import Interests from "./Interests"
import Languages from "./Languages"
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'

import img from './Assets/resume1.jpg'

const Form = (props) => {
	const [index, setIndex] = useState(2)
	const [values, setValues] = useState({
		name: "",
		title: "",
		about: "",
		tel: "",
		city: "",
		email: "",
		portfolio: "",
		linkedin: "",
		skills: [],
		projects: [{name: 'Markdown Editor', description: 'Complex problem-solver with analytical and driven mindset. Dedicated to achieving demanding development objectives according to tight schedules while producing impeccable code.'}],
		experience: [],
		certifications: [],
		education: [],
		interests: [],
		languages: [],
	})

	const handleAdd = (name, value) => {
		let except = ["projects", "skills", "experience", "education", "interests", "languages"]
		if (except.includes(name)) {
			setValues((prevValues) => {
				return { ...prevValues, [name]: [...prevValues[name], value] }
			})
			return
		}
		setValues((prevValues) => ({ ...prevValues, [name]: value }))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		props.setFormData(values)
		props.setPreview(true)
	}

	const changeItem = (e, val) => {
		e.preventDefault()
		val === "next" ? setIndex(index + 1) : setIndex(index - 1)
	}

	const formItems = [
		<div className='form-item contact'>
			
			<input
				type='text'
				placeholder='Full Name'
				name='name'
				value={values.name}
				onChange={(e) => handleAdd(e.target.name, e.target.value)}
			/>
			<input
				type='text'
				placeholder='Title'
				name='title'
				value={values.title}
				onChange={(e) => handleAdd(e.target.name, e.target.value)}
			/>
			<textarea
				placeholder='Professional Summary'
				name='about'
				value={values.about}
				onChange={(e) => handleAdd(e.target.name, e.target.value)}
			></textarea>
			<input
				type='text'
				placeholder='Telephone'
				name='tel'
				value={values.tel}
				onChange={(e) => handleAdd(e.target.name, e.target.value)}
			/>
			<input
				type='text'
				placeholder='City, eg. Accra, Ghana'
				name='city'
				value={values.city}
				onChange={(e) => handleAdd(e.target.name, e.target.value)}
			/>
			<input
				type='text'
				placeholder='Email'
				name='email'
				value={values.email}
				onChange={(e) => handleAdd(e.target.name, e.target.value)}
			/>
			<input
				type='text'
				placeholder='Portfolio'
				name='portfolio'
				value={values.portfolio}
				onChange={(e) => handleAdd(e.target.name, e.target.value)}
			/>
			<input
				type='text'
				placeholder='LinkedIn'
				name='linkedin'
				value={values.linkedin}
				onChange={(e) => handleAdd(e.target.name, e.target.value)}
			/>
		</div>,
		<div className='form-item skills-item'>
			<Skills
				// value={values.skills}
				addSkill={handleAdd}
				skills={values.skills}
			/>
		</div>,
		<div className='form-item projects-item'>
			<Projects
				addProject={handleAdd}
				projects={values.projects}
			/>
		</div>,
		<div className='form-item exp-item'>
			<Experience
				addExperience={handleAdd}
				experiences={values.experience}
			/>
		</div>,
		<div className='form-item edu-item'>
			<Education
				addEducation={handleAdd}
				education={values.education}
			/>
		</div>,
		<div className='form-item interests-item'>
			<Interests
				addInterest={handleAdd}
				interests={values.interests}
			/>
		</div>,
		<div className='form-item lang-item'>

			<Languages
				addLanguage={handleAdd}
				languages={values.languages}
			/>
		</div>,
	]
	const headers = ['Personal Details', 'Skills','Projects','Experience','Education','Interests','Languages']
	
	return (
		<div className="form-cont">
		<form
			className='form'
			onSubmit={handleSubmit}
		>
			<h2 className="item-heading">{headers[index]}</h2>

			<div className='form-items'>{formItems[index]}</div>
			<div className='change-btns'>
				<button
					onClick={(e) => changeItem(e, "prev")}
					className='change-item disabled'
					disabled={index === 0}
				>
					<FaArrowLeft />
				</button>
				<button
					onClick={(e) => changeItem(e, "next")}
					className='change-item disabled'
					disabled={index === formItems.length - 1}
				>
					<FaArrowRight />
				</button>
			</div>
			
				<div>
					<button type='submit' className='disabled' disabled={index < formItems.length - 1}>Preview</button>
				</div>
			
		</form>
		</div>
	)
}

export default Form
