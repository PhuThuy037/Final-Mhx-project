import styled from "styled-components";

const Wrapper = styled.article`
  margin-left: 1rem;

  margin-bottom: 1.5rem;
  display: flex;
  gap: 1rem;
  border: 2px solid #dcdcdc;
  border-radius: 8px;
  padding: 5px;
  h3 {
    text-align: center;
    font-size: 1.5rem;
    color: #333;
    font-weight: 600;
  }
  .img-container {
    position: relative;
    flex-shrink: 0; /* Đảm bảo ảnh không bị co lại */
    width: 7rem;
    height: 100%;

    /* Để ảnh chiếm toàn bộ chiều cao */
  }

  .img-container img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .deadline-text {
    line-height: 2;
    position: absolute;
    top: 0px;
    left: 0px;
    color: white; /* Màu chữ */
    background-color: red; /* Nền mờ để dễ đọc */
    padding: 3px 6px;
    border-radius: 3px;
    font-size: 0.8rem;
    border: 1px solid red; /* Viền đỏ xung quanh chữ */
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .describe {
    max-width: 400px;
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
    letter-spacing: 0.2px;
    word-wrap: break-word;
    word-break: break-word;
    overflow-wrap: break-word;
  }
  .footer {
    margin-top: 1rem;
    justify-content: space-between;
  }
`;

export default Wrapper;
