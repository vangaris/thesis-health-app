import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./examinations-card.style.scss";

class examinationCard extends React.Component {
  constructor() {
    super();

    this.state = {};
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
              <CustomButton
                onClick={() => {
                  this.props.handleStatus(this.props.id);
                }}
                style={{ background: "#E65100" }}
              >
                {" "}
                Ακυρωση{" "}
              </CustomButton>
            ) : (
              <CustomButton
                onClick={() => {
                  this.props.handleStatus(this.props.examinationCardid);
                }}
                style={{ background: "#1B5E20" }}
              >
                {" "}
                &#10004;{" "}
              </CustomButton>
            )}
            <span>
              <CustomButton style={{ background: "#FFAB00" }}>
                {" "}
                &#9997;{" "}
              </CustomButton>
            </span>
            <CustomButton
              onClick={() => {
                this.props.handleDelete(this.props.id);
              }}
              style={{ background: "#B71C1C" }}
            >
              {" "}
              &#10008;{" "}
            </CustomButton>
          </div>
        </div>
      </div>
    );
  }
}
// const examinationCard = ({
//   handleDelete,
//   handleStatus,
//   id,
//   doctor,
//   medical_examination,
//   completed,
//   description,
// }) => (
//   <div className="examinations-container">
//     <div className="examinations-cart">
//       <span className="examinations">Εξέταση: {medical_examination}</span>
//       <span className="doctor"> Γιατρός: {doctor}</span>
//       {completed ? (
//         <span className="status">Ολοκληρώθηκε: ναι </span>
//       ) : (
//         <span className="status">Ολοκληρώθηκε: οχι </span>
//       )}
//       <span className="description">Σχόλια: {description}</span>
//       <div className="buttons">
//         {completed ? (
//           <CustomButton
//             onClick={() => {
//               handleStatus(id);
//             }}
//             style={{ background: "#E65100" }}
//           >
//             {" "}
//             Ακυρωση{" "}
//           </CustomButton>
//         ) : (
//           <CustomButton
//             onClick={() => {
//               handleStatus(id);
//             }}
//             style={{ background: "#1B5E20" }}
//           >
//             {" "}
//             &#10004;{" "}
//           </CustomButton>
//         )}
//         <span>
//           <CustomButton style={{ background: "#FFAB00" }}>
//             {" "}
//             &#9997;{" "}
//           </CustomButton>
//         </span>
//         <CustomButton
//           onClick={() => {
//             handleDelete(id);
//           }}
//           style={{ background: "#B71C1C" }}
//         >
//           {" "}
//           &#10008;{" "}
//         </CustomButton>
//       </div>
//     </div>
//   </div>
// );

export default examinationCard;
