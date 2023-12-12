import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const UserForm = ({ onSubmit }) => {
	const formik = useFormik({
		initialValues: {
			name: "",
			fatherName: "",
			age: "",
			email: "",
		},
		validationSchema: Yup.object({
			name: Yup.string().required("Name is required"),
			fatherName: Yup.string().required("Father's Name is required"),
			age: Yup.number()
				.required("Age is required")
				.positive("Age must be positive")
				.integer("Age must be an integer")
				.min(18, "Age must be at least 18")
				.max(99, "Age must be at most 99"),
			email: Yup.string()
				.email("Invalid email address")
				.required("Email is required"),
		}),
		onSubmit: (values) => {
			onSubmit(values);
			window.location.reload();
		},
	});

	return (
		<form onSubmit={formik.handleSubmit} className="text-left">
			<div className="mx-auto w-full">
				<label htmlFor="name" className="block font-bold">
					Name:
				</label>
				<input
					type="text"
					id="name"
					name="name"
					className="w-full bg-slate-300 h-10 rounded-md px-4"
					placeholder="Enter Your Name"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.name}
				/>
				{formik.touched.name && formik.errors.name ? (
					<div className="text-red-500">{formik.errors.name}</div>
				) : null}
			</div>

			<div className="mx-auto w-full">
				<label htmlFor="fatherName" className="block font-bold">
					Father's Name:
				</label>
				<input
					className="w-full bg-slate-300 h-10 rounded-md px-4"
					type="text"
					id="fatherName"
					name="fatherName"
					placeholder="Enter Your Father's Name"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.fatherName}
				/>
				{formik.touched.fatherName && formik.errors.fatherName ? (
					<div className="text-red-500">{formik.errors.fatherName}</div>
				) : null}
			</div>

			<div className="mx-auto w-full">
				<label htmlFor="age" className="block font-bold">
					Age:
				</label>
				<input
					className="w-full bg-slate-300 h-10 rounded-md px-4"
					type="number"
					id="age"
					name="age"
					placeholder="Enter Your Age"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.age}
				/>
				{formik.touched.age && formik.errors.age ? (
					<div className="text-red-500">{formik.errors.age}</div>
				) : null}
			</div>

			<div className="mx-auto w-full">
				<label htmlFor="email" className="block font-bold">
					Email:
				</label>
				<input
					className="w-full bg-slate-300 h-10 rounded-md px-4"
					type="email"
					id="email"
					name="email"
					placeholder="Enter Your Email"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
				/>
				{formik.touched.email && formik.errors.email ? (
					<div className="text-red-500">{formik.errors.email}</div>
				) : null}
			</div>

			<div>
				<button
					type="submit"
					className="bg-green-500 p-1 px-2 rounded-md font-semibold mt-4 w-full h-12 hover:bg-green-400"
				>
					Submit
				</button>
			</div>
		</form>
	);
};

export default UserForm;
