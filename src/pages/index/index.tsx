import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const ListItem = ({ data }) => {
  return (
    <div className="worker-item" >
      <span>worker-1</span>
      <span className="worker-status worker-status-running" >running</span>
    </div>
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
  const list = [
    1, 2, 3, 4, 4, 4, 4, 4, 4, 4
  ];
  return (
    <div>
      <header className="flex" >
        <h2>Workers</h2>
        <Link to="/new" >
          <button className="button button-primary" >new</button>
        </Link>
      </header>
      <List data={list} ></List>
    </div>
  );
};

export default Index;