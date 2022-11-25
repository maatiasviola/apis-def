import React from 'react'
import './styles.css'
import {AiOutlinePlusCircle} from 'react-icons/ai'

function CreateButton() {
  return (
    <button type="button" className="button">
		<span className="button__text">Create</span>
		<span className="button__icon">
			<AiOutlinePlusCircle/>
		</span>
	</button>
  )
}

export default CreateButton