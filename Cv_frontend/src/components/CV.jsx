import React, { useState, useEffect, useCallback } from "react";
import { getName, getArrayData, getObjectData } from "../api/getRequests";
import AboutContent from "./AboutContent/AboutContent";
import ContactInfo from "./ContactInfo/ContactInfo";
import SkillsSection from "./SkillsSection/SkillsSection";
import Profile from "./Profile/Profile";

import style from "./CV.module.css";

function CV() {
  const [personName, setPersonName] = useState("");
  const [arrayData, setArrayData] = useState([]);
  const [objectData, setObjectData] = useState({});

  const fetchData = useCallback(async () => {
    try {
      const [nameResponse, arrayResponse, objectResponse] = await Promise.all([
        getName(),
        getArrayData(),
        getObjectData(),
      ]);
      setPersonName(nameResponse);
      setArrayData(arrayResponse);
      setObjectData(objectResponse);
    } catch (error) {
      console.error("Error in fetching:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const [career, team, ...randomSkills] = arrayData;

  return (
    <div className={style["superhero-content"]}>
      <div className={style.content}>
        <Profile name={personName} career={career} team={team} />
        <ContactInfo
          phone={objectData.phone}
          email={objectData.email}
          facebook={objectData.facebook}
          instagram={objectData.instagram}
          address={objectData.address}
        />
        <AboutContent>
          I am a highly intelligent and competent individual who is experienced
          in the fields of science and engineering. I have a Master's degree in
          both electrical engineering and physics, and as a young boy, I was
          heralded as a child genius.I am capable of using my initiative and
          thinking of my feet, and I am always capable of finding an innovative
          solution to any problems which may arise. I particularly pride myself
          on my ability to work efficiently as part of a team.
        </AboutContent>
        <SkillsSection randomSkills={randomSkills} />
      </div>
    </div>
  );
}

export default CV;
