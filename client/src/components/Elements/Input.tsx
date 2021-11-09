import { FC } from "react";

import { TextField } from "@mui/material";

import { useStyles } from "./styles/Input.styles";

interface InputProps {
	error: boolean;
	errors: any;
	label: string;
	className?: string;
	type?: string;
	register: any;
	identifier: string;
	startIcon?: any;
	endIcon?: any;
	[x: string]: any;
}

const Input: FC<InputProps> = ({
	error,
	errors,
	label,
	type,
	register,
	className,
	identifier,
	startIcon,
	endIcon,
	...rest
}) => {
	const styles = useStyles();

	return (
		<TextField
			{...rest}
			error={error}
			helperText={errors[identifier]}
			FormHelperTextProps={{ sx: { color: "red" } }}
			label={label}
			type={type}
			{...register(identifier, { required: true })}
			className={`${styles.textField} ${className}`}
			InputProps={{
				sx: { margin: "0px 10px" },
				className: styles.input,
				startAdornment: startIcon,
				endAdornment: endIcon,
			}}
		></TextField>
	);
};

Input.defaultProps = {
	type: "text",
};

export { Input };
