import React, { useEffect, useRef, useState } from "react"
import { SwitchTransition, CSSTransition } from "react-transition-group"
import Personal from "./Personal"
import Skills from "./Skills"
import Projects from "./Projects"
import Experience from "./Experience"
import Education from "./Education"
import Interests from "./Interests"
import Languages from "./Languages"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

const Form = (props) => {

	const formData = localStorage.getItem('formData') ? JSON.parse(localStorage.getItem('formData')) : 0

	const [index, setIndex] = useState(0)
	const [prevIndex, setPrevIndex] = useState(-1)
	const [values, setValues] = useState(formData || {
		name: "",
		title: "",
		about: "",
		tel: "",
		city: "",
		email: "",
		portfolio: "",
		linkedin: "",
		skills: [],
		projects: [],
		experience: [],
		certifications: [],
		education: [],
		interests: [],
		languages: [],
	})

	useEffect(() => {
		localStorage.setItem('formData', JSON.stringify(values))
	}, [values])

	const nodeRef = useRef(null)

	const diff = prevIndex - index
	const goForward = (e) => {
		e.preventDefault()
		setIndex((prev) => {
			setPrevIndex(prev)
			return prev + 1
		})
	}
	const goBack = (e) => {
		e.preventDefault()
		setIndex((prev) => {
			setPrevIndex(prev)
			return prev - 1
		})
	}

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
	const handleRemove = (name, index) => {
		setValues((prevValues) => {
			let update = prevValues[name].filter((item, i) => i !== index)
			return { ...prevValues, [name]: update }
		})
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		props.setFormData(values)
		props.setPreview(true)
	}

	// const changeItem = (e, val) => {
	// 	e.preventDefault()
	// 	val === "next" ? setIndex(index + 1) : setIndex(index - 1)
	// }

	const formItems = [
		<div
			className='form-item contact'
			ref={nodeRef}
		>
			<Personal
				handleAdd={handleAdd}
				values={values}
			/>
		</div>,
		<div
			className='form-item skills-item'
			ref={nodeRef}
		>
			<Skills
				// value={values.skills}
				addSkill={handleAdd}
				removeSkill={handleRemove}
				skills={values.skills}
			/>
		</div>,
		<div
			className='form-item projects-item'
			ref={nodeRef}
		>
			<Projects
				addProject={handleAdd}
				projects={values.projects}
				removeProject={handleRemove}
			/>
		</div>,
		<div
			className='form-item exp-item'
			ref={nodeRef}
		>
			<Experience
				addExperience={handleAdd}
				removeExperience={handleRemove}
				experiences={values.experience}
			/>
		</div>,
		<div
			className='form-item edu-item'
			ref={nodeRef}
		>
			<Education
				addEducation={handleAdd}
				removeEducation={handleRemove}
				education={values.education}
			/>
		</div>,
		<div
			className='form-item interests-item'
			ref={nodeRef}
		>
			<Interests
				addInterest={handleAdd}
				removeInterest={handleRemove}
				interests={values.interests}
			/>
		</div>,
		<div
			className='form-item lang-item'
			ref={nodeRef}
		>
			<Languages
				addLanguage={handleAdd}
				removeLanguage={handleRemove}
				languages={values.languages}
			/>
		</div>,
	]
	const headers = ["Personal Details", "Skills", "Projects", "Experience", "Education", "Interests", "Languages"]

	return (
		<div className='form-cont'>
			<form
				className='form'
				// onSubmit={handleSubmit}
			>
				<SwitchTransition mode='out-in'>
					<CSSTransition
						nodeRef={nodeRef}
						// in={inProp}
						key={index}
						timeout={300}
						classNames={diff <= 0 ? "trans" : "reverse"}
						mountOnEnter={true}
						unmountOnExit={true}
					>
						<>
							<h2
								className='item-heading'
								nodeRef={nodeRef}
							>
								{headers[index]}
							</h2>

							<div className='form-items'>{formItems[index]}</div>
						</>
					</CSSTransition>
				</SwitchTransition>
				<div className='change-btns'>
					<button
						// onClick={(e) => changeItem(e, "prev")}
						onClick={goBack}
						className='change-item disabled'
						disabled={index === 0}
					>
						<FaArrowLeft />
					</button>
					<button
						// onClick={(e) => changeItem(e, "next")}
						onClick={goForward}
						className='change-item disabled'
						disabled={index === formItems.length - 1}
					>
						<FaArrowRight />
					</button>
				</div>

				<div>
					<button
						type='submit'
						className='disabled'
						disabled={index < formItems.length - 1}
						onClick={handleSubmit}
					>
						Preview
					</button>
				</div>
			</form>
		</div>
	)
}

export default Form
