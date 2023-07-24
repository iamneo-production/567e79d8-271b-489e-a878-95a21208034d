import React, { useEffect, useState } from 'react';
import axios from 'axios';
import image1 from "./Agent.jpg"
import { Link,useParams } from "react-router-dom";

export default function AllAgent() {
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:8080/agents/');
    setUsers(result.data);
  };

  return (
    <div className="container my-2">
      <div className="py-4">
        <div className="row">
          {users.map((user, index) => (
            <div className="col-md-4" key={index}>
              <div className="card">
              <img src={image1} className="card-img-top" alt="..." style={{ width: "200px", height: "200px" }} />

                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-subtitle mb-1">{user.description}</p>
                 
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewagent/${user.id}`}
                  >
                    Contact me
                  </Link>
                  <hr></hr>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
