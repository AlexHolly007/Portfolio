import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../intro.css'; 

const ChevronAnimation: React.FC = () => {
  return (
    <div className="chevron-container">
      <FontAwesomeIcon icon={faChevronDown} className="chevron" />
      <FontAwesomeIcon icon={faChevronDown} className="chevron" />
      <FontAwesomeIcon icon={faChevronDown} className="chevron" />
    </div>
  );
};

export default ChevronAnimation;