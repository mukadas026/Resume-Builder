import React, { useEffect, useState } from "react"
import { Transition } from "react-transition-group"



const Personal = (props) => {
	return (
		<div>
			<input
				type='text'
				placeholder='Full Name'
				name='name'
				value={props.values.name}
				onChange={(e) => props.handleAdd(e.target.name, e.target.value)}
			/>
			<input
				type='text'
				placeholder='Title'
				name='title'
				value={props.values.title}
				onChange={(e) => props.handleAdd(e.target.name, e.target.value)}
			/>
			<textarea
				placeholder='Professional Summary'
				name='about'
				value={props.values.about}
				onChange={(e) => props.handleAdd(e.target.name, e.target.value)}
			></textarea>
			<input
				type='text'
				placeholder='Telephone'
				name='tel'
				value={props.values.tel}
				onChange={(e) => props.handleAdd(e.target.name, e.target.value)}
			/>
			<input
				type='text'
				placeholder='City, eg. Accra, Ghana'
				name='city'
				value={props.values.city}
				onChange={(e) => props.handleAdd(e.target.name, e.target.value)}
			/>
			<input
				type='text'
				placeholder='Email'
				name='email'
				value={props.values.email}
				onChange={(e) => props.handleAdd(e.target.name, e.target.value)}
			/>
			<input
				type='text'
				placeholder='Portfolio'
				name='portfolio'
				value={props.values.portfolio}
				onChange={(e) => props.handleAdd(e.target.name, e.target.value)}
			/>
			<input
				type='text'
				placeholder='LinkedIn'
				name='linkedin'
				value={props.values.linkedin}
				onChange={(e) => props.handleAdd(e.target.name, e.target.value)}
			/>
		</div>
	)
}

export default Personal
