import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {formSubmit, movieUpdate} from './action';
import validate from './validate';

const renderTextField = ({
  	input,
  	label,
  	type,
  	defaultValue,
  	meta: { touched, error },
  	...custom
}) => (
	<div style={{width: '100%'}}>
	  	<TextField
	  		fullWidth
	  		type={type}
	    	label={label}
	    	InputProps={{
		        style: {color: '#000000de'}
		    }}
	    	defaultValue={defaultValue}
	    	{...input}
	    	{...custom}
	  	/>
	  	<Typography style={{color: '#f44336'}}>{touched && error}</Typography>
  	</div>
)

const renderSelectField = ({
  	input,
  	label,
  	meta: { touched, error },
  	options,
  	...custom
}) => (
	<div style={{width: '100%'}}>
	  	<TextField
	  		fullWidth
	    	label={label}
	    	select
	    	InputProps={{
		        style: {color: '#000000de'}
		    }}
	    	{...input}
	    	{...custom}
	  	>
	  	{options.map((option)=> (
	  		<option key={option.label} value={option.label}>
	          {option.label}
	        </option>
	  	))}
	  	</TextField>
  	  	<Typography style={{color: '#f44336'}}>{touched && error}</Typography>
  	</div>
)

export const Form = connect(null, {onFormSubmit: formSubmit, onMovieUpdate: movieUpdate})(reduxForm({
	validate,
	form: 'movieForm'
})(({handleSubmit, onFormSubmit, onMovieUpdate, onToggleModal, view, edit}) => (
	<form onSubmit={
			handleSubmit((payload) => {
				onToggleModal(false)
				edit ? 
					onMovieUpdate(payload) :
					onFormSubmit(payload)
			})
		}
		style={{
			display: 'flex',
			flexDirection: 'column',
			height: '100%',
			justifyContent: 'space-between'
		}}
	>
		<Field disabled={view} name='title' label={'Title'} component={renderTextField} type='text' />
		<Field disabled={view} name='releaseDate' label={'Release Date'} InputLabelProps={{shrink: true}} component={renderTextField} type='date' />
		<Field disabled={view} name='genre' label={'Genre'} component={renderSelectField} options={[{label: 'Comedy'}, {label: 'Romantic Comedy'}]} type='text' />
		<Field disabled={view} name='price' label={'Price'} component={renderTextField} type='number' />
		<Field disabled={view} name='rating' label={'rating'} component={renderSelectField} type='text' options={[{label: 'PG'}, {label: 'R'}]} />
		{view ? null :
			<Button 
	        	variant='outlined'
	        	color='primary'
	        	style={{margin: '2%'}}
	        	type='submit'
	        >
                submit
            </Button>
		}
	</form>
)));