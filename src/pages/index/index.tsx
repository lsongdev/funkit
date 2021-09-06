import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../config';

import './index.css';

const ListItem = ({ data }) => {
  const { _id, route, name, workerId } = data;
  return (
    <Link className="worker-item" to={`/worker/${workerId}`} >
      <span>{route}</span>
      <span>=&gt;</span>
      <span>{name}</span>
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
  const [rules, setRules] = useState([]);
  const fetchData = async () => {
    const response = await fetch(`${API}/rules`);
    const body = await response.json();
    setRules(body.rules);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <header className="flex" >
        <h2>Rules</h2>
        <Link to="/new" >
          <button className="button button-primary" >new</button>
        </Link>
      </header>
      <List data={rules} ></List>
    </div>
  );
};

export default Index;