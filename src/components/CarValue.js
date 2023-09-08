import { useDispatch, useSelector } from "react-redux";


function CarValue() {

    const totalCost = useSelector(({ cars: { data,
        searchTerm
    }
    }) => {
        const filteredCars = data.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        // The inicial value of the acc is 0
        return filteredCars.reduce((acc, car) => {
            return acc + car.cost;
        }, 0);
    });

    return <div className="car-value">Total cost: ${totalCost}</div>
}

export default CarValue;
