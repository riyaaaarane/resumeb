import React, { useState } from "react"; // Ensure useState is imported
import axios from "axios";

function Details() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [about, setAbout] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [jobs, setJobs] = useState("");
  const [skills, setSkills] = useState("");
  const [extracurricular, setExtracurricular] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!"); // Debug message
  
    const formData = {
      firstName,
      lastName,
      about,
      contact,
      email,
      link,
      education,
      experience,
      jobs,
      skills,
      extracurricular,
    };

    console.log("Form Data: ", formData); // Check the data

    // Send POST request to the backend
    axios
      .post("http://localhost:3001/Submit", formData)
      .then((response) => {
        console.log("Data submitted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };
  

  return (
    <form onSubmit={handleSubmit}>
      {/* Name */}
      <div className="row mt-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            name="firstName"
            aria-label="First name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            name="lastName"
            aria-label="Last name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      {/* About */}
      <div className="form-floating mt-3">
        <textarea
          className="form-control"
          placeholder="About Yourself"
          name="about"
          onChange={(e) => setAbout(e.target.value)}
        />
        <label>About Yourself</label>
      </div>
      {/* Contact info */}
      <div className="row g-2 mt-3">
        <div className="col-sm">
          <input
            type="text"
            className="form-control"
            placeholder="Contact"
            name="contact"
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <input
            type="text"
            className="form-control"
            placeholder="Link"
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
      </div>
      {/* Education */}
      <div className="form-floating mt-3">
        <textarea
          className="form-control"
          placeholder="Education"
          name="education"
          onChange={(e) => setEducation(e.target.value)}
        />
        <label>Education</label>
      </div>
      {/* Experience */}
      <select
        className="form-select mt-3"
        name="experience"
        onChange={(e) => setExperience(e.target.value)}
      >
        <option value="">Experience</option>
        <option value="Fresher">Fresher</option>
        <option value="0-3 years">0-3 years</option>
        <option value="3-5 years">3-5 years</option>
        <option value="5+ years">5+ years</option>
      </select>
        {/* Work Exp/projects/internships */}
        <div className="form-floating mt-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: 100 }}
            defaultValue={""}
            onChange={(e) => setExperience(e.target.value)}
          />
          <label htmlFor="floatingTextarea2">Jobs/Internships/Courses</label>
        </div>
        {/* Skills */}
        <div className="form-floating mt-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            defaultValue={""}
            onChange={(e) => setSkills(e.target.value)}
          />
          <label htmlFor="floatingTextarea">Skills</label>
        </div>
        {/* Extracuricular */}
        <div className="form-floating mt-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            defaultValue={""}
            onChange={(e) => setExtracurricular(e.target.value)}
          />
          <label htmlFor="floatingTextarea">Extracurricular</label>
        </div>
        {/* Button */}
        <div class="d-grid gap-2 col-6 mx-auto mt-3">
          <button class="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
  );
}


export default Details;
