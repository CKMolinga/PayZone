import { Link } from "react-router-dom";
import ComingSoonIllustration from "../assets/coming-soon.svg";

const ComingSoon = () => {
  let countDate = new Date("Aug 30, 2022 00:00:00").getTime();

  function countDown() {
    let now = new Date().getTime();
    let gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let days = Math.floor(gap / day);
    let hours = Math.floor((gap % day) / hour);
    let minutes = Math.floor((gap % hour) / minute);
    let seconds = Math.floor((gap % minute) / second);

    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
  }

  setInterval(function () {
    countDown();
  }, 1000);

  return (
    <div className="coming-soon-container">
      <div className="content">
        <h3 className="title">Coming Soon</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          explicabo labore neque, odit ipsam natus ipsa voluptates qui autem
          nostrum, error dicta obcaecati eveniet saepe atque. Dignissimos quos
          incidunt inventore.
        </p>
        <div className="count-down">
          <div className="box">
            <h3 id="day">00</h3>
            <span>days</span>
          </div>
          <div className="box">
            <h3 id="hour">00</h3>
            <span>minutes</span>
          </div>
          <div className="box">
            <h3 id="minute">00</h3>
            <span>minutes</span>
          </div>
          <div className="box">
            <h3 id="second">00</h3>
            <span>seconds</span>
          </div>
        </div>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>

      <div className="image">
        <img src={ComingSoonIllustration} alt="coming-soon" />
      </div>
    </div>
  );
};

export default ComingSoon;
