import style from "./SkillsSection.module.css";

function SkillsSection({randomSkills}) {
  return (
    <div className={style["skills-section"]}>
      <h3 className={style["main-title"]}>Skills</h3>
      <ul>
        <li>
          <p className={style["skill-title"]}>Physics</p>
          <div className={style["progress-bar"]}>
            <div className={`${style.progress} ${style["ph-progress"]}`} style={{ width: `${randomSkills[0]}%`}}>{randomSkills[0]}</div>
          </div>
        </li>
        <li>
          <p className={style["skill-title"]}>Combat skills</p>
          <div className={style["progress-bar"]}>
            <div className={`${style.progress} ${style["coms-progress"]}`} style={{ width: `${randomSkills[1]}%`}}>{randomSkills[1]}</div>
          </div>
        </li>
        <li>
          <p className={style["skill-title"]}>Electronics</p>
          <div className={style["progress-bar"]}>
            <div className={`${style.progress} ${style["e-progress"]}`} style={{ width: `${randomSkills[2]}%`}}>{randomSkills[2]}</div>
          </div>
        </li>
        <li>
          <p className={style["skill-title"]}>Crafting skills</p>
          <div className={style["progress-bar"]}>
            <div className={`${style.progress} ${style["cs-progress"]}`} style={{ width: `${randomSkills[3]}%`}}>{randomSkills[3]}</div>
          </div>
        </li>
        <li>
          <p className={style["skill-title"]}>Social skills</p>
          <div className={style["progress-bar"]}>
            <div className={`${style.progress} ${style["ss-progress"]}`} style={{ width: `${randomSkills[4]}%`}}>{randomSkills[4]}</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SkillsSection;
