import React, { useEffect, useState } from 'react'
import Video from './Video'
import './App.css'

const API_URL =
	'https://raw.githubusercontent.com/codedamn-classrooms/tiktok-react-material/main/data.json'

export default function App() {
	const [videos, setVideos] = useState([])

	useEffect(() => {
		// TODO: Get the data from API_URL above
		// Store it inside videos state variable
       fetch(API_URL).then((respones)=>respones.json()).then((json)=>setVideos(json))
       
        
	}, [])
        

	return (
		<div className="app">
			<div className="container">
				{/* TODO: Loop over the API_URL data and render Video component */
            videos.map((data)=><Video url={data.url} />)  
                }
				{/* TODO: Make sure to assign the correct URL for each video */}
				
			</div>
		</div>
	)
}
