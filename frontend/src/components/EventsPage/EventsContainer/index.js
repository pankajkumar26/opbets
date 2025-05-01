import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

import { loadEventsAll, loadSpecificEvents } from '../../../store/events';
//import OneEvent from '../OneEvent';
import EventsTable from '../EventsTable';

const useStyles = styled({
  CircularProgress: {
    marginLeft: 50,
  },
});

const EventsContainer = ({ query_str }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (!query_str) {
      dispatch(loadEventsAll()).then(() => setLoading(false));
    } else {
      dispatch(loadSpecificEvents(query_str)).then(() => setLoading(false));
    }
  }, [dispatch, query_str]);
  return (
    <>
      {loading && <CircularProgress className={classes.CircularProgress} />}
      {!loading && <EventsTable />}
    </>
  );
};

export default EventsContainer;
