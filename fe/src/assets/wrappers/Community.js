import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  /* .project-card:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  } */

  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .project-title {
    font-size: 1.2em;
    margin: 0;
    color: #333;
  }

  .project-status {
    font-size: 0.9em;
    padding: 4px 8px;
    border-radius: 4px;
    color: #fff;
    background-color: #ffa726;
  }

  .project-description {
    font-size: 0.95em;
    color: #666;
    line-height: 1.5;
    margin-bottom: 16px;
  }

  .project-actions {
    display: flex;
    justify-content: space-between;
  }

  .project-actions button {
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9em;
    color: #fff;
    transition: background-color 0.3s ease;
  }
  .project-details {
    margin: 12px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .project-location,
  .project-date,
  .project-participants {
    font-size: 0.9em;
    color: #555;
    display: flex;
    align-items: center;
  }

  .project-location svg,
  .project-date svg,
  .project-participants svg {
    margin-right: 6px;
    color: #29b6f6;
  }
  .approve-btn {
    background-color: #4caf50;
  }

  .approve-btn:hover {
    background-color: #43a047;
  }

  .edit-btn {
    background-color: #29b6f6;
  }

  .edit-btn:hover {
    background-color: #039be5;
  }

  .reject-btn {
    background-color: #ef5350;
  }

  .reject-btn:hover {
    background-color: #e53935;
  }
  .appcet-color{
    background-color: #2bbbad;
  }
`;
export default Wrapper;
