
export const fetchCars = (page, min, max) => (
  fetch(url + `page=${page}` + `&price_min=${min}` + `&price_max=${max}`, {
    method: "GET",
    headers: {
      'x-api-key': apiKey
    }
  })
);

const apiKey = "cPvW4cvlX73o7WeloOBzeWfvrb4Kl12uw0olDp90";
const url = 'https://qa878qmgjk.execute-api.us-east-1.amazonaws.com/dev?';
