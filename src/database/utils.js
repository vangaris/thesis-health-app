import axios from "axios";

const token = localStorage.getItem("token");

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const userProfile = async () => {
  const url = "http://localhost:3000/users/me";
  const profile = await axios.get(url, config);
  return profile;
};

export const login = async (url, user) => {
  const userData = await axios.post(url, user);
  return userData.data.token;
};

export const getExaminations = async () => {
  const url = "http://localhost:3000/examinations?sortBy=createdAt:desc";
  const examinations = await axios.get(url, config).then((response) => {
    return response.data;
  });
  return examinations;
};

export const submitExamination = async (examination) => {
  const url = "http://localhost:3000/examinations";
  const newExamination = await axios.post(url, examination, config);
  return newExamination;
};

export const updateExamination = async (examination, id) => {
  const url = `http://localhost:3000/examinations/${id}`;
  const data = await axios.patch(url, { completed: examination }, config);
  console.log(data);
};

export const deleteExamination = async (id) => {
  const url = `http://localhost:3000/examinations/${id}`;
  await axios.delete(url, config);
};
