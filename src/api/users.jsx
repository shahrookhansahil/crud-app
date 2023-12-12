export async function fetchUsers() {
	const response = await fetch("http://localhost:3000/users");
	return response.json();
}

export async function fetchUser(id) {
	const response = await fetch(`http://localhost:3000/users/${id}`);
	return response.json();
}

export async function createUser(id) {
	const response = await fetch(`http://localhost:3000/users/`, {
		method: "POST",
		body: JSON.stringify(id),
		headers: {
			"Content-Type": "application/json",
		},
	});

	return response.json();
}

export async function deleteUser(id) {
	const response = await fetch(`http://localhost:3000/users/${id}`, {
		method: "DELETE",
		body: JSON.stringify(id),
	});

	return response.json();
}
