import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./examinations-card.style.scss";

class examinationCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillReceiveProps({ isChanging }) {
    this.setState({ ...this.state, isChanging });
  }

  render() {
    return (
      <div className="examinations-container">
        <div className="examinations-cart">
          <span className="examinations">
            Εξέταση: {this.props.medical_examination}
          </span>
          <span className="doctor"> Γιατρός: {this.props.doctor}</span>
          {this.props.completed ? (
            <span className="status">Ολοκληρώθηκε: ναι </span>
          ) : (
            <span className="status">Ολοκληρώθηκε: οχι </span>
          )}
          <span className="description">Σχόλια: {this.props.description}</span>
          <div className="buttons">
            {this.props.completed ? (
              <div className="cancel">
                {" "}
                <CustomButton
                  onClick={async () => {
                    await this.props.handleStatus(this.props.id);
                  }}
                  style={{ background: "#E65100" }}
                >
                  Ακυρωση
                </CustomButton>
              </div>
            ) : (
              <div className={"done"}>
                <CustomButton
                  onClick={async () => {
                    await this.props.handleStatus(this.props.id);
                  }}
                  style={{ background: "#1B5E20" }}
                >
                  Ολοκλήρωση
                </CustomButton>
              </div>
            )}
            <div className={"delete"}>
              <CustomButton
                onClick={async () => {
                  await this.props.handleDelete(this.props.id);
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
  }
}

export default examinationCard;
