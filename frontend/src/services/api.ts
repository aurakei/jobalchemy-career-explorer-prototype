export async function getCareerIdentity(payload: any) {
  const res = await fetch("http://localhost:5000/api/career-explorer/identity", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function getCareerRecommendations(payload: any) {
  const res = await fetch("http://localhost:5000/api/career-explorer/recommendations", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}
