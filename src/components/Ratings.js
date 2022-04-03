import { useState } from 'react';

const Ratings = ({ setRating }) => {
  const [active, setActive] = useState(null);
  const rates = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-row justify-evenly">
      {rates.map((rate) => {
        return (
          <button
            className={`text-lightGrey bg-gray-700 font-bold rounded-full w-11 h-11 hover:bg-lightGrey hover:text-white ${
              active === rate
                ? 'bg-providedOrange hover:bg-providedOrange text-white'
                : ''
            } providedDesktop:w-12 providedDesktop:h-12`}
            onClick={(e) => {
              setRating(e.target.innerText);
              setActive(rate);
            }}
            key={rate}
          >
            {rate}
          </button>
        );
      })}
    </div>
  );
};

export default Ratings;
