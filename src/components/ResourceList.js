import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ResourceList = ({resource}) => {
	const [resources, setResources] = useState([])

	useEffect(()=>{
		const fetchResource = async (resource) => {
			const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
			setResources(response.data)
		}
		fetchResource(resource)
	}, [resource])

	return (
		<ul className="ui list">
			{resources.map(record => <li key={record.id} className="ui list-item">{record.title}</li>)}
		</ul>
	)
}

export default ResourceList