import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/JobsContainer";
import Community from "./Community";

const CommunityContainer = () => {
  const [data, setData] = useState([]); // State để lưu dữ liệu
  const [loading, setLoading] = useState(true); // Trạng thái loading
  const [error, setError] = useState(null); // Lưu thông báo lỗi nếu có

  useEffect(() => {
    // Hàm fetch dữ liệu từ API
    const fetchCommunity = async () => {
      try {
        setLoading(true); // Bắt đầu loading
        const response = await fetch("http://localhost:8080/event/all"); // Gọi API
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json(); // Chuyển đổi response thành JSON
        setData(data); // Lưu dữ liệu vào state
      } catch (error) {
        setError("Không thể tải dữ liệu"); // Nếu có lỗi, cập nhật thông báo lỗi
      } finally {
        setLoading(false); // Kết thúc loading
      }
    };

    fetchCommunity(); // Gọi hàm fetch
  }, []); // Chỉ chạy khi component mount

  if (loading) return <div>Loading...</div>; // Hiển thị khi dữ liệu đang được tải
  if (error) return <div>{error}</div>; // Hiển thị thông báo lỗi nếu có

  return (
    <Wrapper>
      <div className="jobs">
        {data.map((e) => (
          <Community key={e.id} {...e} /> // Truyền dữ liệu xuống component Community
        ))}
      </div>
    </Wrapper>
  );
};

export default CommunityContainer;
