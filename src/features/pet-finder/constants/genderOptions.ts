export const GENDER_OPTIONS = ["Male", "Female", "Both"] as const;

export type Gender = (typeof GENDER_OPTIONS)[number];
