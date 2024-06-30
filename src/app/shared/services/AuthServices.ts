import { CredentialModel } from "../models/CredentialsModel";
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

      