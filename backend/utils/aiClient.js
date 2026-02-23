export async function getAIIdentity(profileText, preferences) {
  // Mocked for demo purposes
  return {
    identityStatement: "Analytical Product Strategist with a focus on user experience and business growth.",
    skills: ["Product management", "UX strategy", "Analytics", "Cross-functional leadership"],
    confidence: 0.85,
    notes: "Parsed from marketing and product experience."
  };
}

export async function getAIRecommendations(identity, skills) {
  return {
    clusters: [
      {
        name: "Closest Matches",
        roles: [
          { title: "Product Manager", fitReason: "Strong alignment with leadership and analytics experience." },
          { title: "Growth Product Lead", fitReason: "Data-driven mindset fits perfectly for growth roles." }
        ]
      },
      {
        name: "Adjacent Pivots",
        roles: [
          { title: "Customer Success Strategist", fitReason: "Experience leading user-centric initiatives applies." },
          { title: "Operations Manager", fitReason: "Demonstrated leadership and project oversight skills." }
        ]
      },
      {
        name: "Stretch Roles",
        roles: [
          { title: "Head of Product", fitReason: "Leadership potential and strategy experience indicate readiness." }
        ]
      }
    ]
  };
}
