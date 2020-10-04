import React, { useEffect, useState } from "react";
import "./examinations.style.scss";
import { getExaminations } from "../../database/utils";
import ExaminationCard from "./examinations-card.component";
import Header from "../header/header.components";

const Examinations = () => {
  const [examinations, setExaminations] = useState([]);

  useEffect(() => {
    getExaminations().then((examinations) => setExaminations(examinations));
  }, []);

  const handleDelete = (id) => {
    const upadated = examinations.filter((exam) => exam._id !== id);
    setExaminations(upadated);
    getExaminations().then((examinations) => setExaminations(examinations));
  };

  const completeExam = (id) => {
    const upadated = examinations.map((exam) =>
      exam._id === id ? { ...exam, completed: !exam.completed } : exam
    );
    setExaminations(upadated);
    console.log(upadated);
  };

  return (
    <>
      <Header />
      <div className="containerExaminations">
        <div className="examinations">
          {examinations.map(({ status, _id, ...examinationsProps }, index) => (
            <ExaminationCard
              key={index}
              setExaminations={setExaminations}
              handleDelete={handleDelete}
              completeExam={completeExam}
              {...examinationsProps}
              examinations={examinations}
              id={_id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Examinations;
