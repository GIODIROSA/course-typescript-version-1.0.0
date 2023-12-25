import { useState } from "react";

interface User {
  uid: string;
  name: string;
}

// const tempUser: User = {
//   uid: "XYZ756",
//   name: "Juan Perez",
// };

const Usuario = () => {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: "XDF890",
      name: "Giovanni Di Rosa",
    });
  };

  return (
    <>
      <div className="mt-5">
        <h3>Usuario</h3>

        <button onClick={login} className="btn btn-outline-primary">
          Login
        </button>

        {!user ? <pre>No hay usuario</pre> : <pre>{JSON.stringify(user)}</pre>}
      </div>
    </>
  );
};

export default Usuario;
