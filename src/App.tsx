import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import api from './api'
import { RESPONSE_DATA, ENDPOINTS } from './api'
import './App.css'

function App() {
	const [data, setData] = useState<RESPONSE_DATA>()

	useEffect(() => {
		const fetchData = async () => {
			const response = await api.get.data()
			setData(response)
		}
		fetchData()
	}, [])
	return <div className='App'>{data ? <p>{data.greeting} </p> : 'no data'}</div>
}

export default App
