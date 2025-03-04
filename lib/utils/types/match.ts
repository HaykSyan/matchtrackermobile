import { MatchStatus } from "../enums/match-status.enum";

export type Match = {
  time: string;
  title: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
};

export type Team = {
  name: string;
  players: Player[];
  points: number;
  place: number;
  total_kills: number;
};

export type Player = {
  username: string;
  kills: number;
};

export type Score = {
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
};
