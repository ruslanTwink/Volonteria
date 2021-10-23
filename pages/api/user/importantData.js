import axios from 'axios';

import dotenv from 'dotenv';

dotenv.config();

export default async (req, res) => {
  const { data } = await axios.post(
    `${process.env.WP_API_URL}/users/me`,
    {},
    {
      auth: {
        username: req.body.login,
        password: req.body.password,
      },
    },
  );

  res.json(data);
};
