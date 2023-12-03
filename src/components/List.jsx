import PropTypes from "prop-types";
import { toast } from "react-toastify";

const List = ({
  creditTime,
  totalPrice,
  selectedItems,
  SetCreditTime,
  setTotalPrice,
  setSelectedItems,
}) => {
  const removeFromCart = (obj) => {
    const updatedSelectedItems = selectedItems.filter((item) => item !== obj);
    setSelectedItems(updatedSelectedItems);
    setTotalPrice((prevTotalPrice) => prevTotalPrice - obj.price);
    SetCreditTime((prevTotalTime) => prevTotalTime - obj.credit);
    toast.success("Course removed from the cart successfully.");
  };
  return (
    <div className="p-6 md:sticky top-24 mt-12 static bg-white rounded-xl  shadow-md">
      <h2 className="text-lg text-[#2F80ED] font-semibold">
        Credit Hour Remaining {20 - creditTime} hr
      </h2>
      <div className="divider my-2"></div>
      <h1 className="text-xl font-bold mb-4">Course Name</h1>
      <ul className="my-3 text-hero-gray  ">
        {selectedItems.length <= 0 && (
          <li className="  mt-2  ">No Course Selected</li>
        )}
        {selectedItems.map((item, idx) => (
          <li
            key={idx}
            className="shadow-sm line-clamp-1 relative group transition duration-500 ease-out  mt-2 bg-[#f3f3f3] rounded-md p-1.5"
          >
            {/* <span className="indicator-item badge">.</span> */}
            {idx + 1}. {item.title}
            <button
              onClick={() => removeFromCart(item)}
              className=" absolute right-0 top-0 bg-[#FD4449] h-full text-sm pl-3 pr-1 font-medium rounded-l-xl text-white
              duration-500 translate-x-full group-hover:translate-x-0 ease group-hover:opacity-100 opacity-0 "
            >
              Remove
            </button>
          </li>
        ))}
      </ul>{" "}
      <div className="divider my-2"></div>
      <h2 className="text-lg  text-hero-black font-medium">
        Total Credit Hour : {creditTime}
      </h2>
      <div className="divider my-2"></div>
      <h2 className="text-lg  text-hero-black font-bold">
        Total Price : {totalPrice} USD
      </h2>
    </div>
  );
};

export default List;
List.propTypes = {
  selectedItems: PropTypes.array,
  creditTime: PropTypes.number,
  totalPrice: PropTypes.number,
  setSelectedItems: PropTypes.func,
  SetCreditTime: PropTypes.func,
  setTotalPrice: PropTypes.func,
};
