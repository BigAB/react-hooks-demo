import React, { useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { UserCard } from './components/UserCard';

const ContextDemo = () => {
  const user = useContext(userContext);

  return (
    <div className="App">
      <h1>useContext</h1>
      <UserCard user={user} />
    </div>
  );
};

const App = () => {
  return <ContextDemo />;
};

const userContext = createContext({
  name: undefined,
  title: 'Anonomous User',
  image: '/defaultuser.svg',
});

const bigab = {
  name: 'Adam L Barrett',
  title: 'JS Guru',
  image: 'https://drops.barrett.cloud/e33f9430f2ca/adamlbarrett.jpg',
};

const rootElement = document.getElementById('root');
ReactDOM.render(
  // <userContext.Provider value={bigab}>
  <App />,
  // </userContext.Provider>,
  rootElement
);
