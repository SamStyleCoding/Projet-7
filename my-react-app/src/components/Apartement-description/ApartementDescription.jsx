import React, { useState } from 'react';
import './ApartementDescription.scss';

export function ApartementDescription(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="appartement-pagedescription">
      <div className="descriptionheader" onClick={showContent}>
        <span>{props.title}</span>
        <i className={`fa-solid ${isContentVisible ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
      </div>
      <div className={`description__content ${isContentVisible ? 'slide-in' : 'slide-out'}`}>
        <div className="description__inner">
          {props.content}
        </div>
      </div>
    </div>
  );
}
