import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  // return jwt.sign({ id }, 'abc1234', {
  //   expiresIn: '30d',
  // });
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

export default generateToken;
