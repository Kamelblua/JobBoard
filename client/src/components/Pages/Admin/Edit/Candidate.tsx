import { FC, useState, useEffect } from "react";

import { Box, Button } from "@mui/material";

import { useStyles } from "./styles/Candidate.styles";
import { useParams } from "react-router";
import { api } from "api/dist/api";
import { useForm } from "react-hook-form";
import { UpdateCandidateData } from "types/auth";
import { Input } from "components/Elements/Input";

interface UpdateError {
	email?: string;
	graduation_year?: string;
	education_name?: string;
}

const Candidate: FC<{}> = () => {
	const styles = useStyles();

	let { id } = useParams<{ id: string }>();

	const { register, handleSubmit } = useForm();
	// States
	const [showPassword, setShowPassword] = useState(false);
	const [errors, setErrors] = useState<UpdateError>({});
	const [loading, setLoading] = useState(false);

	const onSubmit = (data: UpdateCandidateData) => {
		setLoading(true);

		api.admin
			.updateCandidate(id, data)
			.then((res) => {
				if (res.status === 201) {
					document.location.href = "/admin/dashboard";
				}
			})
			.catch((err) => {
				console.error(err);
				if (err.response?.data.errors) {
					setErrors(err.response?.data.errors);
				}
			})
			.finally(() => setLoading(false));
	};

	useEffect(() => {
		api.candidate
			.get(id)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [id]);

	return (
		<Box className={styles.container}>
			<form className={styles.form} noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
				<Input
					error={typeof errors.email !== "undefined"}
					errors={errors}
					label='Email'
					register={register}
					identifier='email'
				/>
				<Input
					error={typeof errors.graduation_year !== "undefined"}
					errors={errors}
					label='Graduation year'
					register={register}
					identifier='graduation_year'
				/>
				<Input
					error={typeof errors.education_name !== "undefined"}
					errors={errors}
					label='Education name'
					register={register}
					identifier='education_name'
				/>

				<Button type='submit' color='primary' variant='outlined'>
					Update
				</Button>
			</form>
		</Box>
	);
};

export { Candidate };
