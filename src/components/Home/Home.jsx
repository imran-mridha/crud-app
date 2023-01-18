import React from "react";
import DataTable from "../DataTable/DataTable";
import "./home.css";

const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const formData = { name: name, phone: phone };
    console.log(formData);
  };
  return (
    <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="name-field">
            <label className="name-label" for="name">
              Name:
            </label>
            <br />
            <input name="name" type="text" placeholder="Enter your name" />
          </div>
          <div>
            <label className="phone-label" for="phone">
              Phone:
            </label>
            <br />
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone Number"
            />
            {/* <input type="tel" placeholder='Enter your phone Number' id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input> */}
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
        <div className="data_table">
            <DataTable />
        </div>

    </div>
  );
};

export default Home;
