import { useState } from "react";
import PortfolioForm from "../PortfolioForm";
import PortfolioPreview from "../PortfolioPreview";

export default function Portfolio() {
  const [formData, setFormData] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {!formData ? (
        <PortfolioForm onSubmit={setFormData} />
      ) : (
        <PortfolioPreview data={formData} />
      )}
    </div>
  );
}
