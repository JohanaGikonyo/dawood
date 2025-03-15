import supabase from "../../utils/supabase_Client";

export const AddItem = async (item) => {
  try {
    if (item.title === "" || item.name === "" || item.img === "" || item.category === "") {
      alert("Fill all fields!");
    } else {
      const { data, error } = await supabase
        .from("furnitures")
        .insert({ title: item.title, name: item.name, img: item.img, category: item.category });
      if (error) {
        console.error("Error in sending data to supabase", error);
      } else {
        alert("Data Sent sucessfully", data);
      }
      return { data, error };
    }
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
      console.log("Fetched Successfully! ");
    }
    return data;
  } catch (error) {
    console.error("An error occured! ", error);
  }
};
