import Button from "../../components/Button/Button.jsx";
import Card from "../../components/Card/Card.jsx";
import { Redirect, useHistory } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { ModalBackground } from "../../styles/global";

import {
	Container,
	Header,
	Introduction,
	Content,
	Content_List_Container,
} from "./dashboard";
import ModalAddTech from "../../components/ModalAddTech/ModalAddTech.jsx";
import ModalEditTech from "../../components/ModalEditTech/ModalEditTech.jsx";
import { useEffect, useState } from "react";
import api from "../../services/api.js";

function Dashboard({ authenticated, setAuthenticated }) {
	const history = useHistory();
	const [showModalAdd, setShowModalAdd] = useState(false);
	const [showModalEdit, setShowModalEdit] = useState(false);
	const [techData, setTechData] = useState([]);
	const [selectedTechToEdit, setSelectedTechToEdit] = useState();
	const userInfoLoggedIn = JSON.parse(
		localStorage.getItem("@KHub:user_info")
	);

	const onCLickExit = (event) => {
		localStorage.clear();
		setAuthenticated(false);
		history.push("/");
	};

	const onClickAddTechnology = (event) => {
		setShowModalAdd(true);
	};

	useEffect(() => {
		const userId = JSON.parse(localStorage.getItem("@KHub:user_id"));

		api.get(`/users/${userId}`)
			.then((res) => {
				setTechData(res.data.techs);
			})
			.catch((err) => console.log(err));
	}, [showModalAdd, showModalEdit]);

	if (!authenticated) {
		return <Redirect to="/" />;
	}

	return (
		<>
			<hr></hr>
			{(showModalAdd || showModalEdit) && <ModalBackground />}
			{showModalAdd && <ModalAddTech setShowModalAdd={setShowModalAdd} />}
			{showModalEdit && (
				<ModalEditTech
					setShowModalEdit={setShowModalEdit}
					selectedTechToEdit={selectedTechToEdit}
				/>
			)}
			<Container>
				<Header margin_bottom="35px">
					<h1>Kenzie Hub</h1>
					<Button color="black" text="Sair" onClick={onCLickExit} />
				</Header>
				<Introduction>
					<div className="intro_content">
						<h1>{`Olá, ${userInfoLoggedIn.name}`}</h1>
						<p>{userInfoLoggedIn.course_module}</p>
					</div>
					<hr></hr>
				</Introduction>
				<Content>
					<Header margin_bottom="0px">
						<h2>Tecnologias</h2>
						<button
							className="add_button"
							onClick={onClickAddTechnology}
						>
							<AiOutlinePlus size={20} />
						</button>
					</Header>
					<Content_List_Container>
						{techData?.map((tech, index) => (
							<Card
								key={index}
								techInfo={tech}
								setShowModalEdit={setShowModalEdit}
								setSelectedTechToEdit={setSelectedTechToEdit}
							/>
						))}
					</Content_List_Container>
				</Content>
			</Container>
		</>
	);
}

export default Dashboard;
