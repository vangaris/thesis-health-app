import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./addExamination.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import { submitExamination } from "../../database/utils";
import Header from "../header/header.components";
import { useHistory } from "react-router-dom";

const AddExamination = () => {
  const history = useHistory();

  const [medical_examination, setMedical_examination] = useState("");
  const [doctor, setDoctor] = useState("");
  const [user, setUserr] = useState("");
  const [description, setDescription] = useState("");
  const [doc_for_receipe, setDoc_for_receipe] = useState("");
  const [doc_for_delivery, setDoc_for_delivery] = useState("");
  const token = localStorage.getItem("token");

  const handleSubmit = () => {
    submitExamination({
      medical_examination,
      doctor,
      user,
      description,
      doc_for_receipe,
      doc_for_delivery,
      token,
    });
    history.push("/examinations");
  };

  const handleChange = (value, setState) => {
    setState(value);
  };

  return (
    <>
      <Header />
      <div className="create-examination">
        <FormInput
          type="test"
          name="medical_examination"
          value={medical_examination}
          onChange={({ target }) =>
            handleChange(target.value, setMedical_examination)
          }
          label={"Εξέταση"}
          required
        />
        <FormInput
          type="text"
          name="doctor"
          value={doctor}
          handleChange={({ target }) => handleChange(target.value, setDoctor)}
          label={"Γιατρός"}
          required
        />
        <FormInput
          type="text"
          name="user"
          value={user}
          handleChange={({ target }) => handleChange(target.value, setUserr)}
          label={"Όνομα Ασθενή"}
          required
        />
        <FormInput
          type="text"
          name="description"
          value={description}
          handleChange={({ target }) =>
            handleChange(target.value, setDescription)
          }
          label={"Σχόλια"}
          required
        />
        <FormInput
          type="text"
          name="doc_for_receipe"
          value={doc_for_receipe}
          handleChange={({ target }) =>
            handleChange(target.value, setDoc_for_receipe)
          }
          label={"Έγγραφο παραλαβής"}
          required
        />
        <FormInput
          type="text"
          name="doc_for_delivery"
          value={doc_for_delivery}
          handleChange={({ target }) =>
            handleChange(target.value, setDoc_for_delivery)
          }
          label={"Έγγραφο παράδοσης"}
          required
        />
        <div className="buttons">
          <CustomButton onClick={handleSubmit}>Προσθηκη Εξετασης</CustomButton>
        </div>
      </div>
    </>
  );
};

export default AddExamination;
