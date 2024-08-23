import React from 'react';
import SmallButton from '../SmallButton';

const BookList = ({ imageUrl, title, author, rating, user, onEdit, onDelete, showDeleteButton }) => {
  return (
    <div className=" flex flex-col bg-gray-800 hover:bg-gray-700 rounded-lg shadow-lg transition duration-300 ease-in-out p-2 ">
      <div className="flex items-center mb-4">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-20 h-20 object-cover rounded-md mr-4 flex-shrink-0"
        />
        <div className="flex-1 overflow-hidden">
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-500'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <h2 className="text-lg text-white font-bold mb-1 truncate">{title}</h2>
          <p className="text-gray-400 text-sm truncate">{author}</p>
          <p className="text-gray-500 text-xs truncate">{user}</p>
        </div>
      </div>
      {showDeleteButton && (
        <div className='flex justify-end space-x-2 mt-4 w-48'>
          <SmallButton color='bg-blue-500 hover:bg-blue-700' onClick={onEdit}>Editar</SmallButton>
          <SmallButton color='bg-red-500 hover:bg-red-700' onClick={onDelete}>Excluir</SmallButton>
        </div>
      )}
    </div>
  );
};

export default BookList;
