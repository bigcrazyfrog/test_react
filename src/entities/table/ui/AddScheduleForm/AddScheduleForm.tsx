import { useEffect, useState, ChangeEvent } from 'react';
import styles from './AddScheduleForm.module.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from '../../../../shared/lib/store/redux';
import { IDoctor } from '../../model';
import { v4 as uuidv4 } from "uuid";
import { getDoctors } from '../../lib/doctorsSlice';
import { addSchedule } from '../../lib/schedulesSlice';

interface ITransformData {
  id: string,
  first_name: string,
  last_name: string,
  father_name: string
}

const columns: GridColDef[] = [
  { field: 'first_name', headerName: 'Фамилия', width: 130 },
  { field: 'last_name', headerName: 'Имя', width: 130 },
  { field: 'father_name', headerName: 'Отчество', width: 130 },
];

const AddScheduleForm = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const [open, setOpen] = React.useState(false);
  const [transformData, setTransformData] = useState<ITransformData[]>([])
  const [nameInput, setNameInput] = useState<string>('')

  const doctors: IDoctor[] = useAppSelector((state) => state.doctors.items);

  const handleSendForm = () => {
    dispatch(addSchedule(nameInput));
    setOpen(false);
  }

  const handleInputName = (event: ChangeEvent<HTMLInputElement>) => {
    setNameInput(event.target.value);
  }

  useEffect(() => {
    dispatch(getDoctors())
  }, [])

  useEffect(() => {
    const data: ITransformData[] = doctors.map((item: IDoctor) => {
      return {
        id: uuidv4(),
        first_name: item.first_name,
        last_name: item.last_name,
        father_name: item.father_name
      }
    });

    setTransformData(data)
  }, [doctors])

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className={styles.Button}>Создать расписание</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.container}>
          <IconButton
            className={styles.closeButton}
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
          <DataGrid
            rows={transformData}
            columns={columns}
            checkboxSelection
            disableRowSelectionOnClick
            hideFooter
          />
          <div className={styles.controls}>
            <TextField
              className={styles.inputName}
              onChange={handleInputName}
              id="outlined-basic"
              label="Название расписания"
              variant="outlined"
              size="small"
            />
            <Button variant="contained" onClick={handleSendForm}>Создать расписание</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export { AddScheduleForm }