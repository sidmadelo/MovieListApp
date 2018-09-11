import React from 'react';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';

import {Form} from './component'

export default ({isModalOpen, onToggleModal, movie, onViewMovie}) => (
	<Modal
		style={{
			display: 'flex',
		    flexDirection: 'column',
		    justifyContent: 'center',
		    alignItems: 'center',
		}}
		open={isModalOpen}
		onClose={() => onToggleModal(false)}
	>
		<Paper style={{
			padding: '2%',
			height: '50%',
			width: '30%'
		}}>
			<Form 
				initialValues={{...movie}}
				view={movie.view}
				edit={movie.edit}
				onToggleModal={onToggleModal}
			/>
		</Paper>
	</Modal>
);