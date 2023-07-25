import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import image from './Agent1.jpg'

export default function ViewAgent() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    description:"",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

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
  Agent Contact Details
</h2>
          <div className="card">
            <div className="card-header">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Agent Name: </b>
                  {user.name}
                </li>
                <li className="list-group-item">
                  <b>Agent Email: </b>
                  {user.email}
                </li>
                <li className="list-group-item">
                  <b>Agent Phone Number: </b>
                  {user.phone}
                </li>
                <li className="list-group-item">
                  <b>Agent Phone Description: </b>
                  {user.description}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/agents/"}>
            Back to Home
          </Link>
          {/* <Link className="btn btn-danger mx-2" to={`/updateagent/${user.id}`}>
              Update Details
          </Link> */}
        </div>
      </div>
    </div>
  );
}