import { useState } from 'react';

import Survey from '../src/components/Survey';
import Thanks from '../src/components/Thanks';

const App = () => {
  const [submittedRating, setSubmittedRating] = useState(null);

  return (
    <div className="bg-veryDarkBlue h-screen flex items-center justify-center">
      {submittedRating === null ? (
        <Survey setSubmittedRating={setSubmittedRating} />
      ) : (
        <Thanks submittedRating={submittedRating} />
      )}
    </div>
  );
};

export default App;
