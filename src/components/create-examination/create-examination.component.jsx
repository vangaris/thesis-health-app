import React from "react";
import FormInput from "../form-input/form-input.component";
import "./create-examination.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import { submitExamination } from "../../database/utils";

class CreateExamination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      medical_examination: "",
      doctor: "",
      user: "",
      description: "",
      doc_for_receipe: "",
      doc_for_delivery: "",
      token: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const accesToken = await submitExamination(this.state);
    if (accesToken) {
      this.setState(
        {
          medical_examination: this.state.medical_examination,
          doctor: this.state.doctor,
          user: this.state.user,
          description: this.state.description,
          doc_for_receipe: this.state.doc_for_receipe,
          doc_for_delivery: this.state.doc_for_delivery,
          token: localStorage.getItem("token"),
        },
        () => {
          this.props.history.push("/examinations");
        }
      );
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      medical_examination,
      doctor,
      user,
      description,
      doc_for_receipe,
      doc_for_delivery,
    } = this.state;

    return (
      <div className="create-examination">
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="test"
            name="medical_examination"
            value={medical_examination}
            onChange={this.handleChange}
            label={"Εξέταση"}
            required
          />
          <FormInput
            type="text"
            name="doctor"
            value={doctor}
            handleChange={this.handleChange}
            label={"Γιατρός"}
            required
          />
          <FormInput
            type="text"
            name="user"
            value={user}
            handleChange={this.handleChange}
            label={"Όνομα Ασθενή"}
            required
          />
          <FormInput
            type="text"
            name="description"
            value={description}
            handleChange={this.handleChange}
            label={"Σχόλια"}
            required
          />
          <FormInput
            type="text"
            name="doc_for_receipe"
            value={doc_for_receipe}
            handleChange={this.handleChange}
            label={"Έγγραφο παραλαβής"}
            required
          />
          <FormInput
            type="text"
            name="doc_for_delivery"
            value={doc_for_delivery}
            handleChange={this.handleChange}
            label={"Έγγραφο παράδοσης"}
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Προσθηκη Εξετασης </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateExamination;
