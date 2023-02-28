import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(name) {
    return {
        name,
        history: [
            {
                name1: 'FE01-Sò',
                point1_name1: 'X',
                point2_name1: 'X',
                point3_name1: 'X',
                point4_name1: 'X',
                point1_name2: 'M',
                point2_name2: 'M',
                point3_name2: 'X',
                point4_name2: 'X',
                name2: 'FE02-Bảo',
            },
        ],
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} style={{ background: "#eab676" }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                        style={{ color: "white" }}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" style={{ color: "white" }}>
                    {row.name}
                </TableCell>
                {/* <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" colSpan={5} className="bg-danger">Red</TableCell>
                                        <TableCell align="center" colSpan={6} className="">White</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="center" className="">Name</TableCell>
                                        <TableCell align="center" className="">Point</TableCell>
                                        <TableCell align="center" className="">Point</TableCell>
                                        <TableCell align="center" className="">Point</TableCell>
                                        <TableCell align="center" className="">Point</TableCell>
                                        <TableCell align="center" className="">Point</TableCell>
                                        <TableCell align="center" className="">Point</TableCell>
                                        <TableCell align="center" className="">Point</TableCell>
                                        <TableCell align="center" className="">Point</TableCell>
                                        <TableCell align="center" className="">Name</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.name1}>
                                            <TableCell component="th" scope="row">{historyRow.name1}</TableCell>
                                            <TableCell align="right">{historyRow.point1_name1}</TableCell>
                                            <TableCell align="right">{historyRow.point2_name1}</TableCell>
                                            <TableCell align="right">{historyRow.point3_name1}</TableCell>
                                            <TableCell align="right">{historyRow.point4_name1}</TableCell>
                                            <TableCell align="right">{historyRow.point1_name2}</TableCell>
                                            <TableCell align="right">{historyRow.point2_name2}</TableCell>
                                            <TableCell align="right">{historyRow.point3_name2}</TableCell>
                                            <TableCell align="right">{historyRow.point4_name2}</TableCell>
                                            <TableCell align="right">{historyRow.name2}</TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        <TableCell colSpan={4} align="center">Result</TableCell>
                                        <TableCell colSpan={6} align="center">White Win</TableCell>
                                    </TableRow>
                                </TableBody>    
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        // calories: PropTypes.number.isRequired,
        // carbs: PropTypes.number.isRequired,
        // fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
};

const rows = [
    createData('Match 1'),
    createData('Match 2'),
    createData('Match 3'),
    createData('Match 4'),
];

export default function IndividualTable() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        {/* <TableCell>Dessert (100g serving)</TableCell>*/}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
