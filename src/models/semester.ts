import { Schema } from "mongoose";
type TMonth =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";
type TSemesterCode = "01" | "02" | "03";
type TSemesterName = "Autumn" | "Summer" | "Fall";
const months: Array<TMonth> = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const semesterName: Array<TSemesterName> = ["Autumn", "Summer", "Fall"];
const semesterCode: Array<TSemesterCode> = ["01", "02", "03"];
type TSemester = {
  name: TSemesterName;
  year: string;
  code: TSemesterCode;
  startMonth: TMonth;
  endMonth: TMonth;
};

const semesterSchema = new Schema<TSemester>({
  name: {
    type: String,
    require: true,
    enum: semesterName,
  },
  year: {
    type: String,
    require: true,
  },
  code: {
    type: String,
    require: true,
    enum:semesterCode,
  },
  startMonth: {
    type: String,
    require: true,
    enum:months,
  },
  endMonth: {
    type: String,
    require: true,
    enum: months,
  },
},{
    timestamps:true,
});
