import React from "react";
import ToDoList from "./ToDoList";


//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<p className="titulo">todos</p>
			<ToDoList />
		</div>
	);
};

export default Home;
