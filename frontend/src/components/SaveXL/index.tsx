
"use client"
import Button from "@/components/std/Button";
import * as XLSX from "xlsx";

export default function SaveXL({dataToExport}: {dataToExport: any}) {
  const save = () => {


    let data: Array<any> = []
    Object.keys(dataToExport).map(day => {
      Object.keys(dataToExport[day]).map(lesson => {
        data.push({
          day: day,
          lesson: lesson,
          ...dataToExport[day][lesson]
        })
      })
    });

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils?.json_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "schedule");
    // Save the workbook as an Excel file
    XLSX.writeFile(workbook, `schedule.xlsx`);
  }

  return <Button onClick={save}>Скачать в excel</Button>
}