import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import image from './Agent1.jpg'

export default function Profile_update() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const { name, email, phone,description } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://ide-ecedbaeaedeecbfcbdacabecfcbaedbffbeeaadbbb.project.examly.io/proxy/8080/agents/`, user);
    navigate(`/viewagent/${id}`);
  };

  const loadUser = async () => {
    const result = await axios.get(`https://ide-ecedbaeaedeecbfcbdacabecfcbaedbffbeeaadbbb.project.examly.io/proxy/8080/agents/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <div className="justify-content-center align-items-center">
             <img src={image} className="img-fluid" alt="Agent"  width="200px" height="200px" />
         </div>
        <h2 className="text-center m-4" style={{ fontWeight: 'bold', color: 'blue', textShadow: '1px 1px 1px #000' }}>
          Update Agent Profile
</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Phone
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter your number"
                name="phone"
                value={phone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
               <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                type={"text"}
                className="form-control"
                placeholder="Enter your description"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
                rows={3}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/agents/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}