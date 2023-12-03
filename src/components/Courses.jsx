import Course from "./Course";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
const Courses = ({
  courses,
  setSelectedItems,
  setTotalPrice,
  selectedItems,
  SetCreditTime,
  creditTime,
}) => {
  const addToCart = (obj) => {
    const newTotalCreditTime = creditTime + obj.credit;
    if (newTotalCreditTime > 20) {
      return toast.error("Credit limit reached. You cannot add more than 20.");
    }
    toast.success("Course added to the cart successfully.");
    setSelectedItems((prevSelectedItems) => [...prevSelectedItems, obj]);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + obj.price);
    SetCreditTime((prevTotalTime) => prevTotalTime + obj.credit);
  };

  return (
    <div className=" grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 mt-6  md:mt-12">
      {courses?.map((course, idx) => (
        <Course
          key={idx}
          course={course}
          addToCart={addToCart}
          selectedItems={selectedItems}
        />
      ))}
    </div>
  );
};

export default Courses;
Courses.propTypes = {
  courses: PropTypes.array,
  selectedItems: PropTypes.array,
  creditTime: PropTypes.number,
  setSelectedItems: PropTypes.func,
  SetCreditTime: PropTypes.func,
  setTotalPrice: PropTypes.func,
};
