import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FaClipboardList, FaGraduationCap, FaDollarSign } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { BiCopyAlt } from "react-icons/bi";

const MenuData = [
  {
    icon: <HiOutlineSquares2X2 />,
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <FaClipboardList />,
    name: "Courses",
    path: "/courses",
  },
  {
    icon: <FaGraduationCap />,
    name: "Students",
    path: "/students",
  },
  {
    icon: <FaDollarSign />,
    name: "Payment",
    path: "/payment",
  },
  {
    icon: <BiCopyAlt />,
    name: "Quiz/Assignment",
    path: "/quiz/assignment",
  },
  {
    icon: <AiFillMessage />,
    name: "Messages",
    path: "/messages",
  },
];

export default MenuData;
