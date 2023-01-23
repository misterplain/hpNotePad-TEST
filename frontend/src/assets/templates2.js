import { useEffect, useMemo } from "react";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import { BiCopy } from "react-icons/bi";
import parse from "html-react-parser";
// import { useQuill } from "react-quilljs";
// import "quill/dist/quill.snow.css";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
// import parse from 'html-react-parser';
import * as clipboard from "clipboard-polyfill/text";

export const TemplateText = ({ name, date, orderNumber, apology }) => {
  // const { quill, quillRef } = useQuill();
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "We have some base content." }],
    },
  ]);

  const [open, setOpen] = useState(false);
  const [timeGreeting, setTimeGreeting] = useState("");
  // const copyToClipboard = (e) => {
  //   setOpen(true);
  //   navigator.clipboard.writeText(parse(e));
  // };

  const example = `<a href="google.com">Example HTML string</a><b>bold</b><i>italic</i>`;

  // async function handler() {
  //   console.log("Previous clipboard contents:", await clipboard.read());
  
  //   const item = new clipboard.ClipboardItem({
  //     "text/html": new Blob(
  //       ["<i>Markup</i> <b>text</b>. Paste me into a rich text editor."],
  //       { type: "text/html" }
  //     ),
  //     "text/plain": new Blob(
  //       ["Fallback markup text. Paste me into a rich text editor."],
  //       { type: "text/plain" }
  //     ),
  //   });
  //   await clipboard.write([item]);
  // }

  // useEffect(() => {
  //   if (quill) {
  //     quill.on('text-change', (delta, oldDelta, source) => {
  //       console.log('Text change!');
  //       console.log(quill.getText()); // Get text only
  //       console.log(quill.getContents()); // Get delta contents
  //       console.log(quill.root.innerHTML); // Get innerHTML using quill
  //       console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
  //     });
  //   }
  // }, [quill]);

  let time = new Date();
  let hour = time.getHours();

  const parse = require("html-react-parser");

  // const richTextDiv = document.getElementById("richTextDiv");

  // const clipboardItem = new ClipboardItem({
  //   "text/plain": new Blob(
  //     [richTextDiv.innerText],
  //     { type: "text/plain" }
  //   ),
  //   "text/html": new Blob(
  //     [richTextDiv.outerHTML],
  //     { type: "text/html" }
  //   ),
  // });



  function copyToClipboard(x){
    const clipboardItem = new ClipboardItem({
      "text/plain": new Blob(
        [x.innerText],
        { type: "text/plain" }
      ),
      "text/html": new Blob(
        [x.outerHTML],
        { type: "text/html" }
      ),
    });
    navigator.clipboard.write([clipboardItem]);
  }

  const TemplateTextArray = [
    {
      id: "test",
      title: "test",
      text: `Dear ${name},
       ${date}. <strong>example</strong> <a href="https://www.google.com">example</a>, react html parser ${parse(example)}
        `,
    },
    {
      id: "DOARepCollection",
      title: "DOA Refund CC Collection",
      text: `Dear ${name},
      

${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We are sorry to hear that the product you have received is defective, we are actively working to have this item returned and have your replacement issued as soon as possible.


Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the replacement procedure.


Our driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.


Once collection has been successful, the replacement process will begin, and your order will be shipped to you within 2-3 working days.


If there is anything further you need, please do not hesitate to let us know.


Kind regards,
        `,
    },
    {
      id: "DOARepLabel",
      title: "DOA Refund CC Collection",
      text: `Dear ${name},


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We are sorry to hear that the product you have received is defective, we are actively working to have this item returned and have your replacement issued as soon as possible.


We will send you the necessary returns label via email within 5 working days so that you may return through your local Post Office. 


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the replacement procedure.


Please ensure that you get a receipt from the Post Office when you return this, this may be required in the unlikely event something goes wrong with the return to our warehouse.


Once the return has been successful, the replacement process will begin, and your order will be shipped to you within 2-3 working days.


If there is anything further you need, please do not hesitate to let us know.


Kind regards,
        `,
    },
    {
      id: "DOARefundCCCollection",
      title: "DOA Refund CC Collection",
      text: `Dear ${name},


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }
      

We are sorry to hear that the product you have received is defective, we are actively working to have this item returned and have your refund issued as soon as possible.


Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.


Our driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.


Once collection has been successful, our refund process will begin, and the money will be returned to your account within 3-5 working days.


If there is anything further you need, please do not hesitate to let us know.


Kind regards,
        `,
    },
    {
      id: "DOARefundPPCollection",
      title: "DOA Refund PP Collection",
      text: `Dear ${name},

${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We are sorry to hear that the product you have received is defective, we are actively working to have this item returned and have your refund issued as soon as possible.


Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.


Our driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.


Once collection has been successful, our refund process will begin, and the money will be returned to your PayPal account within 10 working days.


If there is anything further you need, please do not hesitate to let us know.


Kind regards,
        `,
    },
    {
      id: "DOARefundWireCollection",
      title: "DOA Refund Wire Collection",
      text: `Dear ${name},


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We are sorry to hear that the product you have received is defective, we are actively working to have this item returned and have your refund issued as soon as possible.


Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.


Our driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.


As you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:


IBAN:\nSWIFT:\nBank Name:\nBranch:\nAccountName:\nSort Code:\nAccount Number:\n*(Important Information - Please complete all fields)


After successful collection and arrival of the goods at our warehouse and provided bank details, we will proceed with the refund process. Your funds will be returned to your account within the next 8 working days.


If there is anything further you need, please do not hesitate to let us know.


Kind regards,
        `,
    },
    {
      id: "DOARefundCCLabel",
      title: "DOA Refund CC - Label",
      text: `Dear ${name},


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We are sorry to hear that the product you have received is defective. We are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.


Please ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.


Once this item is returned to our warehouse, our refund process will begin, and the money will be returned to your account within 3-5 working days.


If there is anything further you need, please do not hesitate to let us know.


Kind regards,
        `,
    },
    {
      id: "DOARefundPPLabel",
      title: "DOA Refund PP - Label",
      text: `Dear ${name},
      

${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We are sorry to hear that the product you have received is defective. We are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.


Please ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.


Once this item is returned to our warehouse, our refund process will begin, and the money will be returned to your PayPal account within 10 working days.


If there is anything further you need, please do not hesitate to let us know.\


Kind regards,
        `,
    },
    {
      id: "DOARefundWireLabel",
      title: "DOA Refund Wire Collection",
      text: `Dear ${name},
      

${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We are sorry to hear that the product you have received is defective. We are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.


Please ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.


As you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:


IBAN:\nSWIFT:\nBank Name:\nBranch:\nAccountName:\nSort Code:\nAccount Number:\n*(Important Information - Please complete all fields)


After successful collection and arrival of the goods at our warehouse and provided bank details, we will proceed with the refund process. Your funds will be returned to your account within the next 8 working days.


If there is anything further you need, please do not hesitate to let us know.


Kind regards,
        `,
    },
    // change of mind templates
    {
      id: "COMRefundCCCollection",
      title: "Change of Mind - CC - Collection",
      text: `Dear ${name},
  
  
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }
  
  
We are sorry to hear that your HP Store product did not meet your expectations on this occasion, and we are actively working to have this item returned and have your refund issued as soon as possible.
  
  
Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.
  
  
We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.
  
  
Our driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.
  
  
Once collection has been successful, our refund process will begin, and the money will be returned to your account within 3-5 working days.
  
  
If there is anything further you need, please do not hesitate to let us know.
  
  
Kind regards,
        `,
    },
  ];
  return (
    <>
      {TemplateTextArray.map((template) => {
        return (
          <Grid container key={template.id}>
            <Grid item xs={12}>
              {" "}
              <Typography
                variant='h6'
                id={template.id}
                sx={{
                  display: "inline-block",
                  borderBottom: "1px solid green",
                  marginBottom: "10px",
                }}
              >
                {template.title}
              </Typography>
              <BiCopy
                onClick={() => {
                  setOpen(true);
                  // navigator.clipboard.writeText('text/html', template.text);
                  copyToClipboard(template.id)
                }}
                style={{
                  cursor: "pointer",
                  marginLeft: "10px",
                  color: "green",
                }}
              />
              <Snackbar
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={2000}
                message='Copied to clipboard'
              />
            </Grid>
            <Grid item xs={12}>
              {" "}
              <div id={template.id} style={{whiteSpace:'pre-wrap'}}>{template.text}</div>
              {/* <textfield
                key={template.id}
                variant='body1'
                style={{ whiteSpace: "pre-wrap" }}
              >
                {parse(template.text)}
              </textfield> */}
              {/* <div style={{ width: 1000, height: 300 }}>
                <div ref={quillRef} />
              </div> */}
              {/* <Slate
                editor={editor}
                value={value}
                onChange={(newValue) => setValue(newValue)}
              >
                <Editable style={{ border: "1px solid black" }} />
              </Slate> */}
              {/* <p style={{whiteSpace:'pre-wrap'}}>{template.text}</p> */}
            </Grid>
            <Divider />
          </Grid>
        );
      })}
    </>
  );

  // window.addEventListener("DOMContentLoaded", function () {
  //   const button = document.body.appendChild(document.createElement("button"));
  //   button.textContent = "Copy";
  //   button.addEventListener("click", handler);
  // });

};
