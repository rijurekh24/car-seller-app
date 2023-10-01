import "../Assets/CarCard.css";

const CarCard = ({
  carImg,
  carModel,
  releaseYear,
  seater,
  mileage,
  fuel,
  carMode,
  rent,
}) => {
  return (
    <div>
      <div className="card shadow-sm m-3">
        <div className="car-img d-flex justify-content-center align-items-center text-center">
          <img src={carImg} alt="" className="img-fluid" />
        </div>

        <div className="car-info d-flex justify-content-between">
          <div>
            <h4>{carModel}</h4>
          </div>

          <div>
            <p> {releaseYear}</p>
          </div>
        </div>

        <div className="car-details d-flex">
          <div className="line1">
            <p>
              <i className="fa-solid fa-user-group"></i> {seater} people
            </p>
            <p>
              <i className="fa-solid fa-gauge"></i> {mileage}
            </p>
          </div>
          <div className="line2">
            <p>
              <i className="fa-solid fa-gas-pump"></i> {fuel}
            </p>
            <p>
              <i className="fa-solid fa-car"></i> {carMode}
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <hr />
        </div>

        <div className="car-rent d-flex justify-content-between">
          <div>
            <h4>
              ${rent}
              <span>/month</span>
            </h4>
          </div>
          <div>
            <i className="fa-regular fa-heart"></i>
            <button className="btn btn-info ms-1">Rent now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
