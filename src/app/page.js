import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { chooseDoor } from './graphql/mutations';

const App = () => {
  const [message, setMessage] = useState('');

  const handleChooseDoor = async (door) => {
    try {
      const response = await API.graphql(graphqlOperation(chooseDoor, { door }));
      setMessage(response.data.chooseDoor);
    } catch (error) {
      console.error('Error choosing door:', error);
    }
  };

  return (
    <div>
      <h1>Monty Hall Problem</h1>
      <p>请选择一个门：</p>
      <button onClick={() => handleChooseDoor(1)}>1号门</button>
      <button onClick={() => handleChooseDoor(2)}>2号门</button>
      <button onClick={() => handleChooseDoor(3)}>3号门</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default App;
