/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import TKZ from "assets/key-feature/performance.svg";
import Games from "assets/key-feature/partnership.svg";
import Management from "assets/key-feature/subscription.svg";
import Support from "assets/key-feature/support.svg";

const data = [
	{
		id: 1,
		imgSrc: TKZ,
		altText: "Former ThunderKuntz",
		title: "ThunderKuntz",
		text:
			"We were known us ThunderKuntz or TKZ, a group of friends who used to compete as team in Tom Clancy's Rainbow Six Siege. ",
	},
	{
		id: 2,
		imgSrc: Games,
		altText: "Different Games",
		title: "Games",
		text:
			"We play a variety of games in our discord server. The most commonly played games are Dota 2, Valorant, Rainbow Six Siege, Pummel Party, New World, Minecraft and many more!",
	},
	{
		id: 3,
		imgSrc: Management,
		altText: "Management",
		title: "Management",
		text:
			"TofuHunters have some sort of a management or hierarchy system in its discord. They have 'abusive' admins. Jk, or is it?",
	},
	{
		id: 4,
		imgSrc: Support,
		altText: "Message",
		title: "Friendly",
		text:
			"Feel free to message and join us! We don't bite, atleast some of us don't.",
	},
];

export default function KeyFeature() {
	return (
		<section id="feature" sx={{ variant: "section.keyFeature" }}>
			<Container>
				<SectionHeader slogan="About Us" title="Here's What We Do" />

				<Grid sx={styles.grid}>
					{data.map((item) => (
						<FeatureCardColumn
							key={item.id}
							src={item.imgSrc}
							alt={item.altText}
							title={item.title}
							text={item.text}
						/>
					))}
				</Grid>
			</Container>
		</section>
	);
}

const styles = {
	grid: {
		width: ["100%", "80%", "100%"],
		mx: "auto",
		gridGap: [
			"35px 0",
			null,
			"40px 40px",
			"50px 60px",
			"30px",
			"50px 40px",
			"55px 90px",
		],
		gridTemplateColumns: [
			"repeat(1,1fr)",
			null,
			"repeat(2,1fr)",
			null,
			"repeat(4,1fr)",
		],
	},
};
