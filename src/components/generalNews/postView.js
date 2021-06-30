import axios from "axios";

export async function addView(newsID) {
  try {
    const data = {
      id: newsID,
    };
    const response = await axios.post(
      "https://api.tv24africa.com/api/v1/add/view",
      data
    );
  } catch (error) {
    console.log(error);
  }
}
