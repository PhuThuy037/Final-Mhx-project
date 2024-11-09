import React from "react";

import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";

const links = [
  {
    text: "Student",
    path: "all-by-university",
    icon: <MdQueryStats />,
  },

  {
    text: "Add Event",
    path: "add-event",
    icon: <ImProfile />,
  },
  {
    text: "Admin",
    path: "event-commnunity",
    icon: <MdAdminPanelSettings />,
  },
  {
    text: "Logout",
    path: "logout",
    icon: <MdAdminPanelSettings />,
  },
];

export default links;
