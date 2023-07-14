import React from 'react'
import { CSVLink } from 'react-csv'

export const ExportReactCSV = ({csvData, fileName}) => {
    return (
        <div className='btn btn-success'>
            <CSVLink data={csvData} filename={fileName}>Export</CSVLink>
        </div>
    )
}