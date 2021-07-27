import React from "react";
import "../css/ProfileCompleted.css";
import { BsArrowRight } from "react-icons/bs";

const ProfileCompleted = () => {
  return (
    <div>
      <div className="profileCompleted shadow-sm mt-3">
        <div className="row p-2">
          <div className="col-7 mt-2 detail ">
            <h5>Profile Completed</h5>
            <p className="mt-3">Complete your profile</p>
            <p>
              This will give a better chance are attracting the job you deserve.
            </p>
            <button className="btn btn-primary btn-sm mt-2">
              Complete Profile <BsArrowRight />
            </button>
          </div>
          <div className="col-5 perce  d-flex justify-content-lg-center align-items-center flex-column">
            <span>67%</span>
            <span className="text-capitalize">profile Completed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCompleted;
