import React, { Component } from "react";
import axios from "axios";
import Template1 from "./templates/Template1";
import Template2 from "./templates/Template2";
import "./TemplateSelection.css";

class TemplateSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: null, // Holds fetched data
      selectedTemplate: null, // Tracks the selected template
    };

    // Bind the selectTemplate method
    this.selectTemplate = this.selectTemplate.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/Submit")
      .then((response) => {
        if (response.data && typeof response.data === "object") {
          this.setState({ formData: response.data }); // Directly use the object if it's not an array
        } else {
          console.error("Unexpected response format:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  selectTemplate(templateName) {
    this.setState({ selectedTemplate: templateName });
  }

  renderTemplatePreviews() {
    const { formData } = this.state;

    return (
      <div className="template-preview-container">
        {/* Display Template 1 Preview */}
        <div className="template-preview">
          <h4>Template 1</h4>
          <div className="template-box">
            <Template1 formData={formData || {}} />
          </div>
          <button
            className="btn btn-primary mt-2"
            onClick={() => this.selectTemplate("Template1")}
          >
            Select Template 1
          </button>
        </div>

        {/* Display Template 2 Preview */}
        <div className="template-preview">
          <h4>Template 2</h4>
          <div className="template-box">
            <Template2 formData={formData || {}} />
          </div>
          <button
            className="btn btn-secondary mt-2"
            onClick={() => this.selectTemplate("Template2")}
          >
            Select Template 2
          </button>
        </div>
      </div>
    );
  }

  renderSelectedTemplate() {
    const { selectedTemplate, formData } = this.state;

    if (!formData) {
      return <p>Loading user data...</p>;
    }

    if (selectedTemplate === "Template1") {
      return <Template1 formData={formData} />;
    } else if (selectedTemplate === "Template2") {
      return <Template2 formData={formData} />;
    }
    return <p>Please select a template to preview.</p>;
  }

  render() {
    return (
      <div className="template-selection">
        {/* Centered subtitle */}
        <h2 className="subtitle">Select a Template</h2>

        {/* Render template previews */}
        {this.renderTemplatePreviews()}

        {/* Render selected template */}
        <div className="selected-template">
          {this.renderSelectedTemplate()}
        </div>
      </div>
    );
  }
}

export default TemplateSelection;
