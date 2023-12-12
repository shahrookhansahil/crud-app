import React from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "./Pages/UserList";
import User from "./Pages/User";

function App() {
	return (
		<div className="flex items-center justify-center h-full md:px-[15%]  px-[5%] w-full mt-10">
			<div className="app text-center w-full">
				<h1 className="md:text-4xl text-2xl font-extrabold">
					User Regitration App
				</h1>
				<Routes>
					<Route path="/" element={<UserList />} />
					<Route path="/user/:id" element={<User />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
