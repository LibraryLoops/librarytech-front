import React from 'react';

const Button = ({ children, color = 'bg-stone-700 hover:bg-stone-800', tooltip = '', onClick, className = '', size = 'medium', rounded = '', top = '' }) => {
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
    top: ''
  };

  const topClass = top ? 'top-14' : '';
  
  return (
    <button
    className={`${color} ${topClass} text-sky-100 border-none outline-offset-0 hover:outline-gray-500 outline-none hover:duration-200 ${sizeClasses[size]} ${className} ${rounded}`}      title={tooltip}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
