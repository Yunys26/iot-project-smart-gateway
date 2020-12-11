
import React from 'react';
import {
  Modal,
  Backdrop,
  Fade,
  Grid,
  TextField,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import {
  textFieldsName,
  textFieldsSurname,
  textFieldsPosition,
  textFieldsGenderMen,
  textFieldsGenderWomen,
  textFieldsBirthday,
  textFieldsCardID,
  useStyles
} from '../ModalRegUsers/style';
import { useSelector } from 'react-redux';
import { changeModalRegState, responseAddNewUser } from '../../../store/sliceStore/modalsSlice';

export default function ModalRegUsers({ dispatch }) {

  const classes = useStyles();

  const modalState = useSelector(state => state.modals.modalsRegStore);
  const token = useSelector(state => state.main.token);

  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [position, setPosition] = React.useState('');
  const [menCheck, setMenCheck] = React.useState('');
  const [womenCheck, setWomenCheck] = React.useState(false);
  const [birthday, setBirthday] = React.useState(false);
  const [idCard, setIdCard] = React.useState('');

  const hadnleChangeName = React.useCallback((event) => setName(event.target.value));
  const hadnleChangeSurName = React.useCallback((event) => setSurname(event.target.value));
  const hadnleChangePosition = React.useCallback((event) => setPosition(event.target.value));
  const hadnleChangeGenderMen = React.useCallback((event) => setMenCheck(Boolean(event.target.value)));
  const hadnleChangeWomenCheck = React.useCallback((event) => setWomenCheck(Boolean(event.target.value)));
  const hadnleChangeBirthday = React.useCallback((event) => setBirthday(event.target.value));
  const hadnleChangeIdCard= React.useCallback((event) => setIdCard(event.target.value));


  const handleClose = () => dispatch(changeModalRegState(false));

  const handleClickClear = React.useCallback((event) => {
    setName('');
    setSurname('');
    setPosition('');
    setBirthday('');
    setIdCard('');
    setMenCheck(false);
    setWomenCheck(false);
  });

  const addUser = () => {
    dispatch(responseAddNewUser([name, surname, position, menCheck, womenCheck, birthday, idCard ,token]))
    handleClickClear()
  }

  console.log(menCheck, womenCheck)
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={modalState}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={modalState}>
        <div className={classes.paper}>
          {/* DataPicker */}
          <Grid
            container
            direction="column"
            justify="flex-end"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12}>
              <Typography variant="h5" color="primary">
                Регистрация нового сотрудника
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...textFieldsName}
                onChange={hadnleChangeName}
                value={name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...textFieldsSurname}
                onChange={hadnleChangeSurName}
                value={surname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...textFieldsPosition}
                onChange={hadnleChangePosition}
                value={position}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                {...textFieldsGenderMen}
                control={<Checkbox 
                  onChange={hadnleChangeGenderMen}
                  value={menCheck}
                  color="primary"
                />}

              />
              <FormControlLabel
                {...textFieldsGenderWomen}
                control={<Checkbox 
                  onChage={hadnleChangeWomenCheck}
                  // onChange={(e) => console.log(typeof Boolean(e.target.value))}
                  value={womenCheck}
                  color="primary"/>}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...textFieldsBirthday}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                value={birthday}
                onChange={hadnleChangeBirthday}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...textFieldsCardID}
                onChange={hadnleChangeIdCard}
                value={idCard}
              />
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={6}>
                <Button onClick={handleClickClear}>Сбросить</Button>
              </Grid>
              <Grid item xs={6}>
                <Button onClick={addUser}>Зарегистрировать</Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Fade>
    </Modal>
  );
}