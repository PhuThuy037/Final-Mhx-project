import styled from "styled-components";

const Wrapper = styled.div`
  .event-card {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 16px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .event-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .img-container {
    position: relative;
  }

  .event-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 4px solid #ffa726;
  }

  .deadline-text {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    padding: 5px 10px;
    font-size: 1em;
    border-radius: 5px;
  }

  .event-info {
    padding: 16px;
  }

  .event-title {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 12px;
    color: #333;
  }

  .event-description {
    font-size: 1em;
    color: #555;
    margin-bottom: 16px;
    line-height: 1.5;
  }

  .event-details {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .event-location,
  .event-date {
    font-size: 0.9em;
    color: #777;
    display: flex;
    align-items: center;
  }

  .event-location svg,
  .event-date svg {
    margin-right: 6px;
  }

  .approve-btn {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .approve-btn:hover {
    background-color: #43a047;
  }
`;
export default Wrapper;
