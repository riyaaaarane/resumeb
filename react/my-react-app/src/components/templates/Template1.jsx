import "./Template1.css";


const Template1 = ({ formData }) => {
  if (!formData) {
    return <p>Loading...</p>;
  }

  // Ensure skills is an array
  const skills = Array.isArray(formData.skills)
    ? formData.skills
    : typeof formData.skills === "string"
    ? formData.skills.split(",")
    : [];

  return (
    <div className="template1">
      <h1>
        {formData.firstName} {formData.lastName}
      </h1>
      <p>
        <b>About:</b> {formData.about}
      </p>
      <p>
        <b>Contact:</b> {formData.contact}
      </p>
      <p>
        <b>Email:</b> {formData.email}
      </p>
      <h3>Education</h3>
      <p>{formData.education}</p>
      <h3>Experience</h3>
      <p>{formData.experience}</p>
      <h3>Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill.trim()}</li>
        ))}
      </ul>
      <h3>Extracurricular</h3>
      <p>{formData.extracurricular}</p>
    </div>
  );
};

export default Template1;
