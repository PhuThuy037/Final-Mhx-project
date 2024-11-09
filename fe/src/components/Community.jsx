import React from "react";
import { FaLocationArrow, FaCalendarAlt, FaUserFriends } from "react-icons/fa";
import Wrapper from "../assets/wrappers/Community";
import customFetch from "../utils/customFetch"; // Giả sử bạn có customFetch
import { toast } from "react-toastify";

const Community = ({
  eventName,
  description,
  startTime,
  endTime,
  status,
  numberOfPeople,
  universityName,
  location,
  id,
}) => {
  const handleAccept = async () => {
    try {
      await customFetch.get(`/event/accept/${id}`);
      toast.success("Sự kiện đã được duyệt thành công!");
      // Nếu có state quản lý danh sách sự kiện, bạn có thể cập nhật lại UI hoặc invalidate query (nếu dùng React Query)
    } catch (error) {
      toast.error("Duyệt sự kiện thất bại!");
      console.error(error);
    }
  };

  return (
    <Wrapper>
      <div className="project-card">
        <div className="project-header">
          <h2 className="project-title">{eventName}</h2>
          <p
            className={
              status == "Appcept"
                ? "project-status appcet-color"
                : "project-status"
            }
          >
            {status || "Đang chờ duyệt"}
          </p>
        </div>

        <p className="project-description">{description}</p>
        <div className="project-details">
          <p className="project-location">
            <FaLocationArrow /> Địa điểm: {location}
          </p>
          <p className="project-date">
            <FaCalendarAlt /> Bắt đầu: {startTime}
          </p>
          <p className="project-date">
            <FaCalendarAlt /> Kết thúc: {endTime}
          </p>
          <p className="project-participants">
            <FaUserFriends /> Số lượng tham gia: {numberOfPeople}
          </p>
        </div>
        <div className="project-actions">
          <button className="btn approve-btn" onClick={handleAccept}>
            Duyệt
          </button>
          <button className="btn edit-btn">Chỉnh sửa</button>
          <button className="btn reject-btn">Từ chối</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Community;
