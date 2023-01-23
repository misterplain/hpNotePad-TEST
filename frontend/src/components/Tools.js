import React, { useState, useEffect } from "react";
import {
  Button,
  ButtonGroup,
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Grid,
  Checkbox,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";
import { BiCopy } from "react-icons/bi";

// import TemplateText from "../assets/templates4";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Tools = () => {
  const [radio, setRadio] = useState("exclude");
  const [vat, setVat] = useState("");
  const [result, setResult] = useState("");
  const [tracking, setTracking] = useState("");
  const [serialNumber, setSerialNumber] = useState("");

  const handleChange = (e) => {
    setRadio(e.target.value);
  };

  const submitVatCalc = (e) => {
    setResult("action");
    e.preventDefault();
    if (radio === "exclude") {
      let vatCalc = vat / 1.2;
      setResult(`£${vat} with VAT, £${vatCalc.toFixed(2)} without VAT`);
    } else {
      let vatCalc = vat * 1.2;
      setResult(`£${vatCalc.toFixed(2)} with VAT, £${vat} without VAT`);
    }
    setVat("");
  };
  return (
    <Grid container sx={{marginTop: '25px'}}>
      <Grid
        item
        xs={12}
        sx={{ padding: "10px", borderBottom: '1px solid black' }}
        marginBottom
      >
        <Grid item xs={12} sx={{ display: "flex" }}>
          {" "}
          <Typography variant='h5' gutterBottom sx={{ marginRight: "20px" }}>
            VAT Calculator
          </Typography>
          <a
            href='http://www.vatcalculator.co.uk/'
            target='_blank'
            style={{ textDecoration: "none" }}
          >
            {" "}
            <Button
              type='submit'
              variant='contained'
              color='success'
              style={{ marginBottom: "20px" }}
            >
              Online VAT Calculator
            </Button>{" "}
          </a>
        </Grid>

        <form onSubmit={submitVatCalc}>
          <FormControl sx={{ display: "flex" }}>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              defaultValue='exclude'
              name='radio-buttons-group'
              row
            >
              <FormControlLabel
                value='exclude'
                control={<Radio />}
                label='Exclude VAT'
                onClick={() => setRadio("exclude")}
              />
              <FormControlLabel
                value='add'
                control={<Radio />}
                label='Add VAT'
                onClick={() => setRadio("add")}
              />
            </RadioGroup>
          </FormControl>
          <FormControlLabel
            control={
              <TextField
                id='vat'
                // type='number'
                data-type='currency'
                fullWidth
                value={vat}
                onChange={(e) => setVat(e.target.value)}
                defaultValue={vat}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            }
          />

          <Button
            type='submit'
            variant='outlined'
            color='success'
            style={{ marginBottom: "20px" }}
          >
            Calculate
          </Button>
          <Typography>{result}</Typography>
        </form>
      </Grid>
      <hr style={{ color: "black" }} />
      <Grid
        item
        xs={12}
        sx={{ padding: "10px", borderBottom: '1px solid black' }}
        marginBottom
      >
        <Grid item xs={12} sx={{ display: "flex" }}>
          {" "}
          <Typography variant='h5' gutterBottom sx={{ marginRight: "20px" }}>
            Parcel Force Tracker
          </Typography>
          <a
            href='https://www.parcelforce.com/track-trace'
            target='_blank'
            style={{ textDecoration: "none" }}
          >
            {" "}
            <Button
              type='submit'
              variant='contained'
              color='secondary'
              style={{ marginBottom: "20px" }}
            >
              Parcel Force tracking
            </Button>{" "}
          </a>
        </Grid>
        <Grid>
          {" "}
          <FormControlLabel
            control={
              <TextField
                id='vat'
                type='text'
                fullWidth
                value={tracking}
                onChange={(e) => setTracking(e.target.value)}
                helperText='Consigment Number'
                defaultValue={vat}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            }
          />
          <Button
            variant='outlined'
            color='secondary'
            style={{ marginBottom: "20px", marginRight: "5px" }}
            onClick={() => setTracking("")}
          >
            Clear
          </Button>
          <a
            target='_blank'
            href={`https://www.parcelforce.com/track-trace?trackNumber=${tracking}`}
            style={{ textDecoration: "none" }}
          >
            {" "}
            <Button
              variant='outlined'
              color='secondary'
              style={{ marginBottom: "20px" }}
            >
              Track
            </Button>
          </a>
        </Grid>
      </Grid>
      <hr style={{ color: "black" }} />
      <Grid
        item
        xs={12}
        sx={{ padding: "10px" }}
        marginBottom
      >
        <Grid item xs={12} sx={{ display: "flex", flexDirection: 'column' }}>
          {" "}
          <Typography variant='h5' gutterBottom sx={{ marginRight: "20px" }}>
            Links
          </Typography>
          <a
            target='_blank'
            href="https://www.hp.com/gb-en/shop/ink-toner-paper.aspx"
            style={{ textDecoration: "none" }}
          >
            {" "}
            <Button
              variant='contained'
              color='info'
              style={{ marginBottom: "20px" }}
            >
              Printer / Ink Compatibility
            </Button>
          </a>
          <a
            target='_blank'
            href="https://www.hp.com/uk-en/privacy/privacy-feedback.html"
            style={{ textDecoration: "none" }}
          >
            {" "}
            <Button
              variant='contained'
              color='info'
              style={{ marginBottom: "20px" }}
            >
              Privacy Team
            </Button>
          </a>

        </Grid>

      </Grid>
    </Grid>
  );
};

export default Tools;
