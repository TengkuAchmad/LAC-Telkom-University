import React from 'react';
import Button from 'react-bootstrap/Button';
import { BiHelpCircle } from "react-icons/bi";
const CSFloat = () => {
  return (
    <div style={{ position: 'fixed', bottom: '20px', left: '20px' }}>
      <Button className='line-btn-2'><BiHelpCircle size={20}/></Button>
    </div>
  );
};

export default CSFloat;
