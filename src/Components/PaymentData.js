import { FaDollarSign } from "react-icons/fa";
import WEB from "../images/smallWeb.png";
import APP from "../images/smallApp.png";
import UIUX from "../images/smallUIUX.png";

const PaymentList = [
  {
    Photo: APP,
    Name: "Smith Rans",
    Course: "Fundamentals of Web Development",
    Invoice: "Invoice #240801",
    Price: "34",
    Dollar: <FaDollarSign />,
    Status: "Accepted",
    Date: "4 JAN 2023",
  },
  {
    Photo: UIUX,
    Name: "Toms Kid",
    Course: "Introduction to UI/UX Design",
    Invoice: "Invoice #240801",
    Price: "34",
    Dollar: <FaDollarSign />,
    Status: "Accepted",
    Date: "4 JAN 2023",
  },
  {
    Photo: WEB,
    Name: "Tomide William",
    Course: "App Web Development",
    Invoice: "Invoice #240801",
    Price: "34",
    Dollar: <FaDollarSign />,
    Status: "Accepted",
    Date: "4 JAN 2023",
  },
  {
    Photo: APP,
    Name: "Adeolu Babs",
    Course: "Fundamentals of Web Development",
    Invoice: "Invoice #240801",
    Price: "34",
    Dollar: <FaDollarSign />,
    Status: "Declined",
    Date: "4 JAN 2023",
  },
  {
    Photo: WEB,
    Name: "Chuks Emeka",
    Course: "App Development",
    Invoice: "Invoice #240801",
    Price: "58",
    Dollar: <FaDollarSign />,
    Status: "Declined",
    Date: "4 JAN 2023",
  },
  {
    Photo: WEB,
    Name: "Ben Bush",
    Course: "App Development",
    Invoice: "Invoice #240801",
    Price: "58",
    Dollar: <FaDollarSign />,
    Status: "Declined",
    Date: "4 JAN 2023",
  },
];

export default PaymentList;
