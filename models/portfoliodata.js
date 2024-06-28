import { Schema, model, models } from "mongoose";

const portfolioSchema = new Schema({
 
  userName: {
    type: String,
    required: [true, "Username is required"],
  },
  profileImg: { type: String },
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
      projectTags: String,
    },
  ],
  skills:{type:String},
  email:{type :String},
  githubLink:{type :String},
  linkedinLink:{type :String},
  instagramLink:{type :String},
  userID: { type: String, required: [true, "Userid is required"] },
});

const Portfolio = models.Portfolio || model("Portfolio", portfolioSchema);
export default Portfolio;
