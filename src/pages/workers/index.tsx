import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../config';

import './index.css';

const ListItem = ({ data }) => {
  const { _id, name } = data;
  return (
    <Link className="worker-item" to={`/worker/${_id}`} >
      <span>{name}</span>
      <span>{_id}</span>
    </Link>
  );
};

const List = ({ data }) => {
  return (
    <ul className="worker-list" >
      {data.map((item, i) => <ListItem key={i} data={item} />)}
    </ul>
  );
};

const Index = () => {
  const [workers, setWorkers] = useState([]);
  const fetchData = async () => {
    const response = await fetch(`${API}/workers`, {});
    const body = await response.json();
    setWorkers(body.workers);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <header className="" >
        <h2>Workers</h2>
        <Link to="/new" >
          <button className="button button-primary" >new</button>
        </Link>
      </header>
      <List data={workers} ></List>
    </div>
  );
};

export default Index;