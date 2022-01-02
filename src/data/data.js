export const getAllInfo = () =>
  fetch(`https://swapi.dev/api/people/?page=1`)
    .then((res) => res.json())
    .catch((error) => console.log(error));
