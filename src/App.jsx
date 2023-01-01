import React, { useState } from "react"
import Form from "./Form"
import Preview from "./Preview"

import "./App.css"

const App = () => {
	const [preview, setPreview] = useState(false)
	const [formData, setFormData] = useState({
		name: "",
		title: "",
		about: "",
		tel: "",
		city: "",
		email: "",
		portfolio: "",
		linkedin: "",
		skills: [],
		
		experience: [],
		education: [],
		interests: [],
		languages: [],
		
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
