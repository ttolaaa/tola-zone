import React from "react"
import style from "./Header.module.css"
import IntroCard from "./../../assets/intro-card.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMediumM,
	faLinkedin,
	faGithub,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
	return (
		<div className={style.intro_wrapper}>
			<div className={style.intro_text}>
				<p>
					Hey there! I'm<b> Tola (トラーです🐰)</b>
				</p>

				<p>I'm a 🗼 Tokyo-based <span className={style.text_span}>Frontend Developer</span> passionate about designing solutions for end-to-end products to empower people to achieve more. I enjoy translating UX/UI into Frontend code and workable components. Previously, I interned as a QA and UX/UI designer before transitioning to coding frontend during my senior year in college, and I've continued in this role since then. I speak React JS + TS. Little bit of Next.js
				</p>

				<p>Currently at a startup company <span className={style.text_span}> <a
					href="https://jiproce.co.jp/"
					target="_blank"
					rel="noopener noreferrer"
					style={{ color: "inherit", textDecoration: "inherit" }}
				>
					ジプロス(JIPROCE)
				</a></span>, working on
					end-to-end product designing, developing and delivering a completed
					web solution for student{" "}
					<span className={style.text_span}>
						<a
							href="https://online.gli-english.com/"
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: "inherit", textDecoration: "inherit" }}
						>
							online.gli-english.com
						</a>
					</span>{" "}
					, for admin{" "}
					<span className={style.text_span}>
						<a
							href="https://gli-online-admin.vercel.app/admin/login"
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: "inherit", textDecoration: "inherit" }}
						>
							online-gli-admin.com
						</a>
					</span>
				</p>

				<p >
					Currently seeking for new opportunities where I can contribute my pass
					experiences to the team and grow in a new and fast-paced
					environment. I am interested in roles related to
					<span className={style.text_span}> Product Design</span>, <span className={style.text_span}>Frontend Development</span> and{" "}
					<span className={style.text_span}>Quality Assurance.</span> Please feel free to DM me on {" "}
					<a
						href="https://www.linkedin.com/in/som-tola/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon
							icon={faLinkedin}
							className={style.social_icon}
						/>
					</a>{" "}
					LinkedIn for a quick chat. ☺️
				</p>

				<p className="paragraph-intro">
					Visit to my blogs&nbsp; →
					&nbsp;   &nbsp;
					<a
						href="https://medium.com/@somtola"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faMediumM} className={style.social_icon} />
					</a>
					&nbsp;   &nbsp;
					<a
						href="https://www.linkedin.com/in/som-tola/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon
							icon={faLinkedin}
							className={style.social_icon}
						/>
					</a>
					&nbsp;   &nbsp;
					<a
						href="https://github.com/ttolaaa"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faGithub} className={style.social_icon} />
					</a>
					&nbsp;     &nbsp;
					<a
						href="https://www.youtube.com/@thisistolaaa"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faYoutube} className={style.social_icon} />
					</a>
				</p>

			</div>
			<div className={style.intro_img}>
				<img src={IntroCard} alt="My Image" />
			</div>
		</div>
	)
}

export default Header;