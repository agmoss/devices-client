import React from 'react';

const ChartPanel = ({ title, children }) => {
    return (
      <div className="col-6 lineStyle">
        <div className="card dashboardPanel">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            {children}
          </div>
        </div>
      </div>
    );
  }

  export default ChartPanel;