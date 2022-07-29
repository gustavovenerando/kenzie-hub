import Input from "../Input/Input.jsx";
import SelectInput from "../SelectInput/SelectInput.jsx";
import Button from "../Button/Button.jsx";
import { Modal, Header, FormStyled, ButtonContainer } from "./editTech";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import api from "../../services/api.js";
import { modalOptionData } from "../../data/option.js";
import { toast } from "react-toastify";

function ModalEditTech({ setShowModalEdit, selectedTechToEdit }) {
	const formSchema = yup.object().shape({
		status: yup.string().required("Campo obrigatório"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(formSchema) });

	const onSubmitFunction = (data) => {
		const token = JSON.parse(localStorage.getItem("@KHub:token"));
		const statusToEdit = { status: data.status };

		api.put(`/users/techs/${selectedTechToEdit.id}`, statusToEdit, {
			headers: { Authorization: `Bearer ${token}` },
		})
			.then((res) => {
				toast.success("Tecnologia alterada!");
				setShowModalEdit(false);
			})
			.catch((err) => console.log(err));
	};

	const onClickDeleteTech = () => {
		const token = JSON.parse(localStorage.getItem("@KHub:token"));
		api.delete(`/users/techs/${selectedTechToEdit.id}`, {
			headers: { Authorization: `Bearer ${token}` },
		})
			.then((res) => {
				toast.success("Tecnologia deletada!");
				setShowModalEdit(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const onClickExitModal = () => {
		setShowModalEdit(false);
	};

	return (
		<Modal>
			<Header>
				<h1>Detalhes da Tecnologia</h1>
				<button className="exit_button" onClick={onClickExitModal}>
					<AiOutlineClose size={20} />
				</button>
			</Header>
			<FormStyled onSubmit={handleSubmit(onSubmitFunction)}>
				<Input
					label="Tecnologia"
					name="title"
					type="text"
					placeholder={selectedTechToEdit.title}
					register={register}
					events="none"
				/>
				<SelectInput
					label="Selecionar status"
					name="status"
					register={register}
					optionData={modalOptionData}
				/>
				<ButtonContainer>
					<Button
						type="submit"
						color="pink"
						text="Salvar alterações"
						width="200px"
					/>
					<Button
						color="grey"
						text="Excluir"
						width="110px"
						type="button"
						onClick={onClickDeleteTech}
					/>
				</ButtonContainer>
			</FormStyled>
		</Modal>
	);
}

export default ModalEditTech;
