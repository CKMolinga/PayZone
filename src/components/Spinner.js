import PulseLoader from "react-spinners/PulseLoader";

const Spinner = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <PulseLoader color={"#fff"} />
      </div>
    </div>
  );
};

export default Spinner;
