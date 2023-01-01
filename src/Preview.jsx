import React from "react"
import { IoLocation, IoMail, IoGlobeOutline, IoLogoLinkedin } from "react-icons/io5"
import { BsTelephoneFill } from "react-icons/bs"
import html2pdf from "html2pdf.js"
// import jsPDF from "jspdf"

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
						<IoGlobeOutline className='contact-icon' /> <a href={values.portfolio}>{values.portfolio}</a>
					</p>
					<p>
						<IoLogoLinkedin className='contact-icon' /> <a href={values.linkedin}>{values.linkedin}</a>
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
				<div className='projs'>
					<fieldset>
						<legend>PROJECTS</legend>
						{values.projects.length > 0 &&
							values.projects.map((proj) => {
								return (
									<div className='proj'>
										<div>
											<h2>{proj.name}</h2>
											<p>
												{proj.start} - {proj.end}
											</p>
										</div>

										<p className='det'>{proj.description}</p>
									</div>
								)
							})}
					</fieldset>
				</div>
				<div className='exps'>
					<fieldset>
						<legend>EXPERIENCE</legend>
						{values.experience.length > 0 &&
							values.experience.map((item) => (
								<div className='exp'>
									<div>
										<p>
											<b>{item.org}</b> <em>{item.location}</em>
										</p>
										<p>
											<em>{item.startStr}</em> - <em>{item.endStr}</em>
										</p>
									</div>
									<p>
										<strong>{item.role}</strong>
									</p>

									<p className='det'>{item.details}</p>
								</div>
							))}
					</fieldset>
				</div>
				<div className='edus'>
					<fieldset>
						<legend>EDUCATION</legend>
						{values.education.length > 0 &&
							values.education.map((item) => (
								<div className='edu'>
									<div>
										<p>
											<b>{item.institution}</b> - {item.location}
										</p>
										<p>
											<em>{item.gradDate}</em>
										</p>
									</div>
									<p>
										<b>{item.program}</b>
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
			<div className="preview-btns">
				<button onClick={() => props.setPreview(false)}>Edit</button>
				<button onClick={handleDownload}>download</button>
			</div>
		</div>
	)
}

export default Preview
