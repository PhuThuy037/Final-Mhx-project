import React from "react";
import { FormRow, FormRowSelect, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import axios from "axios";
export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    data.status = "Processing";
    if (data.startTime) {
      data.startTime = new Date(data.startTime).toISOString();
    }
    if (data.endTime) {
      data.endTime = new Date(data.endTime).toISOString();
    }

    try {
      await customFetch.post("/event/create", data);
      queryClient.invalidateQueries();

      toast.success("Event added successfully");
      return redirect("/dashboard/event-commnunity");
    } catch (error) {
      console.log(error);

      toast.error(error?.response?.data?.message);
      return error;
    }
  };
const AddEvent = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">add event</h4>
        <div className="form-center">
          <FormRow type="text" name="eventName" labelText="Tên dự án" />
          <FormRow type="text" name="description" labelText="Mô tả" />
          <FormRow
            type="datetime-local"
            name="startTime"
            labelText="Thời gian bắt đầu"
          />
          <FormRow
            type="datetime-local"
            name="endTime"
            labelText="Thời gian kết thúc"
          />
          <FormRow type="text" name="location" labelText="Đại điểm" />
          <FormRow
            type="text"
            name="numberOfPeople"
            labelText="Số lượng tham gia tối đa"
          />

          <FormRow type="text" name="universityName" labelText="Trường học" />
          <div className="form-row">
            <label htmlFor="avatar" className="form-label">
              Chọn ảnh (max 10 MB)
            </label>
            <input
              type="file"
              id="avatar"
              name="image"
              className="form-input"
              accept="image/*"
            />
          </div>
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddEvent;
