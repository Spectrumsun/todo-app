import React from 'react';

interface Props {
  text: string;
  onClick: (data?: any) => void;
  width?: string;
  height: string;
  color?: string;
  borderColor?: string;
}

const Button: React.FC<Props> = ({ 
  text, 
  onClick, 
  width, 
  height, 
  color,
  borderColor 
}) => (
  <button 
    style={{ width, height, color, borderColor }} 
    onClick={() => onClick()}>{text}
  </button>
);

export default Button;
