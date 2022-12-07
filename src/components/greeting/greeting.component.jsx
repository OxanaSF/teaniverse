import React from 'react';

const Greeting = () => {
  const date = new Date();
  const hour = date.getHours();

  return (
    <div>
      {hour >= 12 ? (
        hour >= 16 ? (
          <h3>Good evening,</h3>
        ) : (
          <h3>Good afternoon,</h3>
        )
      ) : (
        <h3>Good morning,</h3>
      )}
    </div>
  );
};

export default Greeting;
