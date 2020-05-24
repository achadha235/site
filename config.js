let parsed, error;

const path = require("path");
const dotenv = require("dotenv");
const { parsed, error } = dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

if (error) {
  throw error;
}

let port = 3000;
if (process.env.PORT !== undefined && process.env.PORT.trim() !== "") {
  port = Number(process.env.PORT);
} else if (parsed.PORT) {
  port = Number(parsed.PORT);
}

module.exports = {
  NODE_ENV: String(parsed.NODE_ENV),
  NEXT_DEV: parsed.NEXT_DEV === "true",
  PORT: port,
  ROOT_PASSWORD: String(parsed.ROOT_PASSWORD),
};
