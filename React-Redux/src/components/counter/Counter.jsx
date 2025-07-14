import React from 'react';
import { Container, Typography, Button, Paper } from '@mui/material';
import styles from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './redux/counterAction';

export default function Counter(){
    const count = useSelector((state) =>{
        return state.count
    });
    const dispatch = useDispatch();

    const increment_count=()=> {
        dispatch(increment());
    };

    const decrement_count=()=>{
        dispatch(decrement());
    };

    // const reset_count=()=>{
    //     dispatch(reset());
    // };


  return (
    <Container maxWidth="sm" className={styles.container}>
      <Typography className={styles.title}>Counter App</Typography>

      <Paper className={styles.box}>
        <div className={styles.valueBox}>{count}</div>

        <div className={styles.buttons}>
          <Button variant="contained" color="success" onClick={increment_count}>
            +
          </Button>
          <Button variant="contained" color="error" onClick={decrement_count}>
            -
          </Button>
        </div>

        {/* <Button
          variant="outlined"
          color="error"
          onClick={reset_count}
          className={styles.resetBtn}
        >
          Reset
        </Button> */}
      </Paper>
    </Container>

  );
}
