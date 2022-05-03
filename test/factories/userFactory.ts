import { faker } from "@faker-js/faker";

export default function userBodyFactory(): any {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}