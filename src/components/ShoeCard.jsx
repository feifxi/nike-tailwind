const ShoeCard = ({ imgURL, changeBigShoeImage, currentBigShoe }) => {
  return (
    <div
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 ${
        imgURL.bigShoe === currentBigShoe
          ? "border-coral-red"
          : "border-transparent"
      } `}
      onClick={()=>{changeBigShoeImage(imgURL.bigShoe)}}
    >
      <div className="flex justify-center items-center p-5 bg-card bg-center bg-cover rounded-xl sm:w-40 sm:h-40">
        <img
          src={imgURL.thumbnail}
          alt="shoe colletion"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
