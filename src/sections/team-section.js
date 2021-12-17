/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import TeamCard from "components/team-card";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import Member1 from "./img/tibz_tofu (1).jpg";
import Member2 from "./img/arei_tofu.jpg";
import Member3 from "./img/chogg_tofu (1).jpg";
import Member4 from "./img/111.jpg";
import Member5 from "./img/warfreak.jpg";
import Member6 from "./img/magni_tofu (1).jpg";
import Member7 from "./img/kappa_tofu (1).png";
import Member8 from "./img/gh_tofu (1).jpg";
import Member9 from "./img/varla_tofu (1).jpg";
import Member10 from "./img/ray_tofu (1).jpg";
import Member11 from "./img/vixey_tofu (1).jpg";
import Member12 from "./img/jardy_tofu (1).jpg";
import Member13 from "./img/adobo.png";
import Member14 from "./img/deta_tofu (1).png";
import Member15 from "./img/hansr_tofu (1).jpg";
import Member16 from "./img/doodie_tofu (1).jpg";
import Member17 from "./img/kerby_tofu (1).jpg";
import Member18 from "./img/four_tofu (1).jpg";
import Member19 from "./img/keanu.jpg";

const data = [
	{
		id: 1,
		imgSrc: Member1,
		altText: "Tibz",
		title: "Tibz",
	},
	{
		id: 2,
		imgSrc: Member2,
		altText: "Arei",
		title: "Arei",
	},
	{
		id: 3,
		imgSrc: Member3,
		altText: "Chogg",
		title: "Chogg",
	},
	{
		id: 4,
		imgSrc: Member4,
		altText: "DJ",
		title: "DJ",
	},
	{
		id: 5,
		imgSrc: Member5,
		altText: "Warfreak",
		title: "Warfreak",
	},
	{
		id: 6,
		imgSrc: Member6,
		altText: "Magni",
		title: "Magni",
	},
	{
		id: 7,
		imgSrc: Member7,
		altText: "Kappa",
		title: "Kappa",
	},
	{
		id: 8,
		imgSrc: Member8,
		altText: "Greenhorn",
		title: "Greenhorn",
	},
	{
		id: 9,
		imgSrc: Member9,
		altText: "Varla",
		title: "Varla",
	},
	{
		id: 10,
		imgSrc: Member10,
		altText: "Ray",
		title: "Ray",
	},
	{
		id: 11,
		imgSrc: Member11,
		altText: "Vixey",
		title: "Vixey",
	},
	{
		id: 12,
		imgSrc: Member12,
		altText: "Jardy",
		title: "Jardy",
	},
	{
		id: 13,
		imgSrc: Member13,
		altText: "Adobo",
		title: "Adobo",
	},
	{
		id: 14,
		imgSrc: Member14,
		altText: "Deta",
		title: "Deta",
	},
	{
		id: 15,
		imgSrc: Member15,
		altText: "Hansr",
		title: "Hansr",
	},
	{
		id: 16,
		imgSrc: Member16,
		altText: "Doodiee",
		title: "Doodiee",
	},
	{
		id: 17,
		imgSrc: Member17,
		altText: "Kerby",
		title: "Kerby",
	},
	{
		id: 18,
		imgSrc: Member18,
		altText: "Four",
		title: "Four",
	},
	{
		id: 19,
		imgSrc: Member19,
		altText: "Keanu",
		title: "Keanu",
	},
];

export default function TeamSection() {
	return (
		<section>
			<Container>
				<SectionHeader
					slogan="Our Members"
					title="We give you... THE TOFU SQUAD"
				/>
				<Grid sx={styles.grid}>
					{data.map((item) => (
						<TeamCard
							key={item.id}
							src={item.imgSrc}
							altText={item.altText}
							title={item.title}
							designation={item.designation}
						/>
					))}
				</Grid>
			</Container>
		</section>
	);
}

const styles = {
	grid: {
		mt: [0, null, -6, null, -4],
		gridGap: ["35px 0px", null, 0, null, null, "30px 35px"],
		gridTemplateColumns: [
			"repeat(3,1fr)",
			null,
			"repeat(3,1fr)",
			null,
			"repeat(4,1fr)",
		],
	},
};
