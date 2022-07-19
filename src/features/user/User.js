import "./user.css";
import { useSelector, useDispatch } from 'react-redux'
import { requestUser } from "./userSlice"
import { useEffect } from "react";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export function User() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.status);
  
  useEffect(
    () => {
      dispatch(requestUser());
    }, []
  );

  if (loading === "loading") {
    return (
        <Box padding={4} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <CircularProgress />
        </Box>
    );
}

  return (
    <>
        <div className="user__left">
          <img src={user?.picture?.large} alt="" />
        </div>
        <div className="user__right">
            <ul>
              <li>
                <h1>
                  {user?.name?.first} {user?.name?.last}
                </h1>
              </li>
              <li>
                <h3>Email: {user?.email}</h3>
              </li>
              <li>
                <h3>Phone: {user?.phone}</h3>
              </li>
              <li>
                <h3>City: {user?.location?.city}</h3>
              </li>
            </ul>
        </div>
      </>
  );
}

export default User;
