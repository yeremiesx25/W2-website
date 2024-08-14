function CardBeneficioPower({ nombreBeneficio, iconBeneficio }) {
  return (
    <div className='w-full md:w-80 h-72 bg-white text-gray-700 flex flex-col items-center justify-around py-8 rounded-xl mx-auto shadow-md'>
      <img className='w-36 h-36 mb-4' src={iconBeneficio} alt={nombreBeneficio} />
      <h2 className='px-16 text-md font-regular font-dmsans mb-4 text-center'>{nombreBeneficio}</h2>
    </div>
  );
}

export default CardBeneficioPower;