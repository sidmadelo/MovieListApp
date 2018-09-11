import React from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ViewIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

import reducer, {initialState} from './reducer';
import {toggleModal, viewMovie, deleteMovie} from './action';
import FormModal from './layout';

const MovieList = ({
		movies,
		movie,
		onToggleModal,
		isModalOpen,
		onViewMovie,
		onDeleteMovie
	}) => (
    <div style={{padding: '5%'}}>
    	<FormModal 
    		movie={movie}
    		isModalOpen={isModalOpen}
    		onToggleModal={onToggleModal}
    		onViewMovie={onViewMovie}
    	/>
        <Typography style={{marginBottom: '5%', fontSize: '2rem'}}>{'MVC Movie App'}</Typography>
        <Paper >
            <Button 
            	variant="outlined"
            	color="primary"
            	style={{margin: '2%'}}
            	onClick={()=> onToggleModal(!isModalOpen)}
            >
                Create New
            </Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell >Actions</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell >Release Date</TableCell>
                        <TableCell >Genre</TableCell>
                        <TableCell >Price ($)</TableCell>
                        <TableCell >Rating</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  {
                    movies.map(movie => (
                            <TableRow key={movie.id}>
                                <TableCell >
                                	<IconButton
							          	onClick={()=> onViewMovie({...movie, edit: true})}
							        >
							          <EditIcon />
							        </IconButton>
                                	<IconButton
							         	onClick={()=> onViewMovie({...movie, view: true})}
							        >
							          <ViewIcon />
							        </IconButton>
							        <IconButton
							          	onClick={()=> {
							          		onDeleteMovie(movie.id)
							          	}}
							        >
							          <DeleteIcon />
							        </IconButton>
        						</TableCell>
                                <TableCell component="th" scope="movie">
                                    {movie.title}
                                </TableCell>
                                <TableCell >{movie.releaseDate}</TableCell>
                                <TableCell >{movie.genre}</TableCell>
                                <TableCell >{movie.price}</TableCell>
                                <TableCell >{movie.rating}</TableCell>
                            </TableRow>
                        )
                    )
                }
                </TableBody>
            </Table>
        </Paper>
    </div>
);

export default connect(
(state) => ({
	...state.movie
}),
{
	onToggleModal: toggleModal,
	onViewMovie: viewMovie,
	onDeleteMovie: deleteMovie
}
)(MovieList)

export {reducer, initialState};