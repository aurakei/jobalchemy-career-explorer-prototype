import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCareerIdentity } from "../services/api";
import Navbar from "../components/Navbar";

export default function Onboarding() {
  const [profileText, setProfileText] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleFileUpload = async () => {
    if (!selectedFile) return alert("Please select a file first");
    setLoading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.error) alert(data.error);
      else setProfileText(data.extractedText || "");
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    const data = await getCareerIdentity({ profileText });
    localStorage.setItem("careerIdentity", JSON.stringify(data));
    navigate("/explorer");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-brand-light to-white px-4 pt-24">
        <div className="w-full max-w-xl bg-white/90 backdrop-blur-sm shadow-soft rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-brand-dark mb-2 text-center">
            Discover Your Career Identity
          </h1>
          <p className="text-gray-500 mb-6 text-center">
            Paste your résumé or upload your document to generate your Career Identity.
          </p>

          {/* 🗂️ File upload */}
          <div className="mb-5">
            <label className="block mb-2 font-semibold text-gray-700">Upload file:</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx,.txt"
              onChange={handleFileChange}
              className="w-full border border-gray-300 p-2 rounded-lg text-sm"
            />
            <button
              onClick={handleFileUpload}
              type="button"
              disabled={loading || !selectedFile}
              className={`mt-3 w-full py-2 rounded-lg font-semibold text-white ${
                loading ? "bg-gray-400" : "bg-brand hover:bg-brand-dark"
              }`}
            >
              {loading ? "Extracting text..." : "Upload & Extract Text"}
            </button>
          </div>

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
    </>
  );
}
