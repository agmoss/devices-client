import React from 'react';

const ChartPanel = ({ title, children }) => {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 mt-1 col-centered lineStyle">
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