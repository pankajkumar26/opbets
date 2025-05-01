import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Snackbar,
  IconButton,
  LinearProgress,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { closeWagerMatchingProgress } from '../../store/modal';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

const useStyles = styled((theme) => ({
  snack: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
}));

export default function PositionedSnackbar() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const classes = useStyles(theme);
  const isOpen = useSelector(
    (state) => state.modal.wager_matching_progress_Show
  );
  return (
    <div>
      <Snackbar
        ContentProps={{
          classes: {
            root: classes.snack,
          },
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        sx={{
          marginRight: '90px',
          marginBottom: '8px',
        }}
        open={isOpen}
        autoHideDuration={6000}
        onClose={() => dispatch(closeWagerMatchingProgress())}
        message={
          <Box sx={{ marginLeft: '20px' }}>
            <LinearProgress />
            <span>Matching Wager</span>
          </Box>
        }
        action={
          <>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => dispatch(closeWagerMatchingProgress())}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      ></Snackbar>
    </div>
  );
}
