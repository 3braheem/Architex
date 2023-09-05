import { pb } from "../lib/pocketbase";

let records: any;
try {
  records = await pb.collection("buildings").getFullList()
} catch (e: any) {
  throw new Error("DB Connection failed: " + e.message);
}

export const useBuildings = () => {
  console.log(records);
  return records;
}

