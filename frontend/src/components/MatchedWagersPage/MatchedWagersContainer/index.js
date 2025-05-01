import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress } from '@mui/material';

import MatchedWagersTable from '../MatchedWagersTable';

const MatchedWagersContainer = () => {
  const sessionUserId = useSelector((state) => state.session.id);
  const [loading, setLoading] = useState(true);
  const [matched_wagers, setMatchedWagers] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/api/users/${sessionUserId}/matched_wagers`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMatchedWagers(data[matched_wagers]);
  //       console.log(matched_wagers);
  //       setLoading(false);
  //     });
  // }, [sessionUserId]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:5000/api/users/${sessionUserId}/matched_wagers`, {
        method: 'GET',
        credentials: 'include', // Ensures cookies are sent with the request
        headers: {
          'Content-Type': 'application/json',
          // 'X-CSRFToken': csrfToken, // Include the CSRF token
        },
      });

      if (res.ok) {
        setLoading(false);
        const data = await res.json();

        setMatchedWagers(data['matched_wagers_arr']);
      } else {
        alert('res.ok is NOT OK');
      }
    }

    fetchData();
  }, [sessionUserId]);

  return (
    <>
      {loading && <CircularProgress />}
      {!loading && <MatchedWagersTable matched_wagers={matched_wagers} />}
    </>
  );
};

export default MatchedWagersContainer;
