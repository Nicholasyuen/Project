import React, { useEffect, useState } from "react";
import services from "./services.json";
import plans from "./plans";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import Radio from "@material-ui/core/Radio";

const ThridPage = ({ setPage, setFinalChoice }) => {
  const [rows, setRows] = useState([]);
  const [choice, setChoice] = useState(plans.StandardPlan.name);

  useEffect(() => {
    let temp = [];
    Object.keys(plans).forEach((key) => {
      temp.push(plans[key]);
    });
    setRows(temp);
  }, [plans]);

  const handleChange = (e) => {
    setChoice(e.target.value);
  };

  const handleConfirm = (e) => {
    setFinalChoice(choice);
    setPage(3);
  };

  return (
    <div>
      <Typography variant="h4">Choose a plan</Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Plan</TableCell>
              <TableCell align="right">{services.gen.name}</TableCell>
              <TableCell align="right">{services.spec.name}</TableCell>
              <TableCell align="right">{services.phys.name}</TableCell>
              <TableCell align="right">TotalPrice(HKD$)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={row.key}>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">
                  {row.gen ? <CheckIcon /> : <ClearIcon />}
                </TableCell>
                <TableCell align="right">
                  {row.spe ? <CheckIcon /> : <ClearIcon />}
                </TableCell>
                <TableCell align="right">
                  {row.phy ? <CheckIcon /> : <ClearIcon />}
                </TableCell>
                <TableCell align="right">{row.totalPrice}</TableCell>
                <TableCell align="right">
                  <Radio
                    value={row.name}
                    checked={choice === row.name ? true : false}
                    onChange={handleChange}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Grid container direction="row" justify="flex-end" alignItems="center">
        <Button variant="contained" color="primary" onClick={handleConfirm}>
          Confirm
        </Button>
      </Grid>
    </div>
  );
};

export default ThridPage;
