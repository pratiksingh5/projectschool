import { useState} from "react"
import "./App.css"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import TopNav from "./components/TopNav"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

function App() {
	const [grade, setGrade] = useState("")
	const [tech, setTech] = useState("")
	// const path = window.location.pathname
	// useEffect(() => {
	// 	console.log("path change from app.js")
	// }, [path])
	return (
		<BrowserRouter>
			<Sidebar />
      	<div className="right-section">
				<TopNav
					changeGrade={(e) => {
						setGrade(e.target.value)
					}}
					changeTech={(e) => {
						setTech(e.target.value)
					}}
				/>

				<Switch>
					<Route path="/">
						<Main grade={grade} tech={tech} />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App
