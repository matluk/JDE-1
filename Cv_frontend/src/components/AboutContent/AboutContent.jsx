import style from "./AboutContent.module.css";

function AboutContent({children}) {
  return (
    <div className={style["about-content"]}>
      <h2 className={style["about-title"]}>About Me</h2>
      <p className={style.para}>
        {children}
      </p>
    </div>
  );
}

export default AboutContent;