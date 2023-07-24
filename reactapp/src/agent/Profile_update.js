
import React, { useState } from 'react';

const Profile_update = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [description, setDescription] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();

    // TODO: Implement the update logic here

    setIsUpdating(false);
  };

  const handleEdit = () => {
    setIsUpdating(true);
  };

  return (
    <div className="shadow-2-strong">
      <div className="container mt-4">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center">Personal information</h2>
            <div className="mb-4">
              <strong>Name:</strong> {name}
            </div>
            <div className="mb-4">
              <strong>Email:</strong> {email}
            </div>
            <div className="mb-4">
              <strong>Phone Number:</strong> {number}
            </div>
            <div className="mb-4">
              <strong>Description:</strong> {description}
            </div>
            {isUpdating ? (
              <form onSubmit={handleUpdate}>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="number" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    id="number"
                    className="form-control"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </form>
            ) : (
              <button onClick={handleEdit} className="btn btn-primary">
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile_update;
