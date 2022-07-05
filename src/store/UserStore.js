import React, { createContext, useState } from 'react';

export const UserContext = createContext(null);

function UserStore(props) {
  // props로 지정하고 싶은 상태를 만들어준다.
  const [token, setToken] = useState(() => {
    const saved = localStorage.getItem('token');
    return saved || '';
  });

  return (
    //value를 통해 전달하고 싶은 값을 넣어준다.
    <UserContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserStore;
