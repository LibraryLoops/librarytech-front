import React from 'react';
import SmallButton from '../SmallButton';
import NoImg from '/noImg.png';

const BookCard = ({ imageUrl, title, author, rating, user, onEdit, onDelete, showDeleteButton }) => {

  
  return (
 <div className="bg-stone-600 hover:bg-stone-700 border border-gray-200 rounded-lg shadow-md p-4 sm:p-5">    
        <img 
        src={imageUrl=="" ? NoImg : imageUrl} 
        alt={title} 
        className="w-full h-auto object-cover rounded-md mb-4"
      />
      <div className="p-4">
        <div>
          <div className="flex mb-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <h2 className="text-xl text-sky-100 font-bold mb-2">{title}</h2>
          <p className="text-sky-200">{author}</p>
          <p className="text-sky-300">Adicionado por {user}</p>
        </div>
        <div className='flex flex-col sm:flex-row justify-center gap-4 mt-3'>
          {showDeleteButton && (
            <>
            <SmallButton color='bg-green-400 hover:bg-green-600' onClick={onEdit}>Editar</SmallButton>
            <SmallButton color='bg-red-400 hover:bg-red-600' onClick={onDelete}>
              Excluir
            </SmallButton>
          </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;