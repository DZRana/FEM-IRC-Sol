import { useState } from 'react';

import Card from '../components/Card';
import StarIcon from '../images/icon-star.svg';
import Ratings from '../components/Ratings';

const Survey = ({ setSubmittedRating }) => {
  const [rating, setRating] = useState(null);

  const ratingSubmit = () => {
    setSubmittedRating(rating);
  };

  return (
    <Card>
      <div className="mt-6 mr-64 mb-4 ml-6 providedDesktop:mt-8 providedDesktop:mb-8">
        <img
          className="bg-gray-700 rounded-full w-10 h-10 p-3"
          src={StarIcon}
          alt="Star Icon"
        />
      </div>
      <h1 className="font-bold text-white text-2xl mx-6 mb-2.5 providedDesktop:ml-8 providedDesktop:mr-44 providedDesktop:mb-2">
        How did we do?
      </h1>
      <p className="text-lightGrey text-sm mx-6 mb-6 providedDesktop:ml-8 providedDesktop:mr-10">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Ratings rating={rating} setRating={setRating} />
      <div className="flex justify-center mt-6 mb-8 providedDesktop:mt-8 ">
        <button
          className="w-11/12 h-11 text-white font-bold text-sm py-3 rounded-full bg-providedOrange active:bg-white active:text-providedOrange"
          onClick={() => ratingSubmit()}
        >
          S U B M I T
        </button>
      </div>
    </Card>
  );
};

export default Survey;
