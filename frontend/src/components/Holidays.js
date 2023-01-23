import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BiCheck } from "react-icons/bi";

const Holidays = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <Grid container sx={{ justifyContent: "center", marginTop: '25px' }} >
      <Grid xs={12} sm={10} md={8} sx={{ textAlign: "center" }} marginBottom>
        <a href='https://docs.google.com/spreadsheets/d/1W4NUa0YGoTbxRqL6s6Mdh4pAZvlHnaDWLAECw8Ogt1o/edit#gid=0' target='__blank' style={{textDecoration:'none'}}>
          <Button  variant="contained" color="secondary" sx={{textDecoration: 'none'}}>employee time off request calendar</Button>
        </a>
      </Grid>
      <Grid
        xs={12}
        sm={10}
        md={8}
        sx={{
          marginBottom: "10px",
          border: "5px solid purple",
          padding: "20px",
          borderRadius: "50px",
        }}
      >
        <Typography sx={{ color: "red", marginBottom: "10px" }}>
          UK BH Yes, Spanish BH No - we don´t work as it´s a UK bank holiday,
          but to not work it you must use a comp day. You can choose to work if
          we have backlog, so as not to use the comp day.
        </Typography>
        <Typography sx={{ color: "blue", marginBottom: "10px" }}>
          Spain BH YES, UK BH No - work as normal, get a comp day in lieu and
          1.5 pay to be paid a month in arrears. To take it off requires a
          request confirmed in meta4. No holiday or comp day will be used for
          Spanish bank holiday that is requested as off.
        </Typography>
        <Typography sx={{ color: "purple" }}>
          UK BH Yes, Spanish BH Yes - no work, no need to request off or use
          comp day. Team will be off automatically.
        </Typography>
      </Grid>
      {/* <Grid xs={8} sx={{ textAlign: "center" }}>
        <Typography sx={{ color: "blue" }}>
          December 6th - Spain Yes, UK no
        </Typography>
        <Typography sx={{ color: "blue" }}>
          December 8th - Spain Yes, UK no
        </Typography>
        <Typography sx={{ color: "blue" }}>
          December 25th - Spain Yes, UK no
        </Typography>
        <Typography sx={{ color: "purple" }}>
          December 26th - Spain Yes, UK Yes
        </Typography>
        <Typography sx={{ color: "red" }}>
          December 27th - Spain No, UK Yes
        </Typography>
      </Grid> */}
      <Grid xs={12} sm={10} md={8} marginTop>
        <TableContainer
          component={Paper}
          sx={{
            marginBottom: "10px",
            border: "5px solid purple",
            padding: "20px",
            borderRadius: "50px",
          }}
        >
          <Table aria-label='simple table' size='small'>
            <TableHead>
              <TableRow sx={{ borderBottom: "1.5px solid black" }}>
                <TableCell align='left'>Date - 2022 </TableCell>
                <TableCell align='center'>Spanish Bank Holiday</TableCell>
                <TableCell align='center'>UK Bank Holiday</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow style={{ backgroundColor: "#" }}>
                <TableCell
                  component='th'
                  scope='row'
                  sx={{ fontSize: "1.15rem", color: "blue" }}
                >
                  December 6th
                </TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
                <TableCell align='center'></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component='th'
                  scope='row'
                  sx={{ fontSize: "1.15rem", color: "blue" }}
                >
                  December 8th
                </TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
                <TableCell align='center'></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component='th'
                  scope='row'
                  sx={{ fontSize: "1.15rem", color: "blue" }}
                >
                  December 25th
                </TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
                <TableCell align='center'></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component='th'
                  scope='row'
                  sx={{ fontSize: "1.15rem", color: "purple" }}
                >
                  December 26th
                </TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component='th'
                  scope='row'
                  sx={{ fontSize: "1.15rem", color: "red" }}
                >
                  December 27th
                </TableCell>
                <TableCell align='center'></TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid xs={12} sm={10} md={8} marginTop>
        <TableContainer
          component={Paper}
          sx={{
            marginBottom: "10px",
            border: "5px solid purple",
            padding: "20px",
            borderRadius: "50px",
          }}
        >
          <Table aria-label='simple table' size='small'>
            <TableHead>
              <TableRow sx={{ borderBottom: "1.5px solid black" }}>
                <TableCell align='left'>Date - 2023 </TableCell>
                <TableCell align='center'>Spanish Bank Holiday</TableCell>
                <TableCell align='center'>UK Bank Holiday</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  component='th'
                  scope='row'
                  sx={{ fontSize: "1.15rem", color: "red" }}
                >
                  January 2nd
                </TableCell>
                <TableCell align='center'></TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
              </TableRow>
              <TableRow style={{ backgroundColor: "#" }}>
                <TableCell
                  component='th'
                  scope='row'
                  sx={{ fontSize: "1.15rem", color: "blue" }}
                >
                  January 6th
                </TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
                <TableCell align='center'></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component='th'
                  scope='row'
                  sx={{ fontSize: "1.15rem", color: "purple" }}
                >
                  April 7th
                </TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component='th'
                  scope='row'
                  sx={{ fontSize: "1.15rem", color: "purple" }}
                >
                  April 10th
                </TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component='th'
                  scope='row'
                  sx={{ fontSize: "1.15rem", color: "purple" }}
                >
                  May 1st
                </TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component='th'
                  scope='row'
                  sx={{ fontSize: "1.15rem", color: "red" }}
                >
                  May 8th
                </TableCell>
                <TableCell align='center'></TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component='th'
                  scope='row'
                  sx={{ fontSize: "1.15rem", color: "red" }}
                >
                  May 29th
                </TableCell>
                <TableCell align='center'></TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
              </TableRow>
              <TableRow style={{ backgroundColor: "#" }}>
                <TableCell
                  component='th'
                  scope='row'
                  sx={{ fontSize: "1.15rem", color: "blue" }}
                >
                  June 24th
                </TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
                <TableCell align='center'></TableCell>
              </TableRow>
              <TableRow style={{ backgroundColor: "#" }}>
                <TableCell
                  component='th'
                  scope='row'
                  sx={{ fontSize: "1.15rem", color: "blue" }}
                >
                  August 15th
                </TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
                <TableCell align='center'></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component='th'
                  scope='row'
                  sx={{ fontSize: "1.15rem", color: "red" }}
                >
                  August 28th
                </TableCell>
                <TableCell align='center'></TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
              </TableRow>
              <TableRow style={{ backgroundColor: "#" }}>
                <TableCell
                  component='th'
                  scope='row'
                  sx={{ fontSize: "1.15rem", color: "blue" }}
                >
                  September 11th
                </TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
                <TableCell align='center'></TableCell>
              </TableRow>
              <TableRow style={{ backgroundColor: "#" }}>
                <TableCell
                  component='th'
                  scope='row'
                  sx={{ fontSize: "1.15rem", color: "blue" }}
                >
                  October 12th
                </TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
                <TableCell align='center'></TableCell>
              </TableRow>
              <TableRow style={{ backgroundColor: "#" }}>
                <TableCell
                  component='th'
                  scope='row'
                  sx={{ fontSize: "1.15rem", color: "blue" }}
                >
                  November 1st
                </TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
                <TableCell align='center'></TableCell>
              </TableRow>
              <TableRow style={{ backgroundColor: "#" }}>
                <TableCell
                  component='th'
                  scope='row'
                  sx={{ fontSize: "1.15rem", color: "blue" }}
                >
                  December 6th
                </TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
                <TableCell align='center'></TableCell>
              </TableRow>
              <TableRow style={{ backgroundColor: "#" }}>
                <TableCell
                  component='th'
                  scope='row'
                  sx={{ fontSize: "1.15rem", color: "blue" }}
                >
                  December 8th
                </TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
                <TableCell align='center'></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component='th'
                  scope='row'
                  sx={{ fontSize: "1.15rem", color: "purple" }}
                >
                  December 25th
                </TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component='th'
                  scope='row'
                  sx={{ fontSize: "1.15rem", color: "purple" }}
                >
                  December 26th
                </TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
                <TableCell align='center'>
                  <BiCheck style={{ fontSize: "2rem" }} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default Holidays;
