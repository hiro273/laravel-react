import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const useStyles = makeStyles(() => ({
  styled: {
    textAlign: "right",
    height: 50,
  },
  button: {
    marginBottom: 20,
  },
  textfield: {
    marginRight: 10
  }
}));

const Header = () => {
  const style = useStyles();
  return (
    <div className={style.styled}>
      <TextField
          label="サイト内検索"
          placeholder="サイト内検索"
          variant="outlined"
          size="small"
          className={style.textfield}
        />
      <Button className={style.button} variant="contained" color="secondary">検索</Button>
    </div>
  )
}

export default Header
