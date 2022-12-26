import React from "react"
import { IoLocation, IoMail, IoGlobeOutline, IoLogoLinkedin } from "react-icons/io5"
import { BsTelephoneFill, BsGithub, BsTwitter, BsFillCalendarDateFill } from "react-icons/bs"
import html2pdf from "html2pdf.js"
import jsPDF from "jspdf"

const Preview = (props) => {
	let values = props.formData

	const handleDownload = (e) => {
		try {
			e.preventDefault()
			const el = document.querySelector(".container")
			const opt = {
				margin: 1,
				filename: "resume",
				enableLinks: true,
				pagebreak: {
					mode: "avoid-all",
				},
				image: {
					type: "jpeg",
					quality: 1,
				},
				html2canvas: {
					// foreignObjectRendering: true,
					scale: 4,
					width: 800,
					// height: 900,
				},
			}
			html2pdf().set(opt).from(el).save()
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className='preview'>
			<div className='container theme'>
				<div className='name'>
					<h2>{values.name}</h2>
					<p>{values.title}</p>
				</div>

				<div className='contact'>
					<p>
						<IoLocation className='contact-icon' /> {values.city}
					</p>
					<p>
						<IoMail className='contact-icon' /> {values.email}
					</p>
					<p>
						<BsTelephoneFill className='contact-icon' /> {values.tel}
					</p>
					<p>
						<IoGlobeOutline className='contact-icon' /> {values.portfolio}
					</p>
					<p>
						<IoLogoLinkedin className='contact-icon' /> <a href='#'>{values.linkedin}</a>
					</p>
				</div>
				<div className='about'>
					<fieldset>
						<legend>{"Professional Summary".toUpperCase()}</legend>
						<p>{values.about}</p>
					</fieldset>
				</div>
				<fieldset>
					<legend>SKILLS</legend>
					<div className='skills'>
						{values.skills.length > 0 && values.skills.map((skill) => <li>{skill}</li>)}
					</div>
				</fieldset>
				<div className='projects'>
					<fieldset>
						<legend>PROJECTS</legend>
						{values.projects.length > 0 &&
							values.projects.map((proj) => {
								return (
									<div className='project'>
										<h2>{proj.name}</h2>
										<p>{proj.duration}</p>
										<p className='det'>{proj.description}</p>
									</div>
								)
							})}
					</fieldset>
				</div>
				<div className='experiences'>
					<fieldset>
						<legend>EXPERIENCE</legend>
						{values.experience.length > 0 &&
							values.experience.map((item) => (
								<div className='experience'>
									<p>
										<b>{item.org}</b> <em>{item.location}</em>
									</p>
									<p>
										<strong>{item.role}</strong>
									</p>
									<p>
										From <em>{item.start}</em> to <em>{item.end}</em>
									</p>
									<p className='det'>{item.details}</p>
								</div>
							))}
					</fieldset>
				</div>
				<div className='educations'>
					<fieldset>
						<legend>EDUCATION</legend>
						{values.education.length > 0 &&
							values.education.map((item) => (
								<div className='education'>
									<p>
										<b>{item.institution}</b> - <b>{item.program}</b>
									</p>
									<p>
										{item.location} - <em>{item.graduation}</em>
									</p>
								</div>
							))}
					</fieldset>
				</div>
				<fieldset>
					<legend>INTERESTS</legend>
					<div className='skills'>
						{values.interests.length > 0 && values.interests.map((skill) => <li>{skill}</li>)}
					</div>
				</fieldset>
				<fieldset>
					<legend>LANGUAGES</legend>
					<div className='skills'>
						{values.languages.length > 0 && values.languages.map((skill) => <li>{skill}</li>)}
					</div>
				</fieldset>
			</div>
			<div>
				<button onClick={handleDownload}>download</button>
			</div>
		</div>
	)
}

export default Preview
