// 讲token进行本地存储   向外部提供对象的方法
// 1 、sessionStorage
// 2 、localStorage
// 设置值
const TOKEN_KEY = "token";
export const setUser = data => {
  window.localStorage.setItem("token", JSON.stringify(data));
};

// 取出值
export const getUser = () => {
  return JSON.parse(window.localStorage.getItem("token"));
};

// 移除值
export const removeUser = () => {
  window.localStorage.remove("token");
};
