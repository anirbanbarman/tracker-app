import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


const instance = axios.create(
    {
        baseURL: "https://32b9-2405-201-800d-8953-a184-124e-f8e9-b9dd.ngrok.io"
    }
);
instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;

        }
        return config;
    },

    (err) => {
        return Promise.reject(err);
    });
    export default  instance;