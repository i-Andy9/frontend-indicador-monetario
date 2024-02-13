import dotenv from "dotenv";
dotenv.config();

export const config = {
  HTTPS: {
    URL_BASE_BACK: process.env.URL_BASE_BACK,
  },
};
