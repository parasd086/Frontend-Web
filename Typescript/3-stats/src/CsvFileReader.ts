import fs from "fs";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResults";

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    //returns an array of strings- ["...", "...",.....]
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map((row: string[]): any => {
        //we taking array of strings-> do some conversions -> then return that array of strings.
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6],
        ];
      });
  }
}
