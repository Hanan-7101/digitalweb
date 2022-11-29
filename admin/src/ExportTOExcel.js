import React from 'react'
import FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { Button } from '@mui/material';

export const ExportToExcel = ({ apiData, fileName }) => {

    const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const exportToCSV = (apiData, fileName) => {
        const ws = XLSX.utils.json_to_sheet(apiData);
        /* custom headers */
        XLSX.utils.sheet_add_aoa(ws, [["balance"]], { origin: "A1" });
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    };

    return (
        <Button sx={{ width: "20%", alignSelf: "center", marginTop: "2rem" }} variant='contained' onClick={(e) => exportToCSV(apiData, fileName)}>Export</Button>
    );
};