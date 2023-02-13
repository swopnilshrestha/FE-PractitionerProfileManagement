const config = {
  basename: process.env.REACT_APP_BASE_NAME || "/",
  baseURI: process.env.REACT_APP_API_BASE_URI,
  endpoints: {
    auth: {
      register: `/auth/signup`,
      login: `/auth/signin`,
    },
    practitioner: {
      create: `/practitioner`,
      fetchAll: `/practitioner`,
      fetchById: `/practitioner/:id`,
    },
  },
};

export default config;
