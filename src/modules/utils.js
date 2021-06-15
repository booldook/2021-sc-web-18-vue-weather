const getValue = (obj, field, field2 = null) => {
	return obj && obj[field]
					? field2 
						? Array.isArray(obj[field]) 
							? obj[field][0][field2]
							: obj[field][field2]
						: obj[field]
					: ''
}

export { getValue }