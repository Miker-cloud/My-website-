// @tarians/ai — the AlphaDataCenter.ai service layer.
//
// Exposes a single `aiService` that the app uses for chat, recommend, verify,
// and personalize. Today it is bound to the MOCK adapter. To go live, swap the
// binding below for a real adapter implementing the same AiService contract.
// No real binding is included: the prototype uses zero paid providers.

import type { AiService } from "@tarians/types";
import { mockAiService } from "./mock-service";

export const aiService: AiService = mockAiService;

export { mockAiService };
