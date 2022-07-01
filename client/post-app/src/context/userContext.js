import React, { useState } from "react";

export const userContext = React.createContext();

const UserProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [post, setPost] = useState(null);
  const [userId, setUserId] = useState(null);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(5);

  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <userContext.Provider
      value={{
        isAuth,
        setIsAuth,
        post,
        setPost,
        userId,
        setUserId,
        posts,
        setPosts,
        page,
        setPage,
        totalCount,
        setTotalCount,
        limit,
        setLimit,
        show,
        setShow,
        alert,
        setAlert,
        loading,
        setLoading,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
