import faker from "faker";

export const devolverAleatorios = (req, res) => {
  const respuesta = [];

  for (let i = 0; i < 10; i++) {
    respuesta.push({
      title: `${faker.vehicle.manufacturer()} ${faker.vehicle.model()}`,
      price: faker.commerce.price(),
      thumbnail: faker.image.avatar(),
    });
  }
  return respuesta;
};
