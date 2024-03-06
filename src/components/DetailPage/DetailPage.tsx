import React from "react";
import style from "./DetailPage.module.css";
import Navigation from "../Navigation/Nagivation";
import glimobileapp from "../../assets/glimobile.png"

interface DetailPageProps {
  timeline: string;
  title: string;
  summary: string;
  collaborators: string
  role: string;
  img: any;
}

const DetailPage = () => {

  const defaultDetailPage = [
    { timeline: "February 2024 - February 2024", title: "Todo List App", summary: "", collaborators: "", role: "", img: "" },
    { timeline: "February 2021 - Present", title: "GLI Online Web App", summary: "", collaborators: "", role: "", img: "" },
    { timeline: "February 2021 - Present", title: "GLI Admin Web App", summary: "", collaborators: "", role: "", img: "" },
    { timeline: "November 2020 - October 2023.", title: "Eiken Vocabulary App", summary: "", collaborators: "", role: "", img: glimobileapp },
    { timeline: "February 2021 - Present", title: "Firebase Cloud", summary: "", collaborators: "", role: "", img: "" },
    { timeline: "June 2023 - July 2023", title: "Glow Tracker", summary: "", collaborators: "", role: "", img: "" },
  ]

  return (
    <div className={style.container}>
      <Navigation />
      {
        defaultDetailPage.map((page, index) => (
          <div className={style.wrapper}>
            <div className={style.text_wrapper}>
              <h5 className={style.project_timeline}>{page.timeline}</h5>
              <hr className={style.line}></hr>
              <h3>{page.title} </h3>
              <h4>Summary</h4>
              <p>{page.summary}</p>
              <h4>Collaborator</h4>
              <h4>Role</h4>
              <p>{page.role}</p>
            </div>
            <div className={style.img_wrapper}>
              <img src={page.img} alt="My Image" />
            </div>
          </div>
        ))
      }
    </div>
  )
}
export default DetailPage;