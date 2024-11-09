import React, { useState, useEffect } from "react";
import Event from "./Event";
import Wrapper from "../assets/wrappers/JobsContainer";
import axios from "axios"; // Hoặc bạn có thể dùng fetch thay vì axios

const EventContainer = () => {
  const [events, setEvents] = useState([]); // Lưu dữ liệu sự kiện
  const [loading, setLoading] = useState(true); // Trạng thái loading
  const [error, setError] = useState(null); // Lưu thông tin lỗi nếu có

  useEffect(() => {
    // Hàm để fetch sự kiện từ API
    const fetchEvents = async () => {
      try {
        setLoading(true); // Bắt đầu loading
        const response = await axios.get("http://localhost:8080/event/all");
        console.log(response.data);
        // Gọi API
        setEvents(response.data); // Lưu dữ liệu sự kiện vào state
      } catch (error) {
        setError("Không thể tải sự kiện"); // Cập nhật lỗi nếu có
      } finally {
        setLoading(false); // Kết thúc loading
      }
    };

    fetchEvents(); // Gọi hàm fetch
  }, []); // Chỉ chạy khi component mount (lần đầu tiên)

  if (loading) return <div>Loading...</div>; // Hiển thị khi đang tải dữ liệu
  if (error) return <div>{error}</div>; // Hiển thị nếu có lỗi

  return (
    <Wrapper>
      <div className="jobs">
        {events.map((event) => (
          <Event key={event.id} {...event} />
        ))}
      </div>
    </Wrapper>
  );
};

export default EventContainer;
