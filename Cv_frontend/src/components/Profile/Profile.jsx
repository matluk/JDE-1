import style from "./Profile.module.css";

function Profile({name, career, team}) {
  return (
    <div className={style.profile}>
      <div className={style.image}>
        <img src="../src/picture/avatar.jpeg" alt="" />
      </div>
      <h2 className={style.name}>{name}</h2>
      <p className={style.career}>{career}</p>
      <p className={style.team}>{team}</p>
    </div>
  );
}

export default Profile;