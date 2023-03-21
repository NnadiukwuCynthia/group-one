import React from "react";
import Table from "./Table";
const List = [
  {
    Name: "Smith Rans",
    Course: "Fundamentals of Web Development",
    Level: "Beginner",
    Contact: "+91 8920039",
    School: "Montessori College Hilton",
  },
  {
    Name: "Toms Kid",
    Course: "App Development",
    Level: "Intermidiate",
    Contact: "+44345 0039",
    School: "Teeside Basic School Cardiff",
  },
  {
    Name: "Tomide Williams",
    Course: "UI/UX Design Fundamentals",
    Level: "Advanced",
    Contact: "+3431 89239",
    School: "Borison Jnr School Newtown",
  },
  {
    Name: "Chuks Emeka",
    Course: "Fundamentals of Web Development",
    Level: "Intermidiate",
    Contact: "+91 8920039",
    School: "Montessori College Hilton",
  },
  {
    Name: "Adeolu Babs",
    Course: "App Development",
    Level: "Intermidiate",
    Contact: "+44345 0039",
    School: "Teeside Basic School Cardiff",
  },
  {
    Name: "Hans Daniel",
    Course: "Fundamentals of Web Development",
    Level: "Advance",
    Contact: "+91 8920039",
    School: "Newton Scope College Yilloln",
  },
  {
    Name: "Faith Adams",
    Course: "Fundamentals of Web Development",
    Level: "Beginner",
    Contact: "+91 8920039",
    School: "Montessori College Hilton",
  },
  {
    Name: "Ben Bush",
    Course: "App Development",
    Level: "Beginner",
    Contact: "+91 8920039",
    School: "Handscome College Georgia City",
  },
  {
    Name: "Black Smith",
    Course: "UI/UX Design Fundamentals",
    Level: "Beginner",
    Contact: "+91 8920039",
    School: "Jiks Stone College New York Town",
  },
];

const listHead = ["NAME", "COURSE", "LEVEL", "GUARDIAN CONTACT", "SCHOOL NAME"];
const TableData = () => {
  return <Table List={List} listHead={listHead} />;
};
export default TableData;
