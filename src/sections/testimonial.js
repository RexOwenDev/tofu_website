/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from "theme-ui";
import SectionHeader from "components/section-header";
import Rating from "components/rating";
import ButtonGroup from "components/button-group";
import Carousel from "react-multi-carousel";

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
		description:
			"First of all, Thank you kay god sa panibagong taon na pinagkaloob nya sa ating lahat kahit may lumalaganap na pandemya sa buong mundo. ang aking mensahe ay mabuhay kayo hanggang gusto nyo at ienjoy ang nalalapit na pasko at bagong taon. pengeng pamasko btw salamat ang aking gcash ay 09664531082 ^_^",
		avatar: Member6,
		name: "Magni",
	},
	{
		id: 2,
		description:
			"Friendship is one mind in multiple bodies happy holidays everyone",
		avatar: Member2,
		name: "Arei",
	},
	{
		id: 3,
		description: "Thank you",
		avatar: Member8,
		name: "Greenhorn",
	},
	{
		id: 4,
		description:
			"We are gathered here today to celebrate our lord and savior, Arei. Amen to all brothers and sisters",
		avatar: Member3,
		name: "Chogg",
	},
	{
		id: 5,
		description:
			"I know everything is pointless with everything we know now. With whatever is happening in the world. Know that we have each other. It doesnt matter when or how but we do. Keep going and stay optimistic. PS putangina nyo",
		avatar: Member1,
		name: "Tibz",
	},
	{
		id: 6,
		description: "I love you everyone",
		avatar: Member11,
		name: "Vixey",
	},
	{
		id: 7,
		description:
			"Times are tough and personal demons are stronger than ever, but that shouldn't stop you or anyone facing the same predicament. The world is a better place when it's lived with a friend, so find a buddy and stick around to see how life unravels, and I promise you it'll be worth it.",
		avatar: Member18,
		name: "Four",
	},
	{
		id: 8,
		description:
			"The  bois are genuinely pharmacists, providing happy pills, kahit anong gift lang, baka naman :’) and more prayers, forever tofu and wishing eternal peace for y’all",
		avatar: Member15,
		name: "Hansr",
	},
	{
		id: 9,
		description:
			"MERRY CHRISTMAS TOFU HUNTERS, etong tofu na yung parang online family ko even though mga gago kayo HAHAHAHA. alam ko naman lahat yun biruan kaya lagi kayo mag ingat dyan, thank you sa mga masasayang moments narin na nabigay niyo sakin throughout the years. Di ako magaling gumawa ng messages kaya hanggang dito lng sakin Godbless!.",
		avatar: Member5,
		name: "Warfreak",
	},
	{
		id: 10,
		description:
			"And when I greet death, I hope it's gentle, I hope it's like going home.",
		avatar: Member9,
		name: "Varla",
	},

	{
		id: 11,

		description:
			"Salamat sa tkz and sa tofu, this is a place na comfortable lahat",
		avatar: Member10,
		name: "Ray",
	},
	{
		id: 12,
		description:
			"This pandemic brought us closer together, if you're going through something, know that we are a family here and we can listen and help each other. Here's to more memories with and without the pandemic ^^",
		avatar: Member7,
		name: "Kappa",
	},
	{
		id: 13,
		description:
			"I am thankful for the friendship and the good times shared during the past two years. Glad I found people with like minds and ones that understand and accepts me for who I am. Merry Christmas and happy holidays! Mas madami pang katangahan next year. Amen.",
		avatar: Member19,
		name: "Keanu",
	},
	{
		id: 14,
		description: "Prepare - Grind - Rest - Repeat. We got this shit.",
		avatar: Member4,
		name: "DJ",
	},
	{
		id: 15,
		description:
			"First of all Merry Christmas and a Happy New Year! Iiklian ko na lang di ko na pahahabain. Gusto ko lang sabihin sa lahat ng makakabasa nito na kung same tayo ng sitwasyon na nahihirapan kang mag sabi ng mahal mo yung magulang mo o kahit sa sino mang parte ng pamilya.",
		avatar: Member17,
		name: "Kerby",
	},
	{
		id: 16,
		description:
			"Gusto ko lang ipaalala sainyo na hindi naten alam kung kelan darating ang oras naten at di rin naten alam kung kelan darating ang oras nila. Gusto ko lang sabihin na pilitin nyong iparamdam at ipakita pagmamahal nyo sa mga magulang nyo bago pa maging huli ang lahat.",
		avatar: Member17,
		name: "Kerby",
	},
	{
		id: 17,
		description:
			"Yun lang naman enjoy lang sa buhay. Gawin nyo lahat ng gusto nyong gawin hanggat alam nyong nasa tama kayo. Thank you sa mga memories  at sa mga mabubuo pang memories naten TofuHunters. Godbless you all. Love na love ko kayo! May God always be with us.",
		avatar: Member17,
		name: "Kerby",
	},
];

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1619 },
		items: 4,
		slidesToSlide: 4, // optional, default to 1.
	},
	laptop: {
		breakpoint: { max: 1619, min: 1024 },
		items: 3,
		slidesToSlide: 3, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 640 },
		items: 2,
		slidesToSlide: 2, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 639, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
};

