import { useState } from "react";
import { useEffect } from "react";
import Courses from "./components/Courses";
import List from "./components/List";

function App() {
  const [courses, setCourses] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [creditTime, SetCreditTime] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <main className="text-stone-900 py-10 w-[93%] container mx-auto">
      <h2 className="text-2xl md:text-3xl text-center font-bold">
        Course Registration
      </h2>
      <div className="flex gap-6 flex-col md:flex-row">
        <div className="course-container w-full md:w-3/4">
          <Courses
            courses={courses}
            creditTime={creditTime}
            setSelectedItems={setSelectedItems}
            setTotalPrice={setTotalPrice}
            selectedItems={selectedItems}
            SetCreditTime={SetCreditTime}
          />
        </div>
        <div className="list-container w-full md:w-1/4 relative">
          <List
            creditTime={creditTime}
            totalPrice={totalPrice}
            selectedItems={selectedItems}
            setTotalPrice={setTotalPrice}
            setSelectedItems={setSelectedItems}
            SetCreditTime={SetCreditTime}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
