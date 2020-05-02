import React from "react";
import { getProfile } from "../../database/utils";
import moment from "moment/moment";
import "./myProfile.style.scss";

class MyProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {},
      isLoading: true,
    };
  }

  getProfileData = async () => {
    const getProfileData = await getProfile();

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
              Ημερομηνία δημιουργία: {moment(profile.createdAt).format(
                "LLLL"
              )}{" "}
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
    );
  }
}
export default MyProfile;
