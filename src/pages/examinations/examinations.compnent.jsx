import React from "react";
import "./examinations.style.scss";
import {
  updateExamination,
  deleteExamination,
  getExaminations,
} from "../../database/utils";

// import CustomButton from "../../components/custom-button/custom-button.component";
import ExaminationCard from "../../components/examinations-card/examinations-card.component";

class Examinations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      examinations: [],
      completed: false,
      nonCompleted: false,
      status: false,
    };
  }

  geturrentUser = async () => {
    const userExaminations = await getExaminations();

    if (userExaminations) {
      this.setState({
        examinations: userExaminations,
      });
    }
  };

  handleExaminationFilter = () => {
    this.setState({
      completed: !this.state.completed,
    });
  };

  showingCompletedExaminations = (event) => {
    const { value } = event.target;

    this.setState({ completed: !this.state.completed });
    console.log(value);
  };

  showingNonCompletedExaminations = (event) => {
    const { value } = event.target;

    this.setState({ nonCompleted: !this.state.nonCompleted });
    console.log(value);
  };

  handleStatus = async (id) => {
    this.state.examinations.forEach(async (exam) => {
      if (exam._id === id) {
        await updateExamination(!exam.completed, id);
        this.setState({
          status: !this.state.status,
        });
      }
    });
  };

  handleDelete = async (id) => {
    this.state.examinations.forEach((exam) => {
      if (exam._id === id) {
        deleteExamination(id);
        this.setState(
          {
            status: !this.state.status,
          },
          () => this.forceUpdate()
        );
      }
    });
  };

  changingStatus = () => {
    this.setState({
      isChanging: !this.state.isChanging,
    });
  };

  componentDidMount() {
    this.geturrentUser();
  }

  render() {
    const {
      completed,
      examinations,
      isLoading,
      nonCompleted,
      isChanging,
      status,
    } = this.state;

    return (
      <div className="containerExaminations">
        <div className="checkboxes">
          <input
            className="completed"
            type="checkbox"
            onChange={this.showingCompletedExaminations}
            name="completed"
            value={this.state.completed}
          />
          <label> Ολοκληρωμένες</label>
          <input
            className="nonCompleted"
            type="checkbox"
            onChange={this.showingNonCompletedExaminations}
            name="uncompleted"
            value={this.state.nonCompleted}
          />{" "}
          <label> Μη Ολοκληρωμένες</label>
        </div>

        <div className="examinations">
          {(!completed && !nonCompleted) || (completed && nonCompleted)
            ? examinations.map(({ _id, ...examinationsProps }, index) => (
                <ExaminationCard
                  key={index}
                  handleDelete={this.handleDelete}
                  handleStatus={this.handleStatus}
                  status={status}
                  {...examinationsProps}
                  id={_id}
                  isLoading={isLoading}
                  isChanging={isChanging}
                />
              ))
            : completed
            ? examinations
                .filter(({ completed }) => completed)
                .map(({ _id, ...examinationsProps }, index) => {
                  return (
                    <ExaminationCard
                      key={index}
                      handleDelete={this.handleDelete}
                      handleStatus={this.handleStatus}
                      status={status}
                      {...examinationsProps}
                      id={_id}
                      isLoading={isLoading}
                      isChanging={isChanging}
                    />
                  );
                })
            : examinations
                .filter((item) => !item.completed)
                .map(({ _id, ...examinationsProps }, index) => {
                  return (
                    <ExaminationCard
                      key={index}
                      handleDelete={this.handleDelete}
                      handleStatus={this.handleStatus}
                      status={status}
                      {...examinationsProps}
                      id={_id}
                      isLoading={isLoading}
                      isChanging={isChanging}
                    />
                  );
                })}
        </div>
      </div>
    );
  }
}
export default Examinations;
