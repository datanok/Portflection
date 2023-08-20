import { Schema, model, models } from "mongoose";

const portfolioSchema = new Schema({
  //   userName: String,
  //   about: String,
  //   role: String,
  // experiences: [
  //   {
  //     company: String,
  //     tenure: String,
  //     designation: String,
  //     accomplishments: String,
  //   },
  // ],
  // projects: [
  //   {
  //     projectName: String,
  //     projectDesc: String,
  //     projectImg: String,
  //     projectTags: [String],
  //   },
  //   ],
  //   userID: String,
  userName: {
    type: String,
    required: [true, "Username is required"],
  },
  about: {
    type: String,
  },
  role: {
    type: String,
  },
  experiences: [
    {
      company: String,
      tenure: String,
      designation: String,
      accomplishments: String,
    },
  ],
  projects: [
    {
      projectName: String,
      projectDesc: String,
      projectImg: String,
      projectTags: [String],
    },
  ],
  userID: { type: String, required: [true, "Userid is required"] },
});

const Portfolio = models.Portfolio || model("Portfolio", portfolioSchema);
export default Portfolio;
