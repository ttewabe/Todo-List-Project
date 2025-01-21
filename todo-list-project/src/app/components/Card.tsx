import * as React from 'react';

const Card = () => {
    return (
    <div style={{
      border: '1px solid #ccc',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
      margin: '10px',
      width: '85 %'
}} className="card">
        <div className="card-body">
          <h2>Task 3 </h2> 
          <h5 className="card-title">This is the Third task</h5>
        </div>
        </div>
    );
    };

    export default Card;
