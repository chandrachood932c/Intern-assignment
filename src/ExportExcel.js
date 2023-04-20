import React from 'react';

import * as FileSaver from 'file-saver';
import XLSX from 'file-saver';

const ExportExcel = ({excelData, fileName}) => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToExcel = async () =>{
        const ws = XLSX.utils.json_to_sheet(excelData);
        const wb = {Sheets: {'data':ws}, SheetNames : ['data']};
        const excelBuffer = XLSX.write(wb, {bookType:'xlsx', type: 'array'});
        const data = new Blob([excelBuffer], {type:fileType});
        FileSaver.saveAs(data,fileName+fileExtension);
    }

    return (
        <div style={{zIndex: 100}}>
            <button style={{backgroundColor: "#000", padding: "2 rem"}} onClick={(e) => exportToExcel(fileName)}>
                Export Excel
            </button>
        </div>
    )

}

export default ExportExcel;