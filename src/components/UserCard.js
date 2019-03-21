import React from 'react';
import './styles.css';

export const UserCard = ({ user = {} }) => {
  const { name = '--', image, title } = user;

  return (
    <div className="user-card">
      <img alt={user.name} src={image} />
      <h1>{name}</h1>
      <p className="title">{title}</p>
    </div>
  );
};
