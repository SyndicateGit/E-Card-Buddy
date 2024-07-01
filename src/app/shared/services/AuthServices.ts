import { getToken } from "../utils/TokenUtils";
import axiosInstance from "./AxiosInstance";

export async function login(credentials: any): Promise<any> {
  try {
      const response = await axiosInstance().post("/auth/login", credentials);
      localStorage.setItem("ECardBuddy jwt", response.data.data.accessToken);
  } catch (error:any) {
      console.log(error.response.data.error);
      throw error;
  }
}

export async function verifyToken(): Promise<any> {
  try {
    const token = getToken();
    const response = await axiosInstance().get('/auth/verifyToken', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const userId = response.data.data.userId;
    return userId;
  } catch (error:any) {
    console.log(error);
    throw error;
  }
}

export async function register(credentials: any): Promise<any> {
  try{
    const response = await axiosInstance().post("/auth/register", credentials);
    localStorage.setItem("ECardBuddy jwt", response.data.data.accessToken);
  } catch (error:any) {
    console.log(error.response.data.error);
    throw error;
  }
}