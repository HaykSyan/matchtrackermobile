import axios from "../packages/axios";
import { Match } from "../utils/types/match";

export const fetchMatches = async (url: string): Promise<Match[]> => {
  const { data }: { ok: boolean; data: { data: { matches: Match[] } } } =
    await axios.get(url);
  return data.data.matches;
};
