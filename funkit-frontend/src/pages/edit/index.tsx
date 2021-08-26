import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Edit = ({ match }) => {
  const { params } = match;
  const { id } = params;
  const [name, setName] = useState("Worker");
  const [code, setCode] = useState("");
  useEffect(() => {
    console.log(id);
  }, []);
  const changeName = e => {
    const { value } = e.target;
    setName(value);
  };
  const changeCode = e => {
    const { value } = e.target;
    setCode(value);
  };
  const deploy = () => {
    console.log('deploy', { id, name, code });
  };
  return (
    <div>
      <header>
        <input type="text" defaultValue={name} onChange={changeName} />
        <Link to="/new" >
          <button className="button button-primary" onClick={deploy} >deploy</button>
        </Link>
      </header>
      <div>
        <textarea defaultValue={code} rows={20} onChange={changeCode} ></textarea>
      </div>
    </div>
  );
};

export default Edit;