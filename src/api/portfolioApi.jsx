import api from "../lib/axiosApi";

// Get my portfolio
export async function getMyPortfolio() {
  try {
    const res = await api.get("/portfolios/me");
    return res.data;
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    throw error;
  }
}

// Save or update my portfolio (text fields only)
export async function saveMyPortfolio(data) {
  try {
    // Only keep text fields
    const textData = { ...data };
    delete textData.uploads; // exclude uploads (files)

    const res = await api.post("/portfolios", textData);
    return res.data;
  } catch (error) {
    console.error("Error saving portfolio:", error);
    throw error;
  }
}
