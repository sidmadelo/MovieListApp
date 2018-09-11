export default (values) => {
	const errors = {}
	const requiredFields = [
		'title',
		'releaseDate',
		'genre',
		'price',
		'rating'
	]

	requiredFields.forEach(field => {
		if (!values[field]) {
		  errors[field] = 'Required'
		}
	})
  	return errors
}