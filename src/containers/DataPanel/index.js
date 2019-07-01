import React from 'react';


const DataPanel = ({ title, children }) => {
    return (
      <div className="col-sm-12">
        <div className="card dashboardRow">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            {children}
          </div>
        </div>
      </div>
    )
  }

export default DataPanel;