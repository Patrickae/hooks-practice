import React, {useState} from 'react';
import ResourceList from './ResourceList'
const App = (props) => {
	const [resource, setResource] = useState('posts')
	return (
		<div className='ui container'>
			<div>
		 		<button className='ui button primary' onClick={()=> setResource('posts')}>Post</button>
		 		<button className='ui button primary'onClick={()=> setResource('todos')}>Todos</button>
		 		<ResourceList resource={resource} />
			</div>
		</div>
	)
}

export default App
