import React from "react";
import UserForm from "./UserForm";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../api/users";
import { v4 as uuidv4 } from "uuid";
import { useQueryClient } from "@tanstack/react-query";

function AddUser() {
	const queryClient = useQueryClient();

	const createUserMutation = useMutation({
		mutationFn: createUser,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["users"] });
		},
	});

	const handleAddUser = (user) => {
		createUserMutation.mutate({
			id: uuidv4(),
			...user,
		});
	};

	return (
		<div>
			<h1 className="md:text-2xl text-xl font-bold pt-10 mb-2 text-left ">
				Registration Form
			</h1>
			<UserForm onSubmit={handleAddUser} />
			<h1 className="md:text-3xl text-2xl font-bold mt-20 -mb-8">Users List</h1>
		</div>
	);
}

export default AddUser;
