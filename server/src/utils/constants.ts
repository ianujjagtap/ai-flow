export const STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const MESSAGES = {
  AI: {
    SUCCESS: "AI response generated successfully",
    EMPTY_RESPONSE: "OpenRouter returned an empty response",
    API_ERROR: "OpenRouter API error",
  },
  FLOW: {
    SAVED: "Flow saved successfully",
    FETCHED: "Flows fetched successfully",
    SAVE_ERROR: "Failed to save flow",
  },
  ERROR: {
    INTERNAL_SERVER_ERROR: "Internal server error",
    VALIDATION_ERROR: "Validation error",
    NOT_FOUND: "Resource not found",
  },
} as const;
