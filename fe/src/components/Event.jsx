import React from "react";
import Wrapper from "../assets/wrappers/Event";
import { FaLocationArrow, FaCalendarAlt } from "react-icons/fa";
import img from "../assets/images/avatar-1.jpg";
const Event = ({ eventName, description, location, endTime, startTime }) => {
  return (
    <Wrapper>
      <div className="event-card">
        {/* Image Container */}
        <div className="img-container">
          <img src={img} alt={eventName} className="event-image" />
          <p className="deadline-text">{endTime || "Chưa có thời hạn"}</p>
        </div>

        {/* Event Info */}
        <div className="event-info">
          <h3 className="event-title">{eventName}</h3>
          <p className="event-description">
            {description ||
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim veniam ea quam"}
          </p>

          {/* Event Details */}
          <div className="event-details">
            <p className="event-location">
              <FaLocationArrow /> {location || "Chưa có địa điểm"}
            </p>
            <p className="event-date">
              <FaCalendarAlt /> {endTime || "Chưa có ngày"}
            </p>
          </div>

          {/* Approve Button */}
          <button className="btn approve-btn">Tham gia</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Event;
