export const getData = () => {
  fetch("data.json")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((myJson) => {
      console.log(myJson);
    });
};
