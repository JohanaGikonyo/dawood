import { FetchItems } from "../api/Api";

export const UploadedAntics = async () => {
  const data = await FetchItems();
  const uploaded_antics = data.filter((item) => item.category === "Antics Sofas");
  return uploaded_antics;
};
export const UploadedNew = async () => {
  const data = await FetchItems();
  const uploaded_New = data.filter((item) => item.category === "New Furnitures");
  return uploaded_New;
};
export const UploadedOffice = async () => {
  const data = await FetchItems();
  const uploaded_Office = data.filter((item) => item.category === "Office Furnitures");
  return uploaded_Office;
};
export const UploadedPillow = async () => {
  const data = await FetchItems();
  const uploaded_Pillow = data.filter((item) => item.category === "Pillows");
  return uploaded_Pillow;
};
export const UploadedReady = async () => {
  const data = await FetchItems();
  const uploaded_Ready = data.filter((item) => item.category === "Ready made Furnitures");
  return uploaded_Ready;
};
export const UploadedReclinners = async () => {
  const data = await FetchItems();
  const uploaded_Reclinners = data.filter((item) => item.category === "Imported recliners");
  return uploaded_Reclinners;
};
export const UploadedRepair = async () => {
  const data = await FetchItems();
  const uploaded_Repair = data.filter((item) => item.category === "Repair Furnitures");
  return uploaded_Repair;
};
export const UploadedBeds = async () => {
  const data = await FetchItems();
  const uploaded_Beds = data.filter((item) => item.category === "Beds & Beddings");
  return uploaded_Beds;
};
export const UploadedBenches = async () => {
  const data = await FetchItems();
  const uploaded_Benches = data.filter((item) => item.category === "Dinning Chairs & tables");
  return uploaded_Benches;
};
