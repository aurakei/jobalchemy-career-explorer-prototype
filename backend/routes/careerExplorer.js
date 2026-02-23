import express from "express";
import { getAIIdentity, getAIRecommendations } from "../utils/aiClient.js";
import {
  validateIdentitySchema,
  validateRecommendationsSchema
} from "../utils/validateAIOutput.js";

const router = express.Router();

router.post("/identity", async (req, res) => {
  try {
    const { profileText, preferences } = req.body;
    const aiRes = await getAIIdentity(profileText, preferences);
    const validated = validateIdentitySchema(aiRes);
    res.json(validated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate identity." });
  }
});

router.post("/recommendations", async (req, res) => {
  try {
    const { identity, skills } = req.body;
    const aiRes = await getAIRecommendations(identity, skills);
    const validated = validateRecommendationsSchema(aiRes);
    res.json(validated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate recommendations." });
  }
});

export default router;