const carouselParams = {
	additionalTransfrom: 0,
	arrows: false,
	autoPlaySpeed: 3000,
	centerMode: false,
	className: "",
	containerClass: "carousel-container",
	customButtonGroup: <ButtonGroup />,
	dotListClass: "",
	draggable: true,
	focusOnSelect: false,
	infinite: true,
	itemClass: "",
	keyBoardControl: true,
	minimumTouchDrag: 80,
	renderButtonGroupOutside: true,
	renderDotsOutside: false,
	responsive: responsive,
	showDots: false,
	sliderClass: "",
	slidesToSlide: 1,
};

export default function TestimonialCard() {
	return (
		<section id="testimonial" sx={{ variant: "section.testimonial" }}>
			<Container css={{ textAlign: "center" }}>
				<SectionHeader slogan="Messages" title="TofuSquad Messages" />
			</Container>
			<Box sx={styles.carouselWrapper}>
				<Carousel {...carouselParams}>
					{data.map((item) => (
						<Box sx={styles.reviewCard} key={item.sliderClass}>
							<Text sx={styles.description}>{item.description}</Text>
							<div className="card-footer">
								<div className="image">
									<Image src={item.avatar} alt="TofuMember Image" />
								</div>
								<div className="reviewer-info">
									<Heading as="h4" sx={styles.heading}>
										{item.name}
									</Heading>
								</div>
							</div>
						</Box>
					))}
				</Carousel>
			</Box>
		</section>
	);
}

const styles = {
	carouselWrapper: {
		display: "flex",
		justifyContent: "flex-end",
		flexDirection: "column",
		alignItems: "flex-end",
		mt: "-30px",
		px: "15px",
		".carousel-container": {
			width: "100%",
			maxWidth: [
				"100%",
				null,
				null,
				"750px",
				"1000px",
				"1180px",
				null,
				"calc(50% + 865px)",
			],
			mr: ["auto", null, null, null, null, null, null, "-220px"],
			ml: "auto",
			".react-multi-carousel-item": {
				transition: "all 0.25s",
			},
			".react-multi-carousel-item--active:nth-of-type(4n)": {
				opacity: "0.5",
				"@media screen and (max-width: 1620px)": {
					opacity: 1,
				},
			},
		},
	},
	reviewCard: {
		boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
		transition: "all 0.3s",
		borderRadius: "6px",
		p: [
			"30px 20px 35px",
			"30px 25px 35px",
			"30px 20px 35px",
			"35px 30px 40px 40px",
			"30px 30px 35px",
			"35px 30px 40px 40px",
		],
		bg: "white",
		textAlign: "left",
		m: [
			"28px 5px 30px 5px",
			"28px 20px 30px 20px",
			"28px 15px 30px 15px",
			"28px 15px 30px 15px",
			"30px 20px 40px",
		],
		"&:hover": {
			boxShadow: "0px 6px 30px rgba(38, 78, 118, 0.1)",
		},
		".rating": {
			mb: [1, null, null, 2],
			ul: {
				pl: 0,
				listStyle: "none",
				mb: 0,
				display: "flex",
			},
			svg: {
				marginRight: "2px",
				"&:last-of-type": {
					marginRight: 0,
				},
			},
			".star": {
				color: "primary",
				mr: "1px",
			},
			".star-o": {
				color: "#ddd",
				mr: "1px",
			},
		},
		".card-footer": {
			display: "flex",
			alignItems: "center",
			marginTop: [5, null, null, "33px"],
			".image": {
				flexShrink: 0,
				mr: [3, null, null, 4],
				display: "flex",
				img: {
					width: "55px",
					height: "55px",
					borderRadius: "50%",
					objectFit: "cover",
				},
			},
		},
	},
	title: {
		fontSize: [1, 2],
		fontWeight: 700,
		mb: [3, null, null, "22px"],
		color: "text",
		lineHeight: 1.6,
	},
	description: {
		fontSize: [1, null, null, 2],
		fontWeight: "normal",
		color: "text",
		lineHeight: [1.85, null, 2],
	},
	heading: {
		fontSize: [1, null, null, 2],
		fontWeight: 700,
		mb: "3px",
		color: "text",
		lineHeight: 1.3,
	},
	designation: {
		color: "primary",
		fontWeight: "500",
		fontSize: 1,
		lineHeight: 1.4,
	},
};
