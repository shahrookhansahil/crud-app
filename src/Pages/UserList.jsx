import React from "react";
import { useQuery } from "@tanstack/react-query";
import AddUser from "../components/AddUser";
import { fetchUsers } from "../api/users";

export default function UserList() {
	const {
		isLoading,
		isError,
		data: users,
		error,
	} = useQuery({
		queryKey: "[users]",
		queryFn: fetchUsers,
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (isError) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div className="w-full">
			<AddUser />

			<table className="table-auto border-collapse border border-gray-400 shadow-lg mx-auto my-8 w-full ">
				<thead>
					<tr>
						<th className="border border-gray-300 md:py-4">Name</th>
						<th className="border border-gray-300 md:py-4">S/O</th>
						<th className="border border-gray-300 md:py-4">Age</th>
						<th className="border border-gray-300 md:py-4 ml-4">Email</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr
							key={user.id}
							className="bg-slate-300 transition-all duration-300 ease-in-out hover:bg-blue-30 transform hover:scale-105 border-collapse border border-gray-500 shadow-lg "
						>
							<td className="border border-gray-300 md:py-4">{user.name}</td>
							<td className="border border-gray-300 md:py-4">
								{user.fatherName}
							</td>
							<td className="border border-gray-300 md:py-4">{user.age}</td>
							<td className="border border-gray-300 md:py-4 ml-4 text-blue-700 underline">
								{user.email}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
