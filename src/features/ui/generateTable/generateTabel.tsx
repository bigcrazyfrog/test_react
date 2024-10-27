import dayjs, {Dayjs} from "dayjs";
import { IColumn } from "../../../entities/table/model/table";
import { Cell } from "../../../entities/table";
import { GridRenderCellParams } from "@mui/x-data-grid";


export const GenerateTable = (startDate: Dayjs | null, endDate: Dayjs | null): IColumn[] | [] => {  
    dayjs.locale("ru");

    if (!startDate || !endDate) {
      return [];
    }
  
    const differenceInDays: number = endDate.diff(startDate, "day");
  
    const newColumns: IColumn[] = [
      { field: "Name", headerName: "ФИО", width: 160 },
    ];

    
    for (let numberDay = 0; numberDay < differenceInDays + 1; numberDay++) {
      const nextDate = startDate.add(numberDay, "day");
        
      const column = {
        field: nextDate.format("YYYY-MM-DD"),
        headerName: nextDate.format("dd D"),
        width: (window.screen.width - 180) / 8,
        cellClassName: "cell",
        renderCell: (params: GridRenderCellParams<any, any>) => (
          <Cell params={params.value || ""}></Cell>
        ),
      };
      newColumns.push(column);
    }

   
    console.log(newColumns)
    return newColumns;
  };