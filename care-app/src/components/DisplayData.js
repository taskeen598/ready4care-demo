import React, { useContext } from 'react';
import { TableContainer, TableHead, TableBody, TableCell, TableRow, Table } from '@mui/material';
import { multiStepContext } from '../StepContext';

function DisplayData() {
    const { finalData } = useContext(multiStepContext);
    return (
        <div>
            <TableContainer style={{ display: "flex", justifyContent: "center" }}>
                <Table border="1" style={{ width: "70%", justifyContent: "center" }} size="small" aria-label="caption table">
                    <TableHead>
                        <TableRow style={{ backgroundColor: "burlywood", color: "aliceblue" }}>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Contact Number</TableCell>
                            <TableCell>Country</TableCell>
                            <TableCell>State</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Zip Code</TableCell>
                            <TableCell>ID Card</TableCell>
                            <TableCell>CVC</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {finalData.map((data) => (
                            <TableRow key={data.firstname}>
                                <TableCell>{data.firstname}</TableCell>
                                <TableCell>{data.lastname}</TableCell>
                                <TableCell>{data.contactnumber}</TableCell>
                                <TableCell>{data.country}</TableCell>
                                <TableCell>{data.state}</TableCell>
                                <TableCell>{data.city}</TableCell>
                                <TableCell>{data.zip}</TableCell>
                                <TableCell>{data.card}</TableCell>
                                <TableCell>{data.cvc}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>
        </div>
    )
}

export default DisplayData
