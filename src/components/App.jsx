import "bootstrap/dist/css/bootstrap.min.css";
import "../Assets/App.css";
import CarCard from "./CarCard";
import Nav from "./Nav";
import CustomPagination from "./CustomPagination";
import cars from "../cars";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const filteredCars = cars.filter((car) =>
    car.carModel.toLowerCase().includes(searchTerm.toString().toLowerCase())
  );

  const handleSearchTermChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCars = filteredCars.slice(startIndex, endIndex);

  return (
    <>
      <div className="nav-custom ">
        <Nav onSearchTermChange={handleSearchTermChange} />
      </div>
      <div className="container">
        <div className="row">
          {paginatedCars.map((car) => (
            <div
              key={car.id}
              className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex justify-content-center mb-2"
            >
              <CarCard
                id={car.id}
                carModel={car.carModel}
                carImg={car.carImg}
                releaseYear={car.releaseYear}
                seater={car.seater}
                fuel={car.fuel}
                mileage={car.mileage}
                carMode={car.carMode}
                rent={car.rent}
              />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-4">
          <CustomPagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredCars.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
}
export default App;
