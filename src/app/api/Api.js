import supabase from "../../utils/supabase_Client";

export const AddItem = async (item) => {
  try {
    const { data, error } = await supabase
      .from("furnitures")
      .insert({ title: item.title, name: item.name, img: item.img, category: item.category });
    if (error) {
      console.error("Error in sending data to supabase", error);
    } else {
      alert("Data Sent sucessfully", data);
    }
    return { data, error };
  } catch (error) {
    console.error("An error occured: ", error);
  }
};

export const FetchItems = async () => {
  try {
    const { data, error } = await supabase.from("furnitures").select();
    if (error) {
      console.error("Error in fetching from the supabase");
    } else {
      console.log("Fetched Successfully! ", data);
    }
    return data;
  } catch (error) {
    console.error("An error occured! ", error);
  }
};
