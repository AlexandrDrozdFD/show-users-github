import React from 'react';
import empty from '../empty.svg';

const Empty = () => {
  return (
    <div className="empty">
      <img src={empty} className="empty__icon" alt="empty"/>
      <p className="empty__text">Repository list is empty</p>
    </div>
  );
};

export { Empty };