// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Auth = (props) => {
//   const [loading, setLoading] = useState(true);
//   const [token, setToken] = useState("");
//   const [loggedIn, setLoggedIn] = useState(false);

//   useEffect(() => {
//     getToken();
//   }, []);

//   // if (loading) {
//   //   return <p>loading..</p>;
//   // }

//   // if (error !== "") {
//   //   return <p>ERROR</p>;
//   // }

//   const login = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     axios
//       .post("https://playground.tesonet.lt/v1/tokens", {
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(props.username, props.password),
//       })
//       .then((response) => {
//         response.json().then((result) => {
//           setLoading(false);
//           console.warn("login() ATSAKYMAS ====>", result.token);
//           localStorage.setItem("token", result.token);
//           getToken();
//         });
//       });
//   };

//   const getToken = () => {
//     const token = localStorage.getItem("token");
//     if (token && token.token) {
//       setLoggedIn(true);
//       setToken(token);
//     }
//     console.log("getToken() TOKEN ===>", token);
//     console.log("getToken() LOGGEDIN ===>", loggedIn);
//   };

//   // if (this.token) {
//   //   return <Redirect to="/admin" />;
//   // } else if (this.error) {
//   //   return (
//   //     <div>
//   //       <p>Something went wrong...</p>
//   //     </div>
//   //   )
//   // }
//   return <section></section>;
// };

// export default Auth;
