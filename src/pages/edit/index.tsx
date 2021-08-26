import React, { useState, useEffect } from 'react';
import { } from 'react-router-dom';

import './index.css';

// copy from https://github.com/song940/scripts/blob/master/array.js#shuffle
export const shuffle = arr =>
  arr.sort(() => Math.random() - .5);


// copy from https://github.com/song940/scripts/blob/master/array.js#sample
export const sample = (arr, k = 1) =>
  shuffle(arr).slice(0, k);

export const rand = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const randomId = (len = 8, str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789') => {
  var result = '';
  const chars = str.split('');
  while (result.length < len) {
    const i = rand(chars.length - 1);
    result += chars[i];
  }
  return result;
};

const generateName = () => {
  const adjs = [
    'red',
    'blue',
    'green',
    'black',
  ];
  const names = [
    'dog',
    'cat',
    'pig',
    'owl',
    'ant',
    'bird',
  ];
  const adj = sample(adjs);
  const name = sample(names);
  const id = randomId(5);
  return `${adj}-${name}-${id}`;
};

const Edit = ({ match, history }) => {
  const { params } = match;
  const { id } = params;
  const [name, setName] = useState(generateName());
  const [code, setCode] = useState();
  const [route, setRoute] = useState();
  const [rules, setRules] = useState([]);
  const fetchData = async id => {
    const response = await fetch(`https://api.lsong.me/funkit/workers/${id}`);
    const { worker, rules } = await response.json();
    setName(worker.name);
    setCode(worker.code);
    setRules(rules);
  };
  useEffect(() => {
    id && fetchData(id);
  }, []);
  const changeName = e => {
    const { value } = e.target;
    setName(value);
  };
  const changeCode = e => {
    const { value } = e.target;
    setCode(value);
  };
  const deploy = async () => {
    const worker = { id, name, code };
    console.log('deploy', worker);
    const response = await fetch(`https://api.lsong.me/funkit/workers`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(worker)
    });
    const body = await response.json();
    const { success } = body;
    success && history.push(`/worker/${body.id}`);

  };
  const changeRoute = (e) => {
    const { value } = e.target;
    setRoute(value);
  };
  const addRoute = async () => {
    const response = await fetch(`https://api.lsong.me/funkit/rules`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, route })
    });
    const { success } = await response.json();
    success && fetchData(id);
  };
  return (
    <div>
      <header>
        <input className="title" type="text" value={name} onChange={changeName} />
        <button className="button button-primary" onClick={deploy} >deploy</button>
      </header>
      <div>
        <textarea defaultValue={code} rows={20} onChange={changeCode} ></textarea>
      </div>
      {
        id && (
          <div>
            <h3>Routes</h3>
            <div className="flex flex-align-center form" >
              <input className="input" required type="text" onChange={changeRoute} />
              <button className="button button-primary" onClick={addRoute} >Add</button>
            </div>
            <ul>
              {
                rules.map((rule, i) => (
                  <li key={i} >{rule.route}</li>
                ))
              }
            </ul>
          </div>
        )
      }
    </div>
  );
};

export default Edit;