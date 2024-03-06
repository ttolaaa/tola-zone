import React, { useState, useEffect, useRef } from "react"
import style from "./PortfolioComponent.module.css"
import Navigation from "../Navigation/Nagivation";
import Header from "../Header/Header"



import todoimg from "../../assets/todo_img.png"
import mobileapp from "../../assets/mobileapp.gif";
import onlinegliweb from "../../assets/onlinegliweb.gif";
import glow from "../../assets/glow.gif";
import adminweb from "../../assets/adminweb.gif";
import firebaseproject from "../../assets/firebase-project.png"

import { IoIosArrowDown } from "react-icons/io";


const PortfolioComponent = () => {

	const defaultCard = [
		{ img: todoimg, header: "Todo List App", title: "mini todo app inspired me to keep tracking on my daily tasks. Click on detail button to play around, you can also check out my code on sandbox/github.", accordion_text: "About Todo Mini App", detail_accordion_text: "mini todo app is to practical of CRUD app where I first start implememt Typescript with React. " },
		{ img: onlinegliweb, header: "Experience Classroom Services Nationwide", title: "web application that enables students to effortlessly purchase online courses and conveniently reserve lessons with experienced teachers. ", accordion_text: "About GLI Online Web App", detail_accordion_text: "Global Learner's Institute , an English conversation school where ordinary elementary school students pass the Eiken Level 2 exam , is now online!" },
		{ img: adminweb, header: "admin system for managing lesson reservation", title: "lesson reservations with user-friendly Admin System, enabling seamless management for students and teachers. ", accordion_text: "About GLI Admin Web App", detail_accordion_text: "an admin system for managing lesson reservation, and enabling seamless management for students and teachers" },
		{ img: mobileapp, header: "Eiken Vocabulary Enhancement App", title: "empower Japanese kids to master vocabulary for the Eiken proficiency test through interactive exercises, quizzes, and personalized learning. ", accordion_text: "About Eiken Vocabulary App", detail_accordion_text: "Eiken Mobile Application is a solution for Japanese elementary students, offering quizzes, flashcards, and listening exercises aligned with Eiken test levels. Designed to enhance language proficiency, it helps students prepare effectively by adhering to word limitations for each proficiency level. " },
		{ img: firebaseproject, header: "firebase cloud: streamline data management efforts", title: "simplify data management for small enterprise app, empowering seamless organization and accessibility of crucial information", accordion_text: "About Firebase Cloud", detail_accordion_text: "using firebase as cloud infrastructure work as the backbond of the system. for both gli online web for customer and gli admin web application for school coordinator." },
		{ img: glow, header: "glowtracker: your daily buddy", title: "combining skincare tracking, nutritional monitoring, and weight management, GlowTracker offers a holistic approach to enhancing your skin's natural glow. ", accordion_text: "About Glow Tracker", detail_accordion_text: "an ideal for meal and weight tracking app. (it is pending...)" },
	]
	const [cardList, setCardList] = useState<any>(defaultCard);
	const [showDetail, setShowDetail] = useState<boolean[]>(Array(defaultCard.length).fill(false));

	const toggleDetail = (i: number) => {
		const updatedShowDetail = [...showDetail];
		console.log('after',[...showDetail]) 
		updatedShowDetail[i] = !updatedShowDetail[i];
		setShowDetail(updatedShowDetail);
	};
	return (
		<div className={style.container}>
			<Navigation/>
			<Header/>
			<div className={style.card_container}>
				{
					cardList.map((card: any, i: any) => (
						<div className={style.card_wrapper}>
							<img className={style.card_img} src={card.img} />
							<p className={style.card_header}>{card.header}</p>
							<p className={style.card_title}>{card.title}</p>

							<div className={style.detail_button_wrapper}>
								<button className={style.detail_button} >
									Detail
								</button>
							</div>

							<div className={style.detail_wrapper}>
								<div className={style.detail_accordion_wrapper} key={i} onClick={() => toggleDetail(i)}>
									<span className={style.detail_text_accordion}>{card.accordion_text} </span>
									<IoIosArrowDown
										className={`${style.dropdown_icon} ${showDetail[i] ? style.dropdown_icon_open : ""}`}
									/>
								</div>
								{showDetail[i] && (
									<p className={style.show_content}>
										{card.detail_accordion_text}
									</p>
								)}
							</div>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default PortfolioComponent;