import ReviewCard from "../../components/ReviewCard";
import { reviews } from "../../constants";

const CustomerReviews = () => {
  return (
    <section
      className="bg-pale-blue px-8 py-12 sm:px-16 sm:py-24"
      id="customer-reviews"
    >
      <div className="mx-auto max-w-screen-wide">
        <h2 className="font-palanquin font-bold text-4xl text-center">
          What Our <span className="text-coral-red"> Customers </span> Say?
        </h2>
        <p className="mx-auto mt-4 max-w-lg font-montserrat text-lg text-slate-gray leading-7 text-center">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>

        <div className="flex flex-col lg:flex-row justify-evenly items-center gap-14 mt-24">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
