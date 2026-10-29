export const submissionMessages = {
  unavailable: "Applications are temporarily unavailable. Please try again later.",
  saveFailed:
    "We could not save your application. Please try again later; repeated submissions are limited.",
  received:
    "Your submission has been securely received. Thank you for reaching out to GAVPS Foundation.",
  invalid: "Please check the form and try again.",
} as const;

export const SUBMISSION_LIMIT_PER_HOUR = 5;

export function submissionIsLimited(recentCount: number) {
  return recentCount >= SUBMISSION_LIMIT_PER_HOUR;
}

export function emptyToNull(value: string | undefined) {
  const trimmed = value?.trim() ?? "";
  return trimmed.length > 0 ? trimmed : null;
}
