import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCareerIdentity } from "../services/api";

export default function Onboarding() {
  const [profileText, setProfileText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const data = await getCareerIdentity({ profileText });
    localStorage.setItem("careerIdentity", JSON.stringify(data));
    navigate("/explorer");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-brand-light to-white px-4">
      <div className="w-full max-w-xl bg-white/90 backdrop-blur-sm shadow-soft rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-brand-dark mb-2 text-center">
          Discover Your Career Identity
        </h1>
        <p className="text-gray-500 mb-6 text-center">
          Paste your résumé or describe your professional experience to uncover your career path.
        </p>
        <textarea
          className="border border-gray-300 focus:border-brand rounded-lg w-full p-3 h-48 resize-none outline-none transition"
          placeholder="Paste your CV or professional summary..."
          value={profileText}
          onChange={(e) => setProfileText(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-brand text-white font-semibold py-3 rounded-lg hover:bg-brand-dark transition"
        >
          Generate Career Identity
        </button>
      </div>
    </div>
  );
}
