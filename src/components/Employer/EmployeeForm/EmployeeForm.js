import React from 'react';
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
// import Grid from "@material-ui/core/Grid";
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const EmployeeForm = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const onSubmit = (data) => {
    const newData = { ...loggedInUser };
    newData.userProfile = data;
    setLoggedInUser(newData);

    history.push("/payment");
  };

  console.log(loggedInUser);


    return (
        <div className="row">
      <div className="col-md-3">
        <Sidebar />
      </div>
      <div className="col-md-7 mt-3">
        <h1 className="text-primary">Save Your Information to Profile</h1>
        <form className="py-4" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            defaultValue={loggedInUser.name}
            {...register("name")}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            defaultValue={loggedInUser.email}
            {...register("email")}
            required
          />

          <label htmlFor="companyName">Company Name</label>
          <input
            className="form-control"
            {...register("companyName")}
            required
          />

        {/* <label htmlFor="companyName">Company Logo</label>
          <input
            className="form-control"
            {...register("companyName")}
            required
          /> */}
          <br />

          <input className="btn btn-info mt-5" type="submit" />
        </form>
      </div>
    </div>
    )};

export default EmployeeForm;