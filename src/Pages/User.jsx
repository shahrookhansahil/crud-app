import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/users";

export default function User() {
	const { id } = useParams();
	const {
		isLoading,
		isError,
		data: user,
		error,
	} = useQuery({
		queryKey: ["users", id],
		queryFn: () => fetchUsers(id),
	});

	if (isLoading) {
		return <div>Loading user data...</div>;
	}

	if (isError) {
		return <div>Error loading user data: {error.message}</div>;
	}

	return (
		<div>
			<h1 className="text-3xl font-bold my-8">
				{user?.name || "No Name"} data
			</h1>
			<p>{user?.email || "No Email"}</p>
		</div>
	);
}
