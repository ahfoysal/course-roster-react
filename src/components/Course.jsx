import { toast } from "react-toastify";
import PropTypes from "prop-types";
const Course = ({ course, addToCart, selectedItems }) => {
  const isAdded = selectedItems.find((item) => item.id === course.id);

  return (
    <div className="h-fit rounded-xl p-3.5 bg-white shadow-md">
      <figure className="w-full  h-[135px]    relative">
        <img
          src={course?.image}
          className="h-full w-full rounded-md"
          alt="product"
        />
      </figure>

      <div className="mt-2">
        <h3 className="text-neutral-950 max-w-prose line-clamp-1 font-semibold text-base ">
          {course?.title}
        </h3>
        <div className="flex gap-2  mt-2 mb-2 items-center">
          <p className="text-sm text-hero-gray line-clamp-3">
            {course?.headline}
          </p>
        </div>
      </div>
      <div className="flex mt-5  justify-between text-base">
        <div className="flex justify-between  gap-2">
          <img src="/sign.svg" alt="" />
          <p className="text-hero-gray line-clamp-1">Price : {course?.price}</p>
        </div>
        <div className="flex justify-between gap-2">
          <img src="/Frame.svg" alt="" />
          <p className="text-hero-gray">Credit : {course?.credit}hr</p>
        </div>
      </div>
      <div className="mt-5">
        {!isAdded ? (
          <button
            onClick={() => addToCart(course)}
            className="w-full py-1 bg-[#2F80ED] text-white text-base font-semibold rounded-md"
          >
            Select
          </button>
        ) : (
          <button
            onClick={() => toast.error("You already added this course.")}
            className="w-full py-1 bg-[#2f3d50] text-white text-base font-semibold rounded-md"
          >
            Selected
          </button>
        )}
      </div>
    </div>
  );
};

export default Course;
Course.propTypes = {
  course: PropTypes.object,
  addToCart: PropTypes.func,
  selectedItems: PropTypes.array,
};
