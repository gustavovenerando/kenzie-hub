import Input from "../Input/Input.jsx";
import SelectInput from "../SelectInput/SelectInput.jsx";
import Button from "../Button/Button.jsx";
import { Modal, Header, FormStyled } from "./addTech";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import api from "../../services/api.js";
import { modalOptionData } from "../../data/option.js";
import { toast } from "react-toastify";

function ModalAddTech({ setShowModalAdd }) {
	const formSchema = yup.object().shape({
		title: yup.string().required("Campo obrigatório"),
		status: yup.string().required("Campo obrigatório"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(formSchema) });

	const onSubmitFunction = (data) => {
		const token = JSON.parse(localStorage.getItem("@KHub:token"));

		api.post("/users/techs", data, {
			headers: { Authorization: `Bearer ${token}` },
		})
			.then((res) => {
				toast.success("Tecnologia criada!");
				setShowModalAdd(false);
			})
			.catch((err) => {
				toast.error("Tecnologia já existe!");
				console.log(err);
			});
	};

	const onClickExitModal = () => {
		setShowModalAdd(false);
	};

	return (
		<Modal>
			<Header>
				<h1>Cadastrar Tecnologia</h1>
				<button className="exit_button" onClick={onClickExitModal}>
					<AiOutlineClose size={20} />
				</button>
			</Header>
			<FormStyled onSubmit={handleSubmit(onSubmitFunction)}>
				<Input
					label="Tecnologia"
					name="title"
					type="text"
					placeholder="Tecnologia"
					register={register}
					error={errors.title?.message}
				/>
				<SelectInput
					label="Selecionar status"
					name="status"
					register={register}
					optionData={modalOptionData}
				/>
				<Button
					type="submit"
					color="pink"
					text="Cadastrar Tecnologia"
					margin_top="15px"
				/>
			</FormStyled>
		</Modal>
	);
}

export default ModalAddTech;
