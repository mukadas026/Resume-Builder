import React, { useState } from "react"
import Form from "./Form"
import Preview from "./Preview"

import "./App.css"

const App = () => {
	const [preview, setPreview] = useState(false)
	const [formData, setFormData] = useState({
		name: "Abubakari Mohammed mukadas",
		title: "FrontEnd Developer",
		about: "Complex problem-solver with analytical and driven mindset. Dedicated to achieving demanding development objectives according to tight schedules while producing impeccable code.",
		tel: "23909338",
		city: "Accra, Ghana",
		email: "mukads@gmail",
		portfolio: "www.mukadasm@.com",
		linkedin: "mukadasm",
		skills: ["html", "css", "js",],
		projects: [
			{
				name: "Mardown Editor",
				duration: "1 day",
				description: "Built a markdown editor using react js and css and made it look as beautiful as possible",
			},
		],
		experience: [
			{
				org: "IPMC Ghana - Tamale",
				start: "October, 2022",
				end: "November, 2022",
				role: "Intern",
                location: 'Tamale, Ghana',
				details: `Tutored struggling students individually and in small groups to reinforce concepts in Java and Python.
        Guided new students through the basics of touch typing.
        Offered complete instructional support for students unable to attend regular classes in both Java and Python`,
			},
		],
		education: [
			{
				institution: "University of Ghana",
				location: "Accra, Ghana",
				graduation: "September 2024",
				program: "BSc Computer Science",
			},
		],
		interests: ['biking', 'movies', 'anime', 'cosplay', 'youtube'],
        languages: ['english', 'javascript', 'japanese']
	})

	return (
		<div>
			{preview ? (
				<Preview
					setPreview={setPreview}
					formData={formData}
				/>
			) : (
				<Form
					setPreview={setPreview}
					setFormData={setFormData}
				/>
			)}
		</div>
	)
}

export default App
