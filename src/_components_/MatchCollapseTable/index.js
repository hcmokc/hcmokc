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
import { data } from 'jquery';

function createData(name, player1, player2) {
    return {
        name,
        player1,
        player2,
        history: [
            {
                ippon1_name1: 'X',
                ippon2_name1: 'X',
                ippon3_name1: 'X',
                ippon4_name1: 'X',
                ippon1_name2: 'M',
                ippon2_name2: 'M',
                ippon3_name2: 'X',
                ippon4_name2: 'X',
            },
        ],
    };
}

function Row(props) {
    const { row, row_data } = props;
    const [open, setOpen] = React.useState(false);

    // if (row_data != 0) {
    //     console.log("row_data")
    //     console.log(row_data[0])
    // }

    console.log()

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} style={{ background: "#eab676" }}>
                <TableCell  >
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                        style={{ color: "white" }}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" colSpan={1} scope="row" style={{ color: "white", fontWeight: 'bold' }}>
                    {row.name}
                    {/* {row_data.map} */}
                </TableCell>

                <TableCell colSpan={1} align="right"></TableCell>
                <TableCell colSpan={1} align="right"></TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Table size="small" aria-label="purchases" className='border border-4'>
                                <TableHead className='border border-4'>
                                    <TableRow >
                                        <TableCell align="center" colSpan={4} className="bg-danger border border-4 text-white">Red</TableCell>
                                        <TableCell align="center" colSpan={4} className="border border-4">White</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="center" colSpan={4} className='border border-4'>Ippon -</TableCell>
                                        <TableCell align="center" colSpan={4} className='border border-4'>Ippon -</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.name1}>
                                            {/* <TableCell className='border border-4' component="th" colSpan={2} scope="row">{historyRow.name1}</TableCell> */}
                                            <TableCell className='border border-4' align="right">{historyRow.ippon1_name1}</TableCell>
                                            <TableCell className='border border-4' align="right">{historyRow.ippon2_name1}</TableCell>
                                            <TableCell className='border border-4' align="right">{historyRow.ippon3_name1}</TableCell>
                                            <TableCell className='border border-4' align="right">{historyRow.ippon4_name1}</TableCell>
                                            <TableCell className='border border-4' align="right">{historyRow.ippon1_name2}</TableCell>
                                            <TableCell className='border border-4' align="right">{historyRow.ippon2_name2}</TableCell>
                                            <TableCell className='border border-4' align="right">{historyRow.ippon3_name2}</TableCell>
                                            <TableCell className='border border-4' align="right">{historyRow.ippon4_name2}</TableCell>
                                            {/* <TableCell className='border border-4' align="right">{historyRow.name2}</TableCell> */}
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        <TableCell colSpan={3} align="center" className='border border-4'>Result</TableCell>
                                        <TableCell colSpan={5} align="center" className='border border-4'>White Win</TableCell>
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
        // name: PropTypes.string.isRequired,
        // price: PropTypes.number.isRequired,
        // protein: PropTypes.number.isRequired,
    }).isRequired,
};

export default function IndividualTable() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState([]);

    const rows = [
        // // data.map(createData('Match ' + data.id)),
        createData('Match 1', 'Name1', 'Name2'),
        createData('Match 2', 'Name1', 'Name2'),
        createData('Match 3', 'Name1', 'Name2'),
        createData('Match 4', 'Name1', 'Name2'),
    ];



    React.useEffect(() => {
        const url = "https://63fef37cc5c800a72388710e.mockapi.io/hcmokc/junior-individual-match";
        fetch(url, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then((result) => {
                setData({ ...result })
            })
            .then(setIsLoading(false))
            .catch(error => (
                console.log(error)
            ));
    }, []);

    // data.length = 0 ? console.log("if") : console.log("Fuck Yeah")
    // if (data.length == 0) {
    //     console.log(data)
    // } else {
    //     console.log(data[0]['name-player-1'])
    // }

    // if (data.length != 0) {
    //     // console.log(data[0]['name-player-1'])
    //     console.log("under")
    //     // console.log(data[0])
    //     for (var i = 0; i < 10; i++) {
    //         console.log(data[i]['id'])
    //     }
    // }

    if (data.length != 0) {
        data.map((item) => {
            console.log(item)
        })
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        {/* <TableCell>{Object.keys(data).map(item => {<p key={data[item][0]}></p>})}</TableCell> */}
                        {/* {data.length != 0 ? console.log(data[0]['name-player-1']) : console.log('oh fuck')} */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} row_data={data} />
                    ))}
                    {/* {data.map((item) => (
                        <Row key={data.name} row={row} row_data={data} />
                    ))} */}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
