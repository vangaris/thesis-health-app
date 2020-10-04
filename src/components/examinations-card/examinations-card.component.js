import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./examinations-card.style.scss";
import { deleteExamination, updateExamination } from "../../database/utils";

const examinationCard = ({
  medical_examination,
  doctor,
  description,
  id,
  completed,
  handleDelete,
  completeExam,
}) => {
  return (
    <div className="examinations-container">
      <div className="examinations-cart">
        <span className="examinations">Εξέταση: {medical_examination}</span>
        <span className="doctor"> Γιατρός: {doctor}</span>
        {completed ? (
          <span className="status">Ολοκληρώθηκε: ναι </span>
        ) : (
          <span className="status">Ολοκληρώθηκε: οχι </span>
        )}
        <span className="description">Σχόλια: {description}</span>
        <div className="buttons">
          {completed ? (
            <div className="cancel">
              <CustomButton
                onClick={() => {
                  updateExamination(!completed, id);
                  completeExam(id);
                }}
                style={{ background: "#E65100" }}
              >
                Ακυρωση
              </CustomButton>
            </div>
          ) : (
            <div className={"done"}>
              <CustomButton
                onClick={() => {
                  updateExamination(!completed, id);
                  completeExam(id);
                }}
                style={{ background: "#1B5E20" }}
              >
                Ολοκλήρωση
              </CustomButton>
            </div>
          )}
          <div className={"delete"}>
            <CustomButton
              onClick={() => {
                deleteExamination(id);
                handleDelete(id);
              }}
              style={{ background: "#B71C1C" }}
            >
              Διαγραφή
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default examinationCard;
