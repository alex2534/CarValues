import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();

  // Using distructoring to get the data we need
  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    // This is a direved state
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { cars: filteredCars, name: form.name };
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
        <p>
          {" "}
          {car.name}- ${car.cost}{" "}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return <div className="car-list">{renderCars}</div>;
}

export default CarList;
