import { jwtDecode } from "jwt-decode";

const decoderToken = (token) => {
  const { id, email } = jwtDecode(token);
  return { id, email };
};

export default decoderToken;
