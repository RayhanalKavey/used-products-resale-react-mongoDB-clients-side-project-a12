export const setAuthToken = (user) => {
  const { name, email, photoURL, accountType } = user;

  const newUser = { name, email, photoURL, accountType };
  //--1 save to data base and get token
  fetch(`${process.env.REACT_APP_api_url}/users/${user?.email}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newUser),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log("check updated user and token", data);
      //set token to the local storage
      localStorage.setItem("laptop-utopia", data.token);
    });
};
