import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import { BiCopy } from "react-icons/bi";

const Ebay = () => {
  const [open, setOpen] = useState(false);
  const copyToClipboard = (e) => {
    setOpen(true);
    navigator.clipboard.writeText(e.toString());
  };

  const templates = [
    {
      id: 1,
      text: "xxxxx",
    },
    {
      id: 2,
      text: "xxx\n\nwith spacing",
    },
  ];

  return (
    <>
      {templates.map((template) => {
        return (
          <Grid container key={template.id} sx={{marginTop: '30px'}}>
            <Grid item xs={12} marginBottom>
              {" "}
              {/* <Typography
                variant='h6'
                id={template.id}
                sx={{
                  display: "inline-block",
                  borderBottom: "1px solid green",
                  marginBottom: "10px",
                }}
              >
                {template.title}
              </Typography> */}
              <BiCopy
                onClick={() => copyToClipboard(template.text)}
                style={{
                  cursor: "pointer",
                  marginLeft: "10px",
                  marginRight: "10px",
                  color: "green",
                  display: 'inline-block'
                }}
              />{" "}
              <Typography
                key={template.id}
                variant='body1'
                style={{ whiteSpace: "pre-wrap", display: 'inline-block' }}
              >
                {template.text}
              </Typography><hr></hr>
            </Grid>
            <Grid item xs={12}>
              {" "}
            </Grid>
            <Snackbar
              open={open}
              onClose={() => setOpen(false)}
              autoHideDuration={2000}
              message='Copied to clipboard'
            />
          </Grid>
        );
      })}
    </>
  );
};

export default Ebay;
