import axios from "axios";

const BASE_URL = "https://arun-ecommerce-api.com/api/";
const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWRiNzEyZDA5OGI2OGUyMzc2MWZiMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjUyNzU2NSwiZXhwIjoxNjU2Nzg2NzY1fQ.IMI3TXd_HHLxNgKmhYahQ-yeySNk61XqmIE1VQGD7Gg";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});
