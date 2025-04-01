import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const token = "authToken";
const refreshTokenStorage = "refreshToken";

export const Login = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login/`, {
      username: username,
      password: password,
    });
    const authToken = response.data.access;
    const refreshToken = response.data.refresh;
    if (authToken && refreshToken) {
      localStorage.setItem(token, authToken);
      localStorage.setItem(refreshTokenStorage, refreshToken);
      return response.data;
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const getAuthToken = () => {
  return localStorage.getItem(token);
};

export const clearAuthToken = () => {
  localStorage.removeItem(token);
  localStorage.removeItem(refreshTokenStorage);
};

export const getRefreshToken = () => {
  return localStorage.getItem(refreshTokenStorage);
};

export const refreshToken = async () => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    console.error("No refresh token available");
    clearAuthToken();
    return null;
  }

  try {
    const response = await axios.post(`${BASE_URL}/login/refresh/`, {
      refresh: refreshToken,
    });
    const newAccessToken = response.data.access;
    if (newAccessToken) {
      localStorage.setItem(token, newAccessToken);
      return newAccessToken;
    } else {
      console.error("Failed to refresh");
      clearAuthToken();
      return null;
    }
  } catch (error) {
    console.error("Error Refreshing", error);
    clearAuthToken();
    return null;
  }
};

export const logout = async () => {
  const refreshToken = getRefreshToken();
  const authToken = getAuthToken();

  if (!refreshToken) {
    console.warn("No refreshToken Available");
    clearAuthToken();
    return;
  }
  try {
    await axios.post(
      `${BASE_URL}/logout/`,
      {
        refresh: refreshToken,
        access: authToken,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    clearAuthToken();
    console.log("Logout Successful");
  } catch (error) {
    console.error("Logout error", error);
    clearAuthToken();
    throw error;
  }
};

//HEADERS
const createAuthHeaders = () => {
  const authToken = getAuthToken();
  if (!authToken) {
    throw new Error("Authentication token not found.");
  }
  return {
    Authorization: `Bearer ${authToken}`,
  };
};

export const authGet = async (url, params = {}) => {
  try {
    const headers = createAuthHeaders();
    const response = await axios.get(`${BASE_URL}${url}`, { headers, params });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      const newAccessToken = await refreshToken();
      if (newAccessToken) {
        const newHeaders = { Authorization: `Bearer ${newAccessToken}` };
        const response = await axios.get(`${BASE_URL}${url}`, {
          headers: newHeaders,
          params,
        });
        localStorage.setItem(token, newAccessToken);
        return response.data;
      } else {
        console.error("Authentication failed after refresh.");
        clearAuthToken();
        throw error;
      }
    }
    throw error;
  }
};

export const authPost = async (url, data = {}, config = {}) => {
  try {
    const headers = createAuthHeaders();
    const response = await axios.post(`${BASE_URL}${url}`, data, {
      ...config,
      headers,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      const newAccessToken = await refreshToken();
      if (newAccessToken) {
        const newHeaders = {
          Authorization: `Bearer ${newAccessToken}`,
          ...config?.headers,
        };
        const response = await axios.post(`${BASE_URL}${url}`, data, {
          ...config,
          headers: newHeaders,
        });
        localStorage.setItem(token, newAccessToken);
        return response.data;
      } else {
        console.error("Authentication failed after refresh.");
        clearAuthToken();
        throw error;
      }
    }
    throw error;
  }
};

export const authPut = async (url, data = {}, config = {}) => {
  try {
    const headers = createAuthHeaders();
    const response = await axios.put(`${BASE_URL}${url}`, data, {
      ...config,
      headers,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      const newAccessToken = await refreshToken();
      if (newAccessToken) {
        const newHeaders = {
          Authorization: `Bearer ${newAccessToken}`,
          ...config?.headers,
        };
        const response = await axios.put(`${BASE_URL}${url}`, data, {
          ...config,
          headers: newHeaders,
        });
        localStorage.setItem(token, newAccessToken);
        return response.data;
      } else {
        console.error("Authentication failed after refresh.");
        clearAuthToken();
        throw error;
      }
    }
    throw error;
  }
};

export const authPatch = async (url, data = {}, config = {}) => {
  try {
    const headers = createAuthHeaders();
    const response = await axios.patch(`${BASE_URL}${url}`, data, {
      ...config,
      headers,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      const newAccessToken = await refreshToken();
      if (newAccessToken) {
        const newHeaders = {
          Authorization: `Bearer ${newAccessToken}`,
          ...config?.headers,
        };
        const response = await axios.patch(`${BASE_URL}${url}`, data, {
          ...config,
          headers: newHeaders,
        });
        localStorage.setItem(token, newAccessToken);
        return response.data;
      } else {
        console.error("Authentication failed after refresh.");
        clearAuthToken();
        throw error;
      }
    }
    throw error;
  }
};

export const authDelete = async (url, config = {}) => {
  try {
    const headers = createAuthHeaders();
    const response = await axios.delete(`${BASE_URL}${url}`, {
      ...config,
      headers,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      const newAccessToken = await refreshToken();
      if (newAccessToken) {
        const newHeaders = {
          Authorization: `Bearer ${newAccessToken}`,
          ...config?.headers,
        };
        const response = await axios.delete(`${BASE_URL}${url}`, {
          ...config,
          headers: newHeaders,
        });
        localStorage.setItem(token, newAccessToken);
        return response.data;
      } else {
        console.error("Authentication failed after refresh.");
        clearAuthToken();
        throw error;
      }
    }
    throw error;
  }
};
