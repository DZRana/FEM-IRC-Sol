import Card from '../components/Card';
import illust from '../images/illustration-thank-you.svg';

const Thanks = ({ submittedRating }) => {
  return (
    <Card>
      <img
        className="w-36 h-24 mx-24 mt-9 mb-7 providedDesktop:w-40 providedDesktop:h-28 providedDesktop:mx-auto providedDesktop:mt-12 providedDesktop:mb-8"
        src={illust}
        alt="Thank You Illustration"
      />
      <div className="flex w-fit mx-auto bg-gray-700 rounded-full mb-6 providedDesktop:mb-8">
        <p className="px-3 py-1.5 text-providedOrange">
          You selected {submittedRating} out of 5
        </p>
      </div>
      <h1 className="text-center font-bold text-white text-2xl mx-6 mb-2.5 providedDesktop:mx-32">
        Thank You!
      </h1>
      <p className="text-center text-lightGrey text-sm mx-6 mb-9 providedDesktop:mx-10 providedDesktop:mb-11">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </Card>
  );
};

export default Thanks;
