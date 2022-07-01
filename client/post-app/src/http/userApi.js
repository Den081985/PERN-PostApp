import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode";

//функция запроса на регистрацию
export const register = async (email, password) => {
  const { data } = await $host.post("api/register", {
    email,
    password,
  });

  // console.log(data);

  const decoded = jwt_decode(data.token);

  localStorage.setItem("token", data.token);

  return decoded;
};
//функция запроса на авторизацию
export const login = async (email, password) => {
  const { data } = await $host.post("api/login", {
    email,
    password,
  });

  localStorage.setItem("token", data.token);

  return jwt_decode(data.token);
};

//функция проверки авторизации при перезагрузке страницы
export const check = async () => {
  const { data } = await $host.get("api/auth");

  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
