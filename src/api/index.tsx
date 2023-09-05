import { pb } from "../lib/pocketbase";

let records: any;
try {
  const authData = await pb.admins.authWithPassword(import.meta.env.VITE_PB_ADMIN, import.meta.env.VITE_PB_PASS)
  records = await pb.collection("buildings").getFullList()
} catch (e: any) {
  throw new Error("DB Connection failed: " + e.message);
}

export const useBuildings = () => {
  console.log(records);
  return records;
}

