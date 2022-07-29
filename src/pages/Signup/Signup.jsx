import { Container, FormStyled, Header } from "./signup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";
import SelectInput from "../../components/SelectInput/SelectInput.jsx";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { signupOptionData } from "../../data/option";
import { toast } from "react-toastify";

function Signup({ authenticated }) {
	const history = useHistory();

	const [showPassword, setShowPassword] = useState(false);
	const [passwordType, setPasswordType] = useState("password");

	const formSchema = yup.object().shape({
		name: yup.string().required("Nome obrigatório"),
		email: yup
			.string()
			.required("Email obrigatório")
			.email("Email inválido"),
		password: yup
			.string()
			.required("Senha obrigatória")
			.min(6, "Mínimo 6 caracteres"),
		passwordConfirmation: yup
			.string()
			.required("Confirmaçao obrigatória")
			.oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
		bio: yup.string().required("Bio obrigatória"),
		contact: yup.string().required("Contato obrigatório"),
		course_module: yup.string().required("Módulo obrigatório"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(formSchema) });

	const onSubmitFunction = (data) => {
		api.post("/users", data)
			.then((res) => {
				toast.success("Conta criada com sucesso!");
				history.push("/");
			})
			.catch((err) => {
				if ((err.response.data.message = "Email already exists")) {
					return toast.error("Email já existente!");
				}
				return toast.error("Ops. Verifique os dados!");
			});
	};

	const onCLickPreviousPage = (event) => {
		history.push("/");
	};

	if (authenticated) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<Container>
			<Header>
				<h1>Kenzie Hub</h1>
				<Button
					color="black"
					text="Voltar"
					onClick={onCLickPreviousPage}
				/>
			</Header>
			<FormStyled onSubmit={handleSubmit(onSubmitFunction)}>
				<h2>Crie sua conta</h2>
				<p>Rápido e grátis, vamos nessa</p>
				<Input
					label="Nome"
					name="name"
					type="text"
					placeholder="Digite seu nome"
					register={register}
					error={errors.name?.message}
				/>
				<Input
					label="Email"
					name="email"
					type="email"
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
				<Input
					label="Confirmar Senha"
					name="passwordConfirmation"
					type="password"
					placeholder="Confirme sua senha"
					register={register}
					error={errors.passwordConfirmation?.message}
				/>
				<Input
					label="Bio"
					name="bio"
					type="text"
					placeholder="Fale mais sobre voce"
					register={register}
					error={errors.bio?.message}
				/>
				<Input
					label="Contato"
					name="contact"
					type="text"
					placeholder="Opção de contato"
					register={register}
					error={errors.contact?.message}
				/>
				<SelectInput
					label="Selecionar módulo"
					name="course_module"
					register={register}
					optionData={signupOptionData}
				/>
				<Button
					color="pink"
					text="Cadastrar"
					type="submit"
					margin_top="15px"
				/>
			</FormStyled>
		</Container>
	);
}

export default Signup;
