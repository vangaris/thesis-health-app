import React from "react";
import { getProfile, userProfile } from "../../database/utils";
import moment from "moment/moment";
import "./myProfile.style.scss";
import CustomButton from "../custom-button/custom-button.component";

class MyProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {},
      isLoading: true,
    };
  }

  getProfileData = async () => {
    const getProfileData = await userProfile();

    if (getProfileData) {
      this.setState(
        {
          profile: getProfileData.data,
          isLoading: false,
        },
        () => {
          console.log(this.state);
        }
      );
    }
  };

  componentDidMount() {
    this.getProfileData();
  }

  render() {
    const { profile, isLoading } = this.state;
    return (
      <div className="containerProfile">
        <div className="profile">
          <h4> Ο λογαριασμός μου: </h4>
          {isLoading ? (
            <h4>isLoading...</h4>
          ) : (
            <div className="items">
              <span className="name"> Όνομα: {profile.name} </span>
              <span className="phone"> Κινητό: {profile.phone} </span>
              <span className="email"> Email: {profile.email} </span>
              <span className="createdDate">
                {" "}
                Ημερομηνία δημιουργία:{" "}
                {moment(profile.createdAt).format("LLLL")}{" "}
              </span>
              <span className="updatedDate">
                {" "}
                Τελευταία Τροποίηση: {moment(profile.updatedAt).format(
                  "LLLL"
                )}{" "}
              </span>
            </div>
          )}
        </div>
        <div className="edit">
          <CustomButton> Επεξεργασία </CustomButton>
        </div>
      </div>
    );
  }
}
export default MyProfile;
