import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

import { loadAllActiveWagers } from '../../../store/active_wagers';
import ActiveWagersTable from '../ActiveWagersTable';

const useStyles = styled({
  CircularProgress: {
    marginLeft: 50,
  },
});

const ActiveWagersTableContainer = () => {
  const sessionUser = useSelector((state) => state.session);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    const fetchActiveWagers = async () => {
      await dispatch(loadAllActiveWagers(sessionUser.id));
      setLoading(false);
    };

    fetchActiveWagers();
  }, [dispatch, sessionUser.id]);

  return (
    <>
      {loading && <CircularProgress className={classes.CircularProgress} />}
      {!loading && <ActiveWagersTable />}
    </>
  );
};

export default ActiveWagersTableContainer;
