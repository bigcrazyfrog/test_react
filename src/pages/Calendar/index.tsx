import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import React, { useEffect, useMemo, useRef, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ru";
import styles from "./calendar.module.scss";
import { SelectDataInterval } from "../../entities/table";
import { TransformData } from "./lib/transformData";
import { GenerateTable } from "../../features/ui/generateTable/generateTabel";
import { ITransformSchedule } from "./model/types";
import { EditIntervalForm } from "../../entities/table/ui/editIntervalForm/editIntervalForm";
import { useAppDispatch, useAppSelector  } from "../../shared/lib/store/redux";
import { getCabinets } from "../../entities/table/lib/cabinetsSlice";
import { updateIntervals} from "../../entities/table/lib/intervalSlice";
import {IInterval} from "../../entities/table/model";
import {getIntervals} from "../../entities/table/lib/intervalSlice";
import {v4 as uuidv4} from "uuid";
import { compareIntervals } from "./lib/compareIntervals";
import CircularProgress from '@mui/material/CircularProgress';
import { AddScheduleForm } from "../../entities/table";
import { SelectSchedule } from "../../entities/table";
import { getDoctors } from "../../entities/table/lib/doctorsSlice";
import { DistributeDoctors } from "../../entities/table";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


const Calendar = () => {
  const navigate = useNavigate();

  dayjs.locale("ru");

  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs().add(7, "day"));

  const [columns, setColumns] = useState<GridColDef[]>([]);
  const [formatData, setFormatData] = useState<ITransformSchedule[] | []>([]);

  const dispatch = useAppDispatch();

  const currentSchedule = useAppSelector((state) => state.schedules.currentSchedule);
  const doctors = useAppSelector((state) => state.doctors.items);
  const intervals = useAppSelector((state) => state.intervals.intervals);
  const status = useAppSelector((state) => state.intervals.status);
  const error = useAppSelector((state) => state.intervals.error);

  const previousIntervals = useRef<IInterval[]>(intervals);

  const updateData = () => {
    if (currentSchedule && doctors) { 
      const transforData = TransformData(intervals, startDate, endDate, currentSchedule, doctors);
      const newData: ITransformSchedule[] = transforData.transformSchedule;
      const newInterval: IInterval[] = transforData.completionSchedule;

      dispatch(updateIntervals(newInterval));

      setFormatData(newData)

      previousIntervals.current = intervals;
    }
  }


  useEffect(() => {
    dispatch(getCabinets());
    dispatch(getIntervals());
    dispatch(getDoctors())
  }, [dispatch])


  useEffect(() => {
    if (!compareIntervals(previousIntervals.current, intervals)) {
      updateData()
    }
  },  [intervals, startDate, endDate])

  useEffect(() => {
    updateData()
  },  [startDate, endDate])

  useEffect(() => {
    
    updateData();
  }, [currentSchedule])

  useEffect(() => {
    setColumns(GenerateTable(startDate, endDate));
    dispatch(getCabinets());
  }, []);


  // if (status === 'failed') {
  //   return <div>Error: {error}</div>;
  // }

  const handleDateChange = (newValue: Dayjs | null, type: 'start' | 'end'): void => {
    if (type === 'start') {
      setStartDate(newValue);
      setColumns(GenerateTable(newValue, endDate));
    } else {
      setEndDate(newValue);
      setColumns(GenerateTable(startDate, newValue));
    }  
  };

  const rootStyles = {
    marginTop: '10px',
    "& .cell": {
      padding: "0px !important",
      height: 30,
    },
    
  };

  return (
          <div>
            <div className={styles.inputContainer}>
              <SelectDataInterval
                  type="start"
                  label="Дата начала интервала"
                  startDate={startDate}
                  endDate={endDate}
                  handleDateChange={handleDateChange}
              />
              <SelectDataInterval
                  type="end"
                  label="Дата конца интервала"
                  startDate={startDate}
                  endDate={endDate}
                  handleDateChange={handleDateChange}
              />
              <SelectSchedule />
              <AddScheduleForm/>
              <DistributeDoctors/>
              <Button style={{marginLeft: 'auto'}} variant="text" onClick={() => {
                
                localStorage.setItem('token', '')
                navigate("/login");
                }}>Выход</Button>

            </div>
            {status === 'loading' ? <Box sx={{ 
              display: 'flex',
              width: '100%',
              height: '100vh',
              justifyContent: 'center',
              alignItems: 'center',
              }}>
            <CircularProgress />
          </Box> : <Box sx={rootStyles}>
                <DataGrid
                    rows={formatData}
                    columns={columns}
                    disableRowSelectionOnClick
                    hideFooter
                    showCellVerticalBorder
                    showColumnVerticalBorder
                />
              </Box>}

              
            <EditIntervalForm />
          </div>
  );
}

export {Calendar};
