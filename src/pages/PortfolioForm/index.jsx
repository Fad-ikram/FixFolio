import { useState } from "react";
import InputField from "../../components/PortfolioBuilder/InputField";
import DragDropUpload from "../../components/PortfolioBuilder/DragDropUpload";
import IntroSentence from "../../components/PortfolioBuilder/IntroSentence";

const PortfolioForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
    description: "",
    studies: "",
    city: "",
    country: "",
    skills: "",
    tools: "",
    role: "",
    linkedin: "",
    github: "",
    uploads: {
      profilePic: null,
      cv: [],
      projects: [],
      gallery: [],
    },
  });

  const [uploads, setUploads] = useState({
    cv: [],
    projects: [],
    websites: [],
    profilePic: null,
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleUpload = (type, files) => {
    if (type === "profilePic") {
      setUploads((prev) => ({ ...prev, profilePic: files[0] }));
    } else {
      setUploads((prev) => ({ ...prev, [type]: files }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...form, uploads });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-beige mt-12 pt-4 rounded-md mx-auto max-w-5xl shadow-lg "
    >
      <h2 className="text-2xl font-bold text-dark-purple text-center my-1">
        Create Your Portfolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <InputField
          label="First Name"  
          value={form.firstName}
          onChange={(v) => handleChange("firstName", v)}
        />
        <InputField
          label="Last Name"
          value={form.lastName}
          onChange={(v) => handleChange("lastName", v)}
        />
      </div>

      <InputField
        label="Role"
        placeholder="e.g. Web Developer"
        value={form.role}
        onChange={(v) => handleChange("role", v)}
      />
      <InputField
        label="Email"
        type="email"
        value={form.email}
        onChange={(v) => handleChange("email", v)}
      />
      <InputField
        label="Bio"
        placeholder="Main interests"
        type="textarea"
        value={form.bio}
        onChange={(v) => handleChange("bio", v)}
      />
      <InputField
        label="Description"
        placeholder="Future Plans"
        type="textarea"
        value={form.description}
        onChange={(v) => handleChange("description", v)}
      />
      <InputField
        label="Studies"
        value={form.studies}
        onChange={(v) => handleChange("studies", v)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <InputField
          label="City"
          value={form.city}
          onChange={(v) => handleChange("city", v)}
        />
        <InputField
          label="Country"
          value={form.country}
          onChange={(v) => handleChange("country", v)}
        />
      </div>

      <InputField
        label="Skills"
        placeholder="HTML, CSS, JavaScript"
        value={form.skills}
        onChange={(v) => handleChange("skills", v)}
      />
      <InputField
        label="Tools & Technologies"
        name="tools"
        value={form.tools}
        onChange={(v) => handleChange("tools", v)}
        placeholder="e.g., Figma, Photoshop, Canva..."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <InputField
          label="LinkedIn URL"
          name="linkedin"
          type="url"
          value={form.linkedin}
          onChange={(v) => handleChange("linkedin", v)}
        />

        <InputField
          label="GitHub URL"
          name="github"
          type="url"
          value={form.github}
          onChange={(v) => handleChange("github", v)}
        />
      </div>
      <DragDropUpload
        label="Upload Profile Picture"
        type="profilePic"
        onUpload={(files) => handleUpload("profilePic", files)}
      />

      <DragDropUpload
        label="Your CV"
        type="cv"
        onUpload={(files) => handleUpload("cv", files)}
      />
      <DragDropUpload
        label="Project Files"
        type="projects"
        onUpload={(files) => handleUpload("projects", files)}
      />
      <DragDropUpload
        label="Upload Portfolio Images"
        type="websites"
        onUpload={(files) => handleUpload("gallery", files)}
      />

      <div className="flex justify-center mt-2">
        <button
          type="submit"
          className="bg-purple text-beige px-6 py-2 rounded transition duration-700 hover:bg-dark-purple"
        >
          Preview Portfolio
        </button>
      </div>
    </form>
  );
};

export default PortfolioForm;
