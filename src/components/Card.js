const Card = ({ children }) => {
  return (
    <div className="font-opReg flex flex-col bg-darkBlue w-80 providedDesktop:w-96 h-96 rounded-[30px]">
      {children}
    </div>
  );
};

export default Card;
