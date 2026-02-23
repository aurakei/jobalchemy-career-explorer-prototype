import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCareerRecommendations } from "../services/api";

export default function Explorer() {
  const [recommendations, setRecommendations] = useState<any>(null);
  const identity = JSON.parse(localStorage.getItem("careerIdentity") || "{}");

  useEffect(() => {
    async function load() {
      const res = await getCareerRecommendations({
        identity: identity.identityStatement,
        skills: identity.skills,
      });
      setRecommendations(res);
    }
    load();
  }, []);

  if (!identity.identityStatement) return <p>No career identity found.</p>;
  if (!recommendations) return <p>Loading recommendations...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light to-white px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-white shadow-soft rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-2">
            Your Career Identity
          </h2>
          <p className="text-gray-700 mb-4">{identity.identityStatement}</p>
          <div className="flex flex-wrap gap-2">
            {identity.skills?.map((s: string) => (
              <span
                key={s}
                className="bg-brand/10 text-brand-dark px-3 py-1 rounded-full text-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {recommendations.clusters.map((c: any) => (
          <div key={c.name} className="bg-white shadow-soft rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-brand-dark mb-4">
              {c.name}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {c.roles.map((r: any) => (
                <div
                  key={r.title}
                  className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition"
                >
                  <h4 className="font-bold text-gray-800 mb-1">{r.title}</h4>
                  <p className="text-gray-600 text-sm">{r.fitReason}</p>
                  <button className="mt-3 text-sm text-brand font-medium hover:underline">
                    Apply via JobAlchemy →
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
