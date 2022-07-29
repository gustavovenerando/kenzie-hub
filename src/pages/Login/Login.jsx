import { Container, FormStyled } from "./login";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";
import { Redirect, useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

function Login({ authenticated, setAuthenticated }) {
	const history = useHistory();

	const [showPassword, setShowPassword] = useState(false);
	const [passwordType, setPasswordType] = useState("password");

	const formSchema = yup.object().shape({
		email: yup
			.string()
			.required("Email obrigatório")
			.email("Email inválido"),
		password: yup.string().required("Senha obrigatória"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(formSchema) });

	const onSubmitFunction = (data) => {
		api.post("/sessions", data)
			.then((res) => {
				localStorage.setItem(
					"@KHub:user_info",
					JSON.stringify(res.data.user)
				);
				localStorage.setItem(
					"@KHub:user_id",
					JSON.stringify(res.data.user.id)
				);
				localStorage.setItem(
					"@KHub:token",
					JSON.stringify(res.data.token)
				);
				setAuthenticated(true);
				toast.success("Login com sucesso!");
				return history.push("/dashboard");
			})
			.catch((err) => {
				toast.error("Email ou senha inválidos");
				console.log(err);
			});
	};

	if (authenticated) {
		return <Redirect to="/dashboard" />;
	}

	const onClickSignup = () => {
		history.push("/signup");
	};

	return (
		<Container>
			<h1>Kenzie Hub</h1>
			<FormStyled onSubmit={handleSubmit(onSubmitFunction)}>
				<h2>Login</h2>
				<Input
					label="Email"
					name="email"
					type="text"
					placeholder="Digite seu email"
					register={register}
					error={errors.email?.message}
				/>
				<Input
					label="Senha"
					name="password"
					type={passwordType}
					setPasswordType={setPasswordType}
					placeholder="Digite sua senha"
					register={register}
					showPassword={showPassword}
					setShowPassword={setShowPassword}
					error={errors.password?.message}
				/>
				<Button
					color="pink"
					text="Entrar"
					type="submit"
					margin_top="10px"
				/>
				<p>Ainda não possui uma conta?</p>
				<Button
					color="grey"
					text="Cadastre-se"
					onClick={onClickSignup}
					margin_top="25px"
				/>
			</FormStyled>
		</Container>
	);
}

export default Login;
