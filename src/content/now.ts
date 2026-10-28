import { PROFILE } from "./profile";

export interface NowDetail {
  term: string;
  value: string;
}

export const NOW = {
  status: "Open to work",
  details: [
    { term: "Based in", value: PROFILE.location },
    { term: "Work mode", value: "Remote · Hybrid" },
    { term: "Building", value: "RepCheck — on-device exercise analysis" },
  ] satisfies NowDetail[],
} as const;
