import { ThemeLi } from "./card";

function Card({ techInfo, setShowModalEdit, setSelectedTechToEdit }) {
	const onClickCard = (techInfo) => {
		setShowModalEdit(true);
		setSelectedTechToEdit(techInfo);
	};

	return (
		<ThemeLi onClick={() => onClickCard(techInfo)}>
			<p>{techInfo.title}</p>
			<span>{techInfo.status}</span>
		</ThemeLi>
	);
}

export default Card;
