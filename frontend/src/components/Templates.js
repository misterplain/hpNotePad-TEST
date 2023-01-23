import React, { useState, useEffect } from "react";
import {
  Button,
  ButtonGroup,
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  FormControl,
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

const Templates = () => {
  //dynamic template values
  const [date, setDate] = useState("XXX");
  const [name, setName] = useState("Customer");
  const [orderNumber, setOrderNumber] = useState("in format SCEO********");
  const [apology, setApology] = useState(false);

  //snackbar
  const [open, setOpen] = useState(false);

  //set text editor value
  const [text, setText] = useState("");
  const [templateTitle, setTemplateTitle] = useState("Template / Text Editor");

  //convert date
  const convertDate = (date) => {
    let month = date.slice(5, 7);
    let day = date.slice(8, 10);
    return `${day}/${month}`;
  };

  //inject "good morning or good afternoon" into template
  let time = new Date();
  let hour = time.getHours();

  //copy to clipboard
  const copyToClipboard = async () => {
    console.log("copying to clipboard");
    try {
      const content = document.getElementById("parsedText").innerHTML;
      const blobInput = new Blob([content], { type: "text/html" });
      const clipboardItemInput = new ClipboardItem({ "text/html": blobInput });
      navigator.clipboard.write([clipboardItemInput]);
    } catch (e) {
      console.log(e);
    }
    setOpen(true);
  };

  //change handler for apology checkbox
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setApology(!apology);
  };

  //templates
  const templates = [
    {
      id: "test",
      title: "test title 1",
      text: `<p>test <strong>information</strong> 1<p> ${name} ${orderNumber}, ${
        apology
          ? "Apologies for <br><a href='google.com'>link</a>the delay in our reply"
          : ""
      } ${date}`,
    },
    {
      id: "DOARepCollection",
      title: "DOA Replacemet Collection",
      text: `Dear ${name}, <br><br>
      

${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to hear that the product you have received is defective, we are actively working to have this item returned and have your replacement issued as soon as possible.<br><br>


Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.<br><br>


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the replacement procedure.<br><br>


Our driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


Once collection has been successful, the replacement process will begin, and your order will be shipped to you within 2-3 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "DOARepLabel",
      title: "DOA Rep Label",
      text: `Dear ${name}, <br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to hear that the product you have received is defective, we are actively working to have this item returned and have your replacement issued as soon as possible.<br><br>We will send you the necessary returns label via email within 5 working days so that you may return through your local Post Office.<br><br> 


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the replacement procedure.<br><br>


Please ensure that you get a receipt from the Post Office when you return this, this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


Once the return has been successful, the replacement process will begin, and your order will be shipped to you within 2-3 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "DOARefundCCCollection",
      title: "DOA Refund CC Collection",
      text: `Dear ${name}, <br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
      

We are sorry to hear that the product you have received is defective, we are actively working to have this item returned and have your refund issued as soon as possible.<br><br>


Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.<br><br>


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>


Our driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


Once collection has been successful, our refund process will begin, and the money will be returned to your account within 3-5 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "DOARefundPPCollection",
      title: "DOA Refund PP Collection",
      text: `Dear ${name}, <br><br>

${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to hear that the product you have received is defective, we are actively working to have this item returned and have your refund issued as soon as possible.<br><br>


Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.<br><br>


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>


Our driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


Once collection has been successful, our refund process will begin, and the money will be returned to your PayPal account within 10 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "DOARefundWireCollection",
      title: "DOA Refund Wire Collection",
      text: `Dear ${name}, <br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to hear that the product you have received is defective, we are actively working to have this item returned and have your refund issued as soon as possible.<br><br>


Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.<br><br>


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>


Our driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


As you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:<br><br>


IBAN:<br>SWIFT:<br>Bank Name:<br>Branch:<br>AccountName:<br>Sort Code:<br>Account Number:<br>*(Important Information - Please complete all fields)<br><br>


After successful collection and arrival of the goods at our warehouse and provided bank details, we will proceed with the refund process. Your funds will be returned to your account within the next 8 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "DOARefundCCLabel",
      title: "DOA Refund CC - Label",
      text: `Dear ${name}, <br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to hear that the product you have received is defective. We are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.<br><br>


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>


Please ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


Once this item is returned to our warehouse, our refund process will begin, and the money will be returned to your account within 3-5 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "DOARefundPPLabel",
      title: "DOA Refund PP - Label",
      text: `Dear ${name}, <br><br>
      

${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to hear that the product you have received is defective. We are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.<br><br>


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>


Please ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


Once this item is returned to our warehouse, our refund process will begin, and the money will be returned to your PayPal account within 10 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "DOARefundWireLabel",
      title: "DOA Refund Wire Collection",
      text: `Dear ${name}, <br><br>
      

${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to hear that the product you have received is defective. We are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.<br><br>


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>


Please ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


As you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:<br><br>


IBAN:<br>SWIFT:<br>Bank Name:<br>Branch:<br>AccountName:<br>Sort Code:<br>Account Number:<br>*(Important Information - Please complete all fields)<br><br>


After successful collection and arrival of the goods at our warehouse and provided bank details, we will proceed with the refund process. Your funds will be returned to your account within the next 8 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    // change of mind templates
    {
      id: "COMRefundCCCollection",
      title: "Change of Mind - CC - Collection",
      text: `Dear ${name}, <br><br>
  
  
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
We are sorry to hear that your HP Store product did not meet your expectations on this occasion, and we are actively working to have this item returned and have your refund issued as soon as possible.<br><br>
  
  
Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.<br><br>
  
  
We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>
  
  
Our driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>
  
  
Once collection has been successful, our refund process will begin, and the money will be returned to your account within 3-5 working days.<br><br>
  
  
If there is anything further you need, please do not hesitate to let us know.<br><br>
  
  
Kind regards,
        `,
    },
    {
      id: "COMRefundPPCollection",
      title: "Change of Mind - PP - Collection",
      text: `Dear ${name}, <br><br>
  

${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
We are sorry to hear that your HP Store product did not meet your expectations on this occasion, and we are actively working to have this item returned and have your refund issued as soon as possible.<br><br>
  
  
Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.<br><br>
  
  
We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>
  
  
Our driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>
  
  
Once collection has been successful, our refund process will begin, and the money will be returned to your PayPal account within 10 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>
  
  
Kind regards,
        `,
    },
    {
      id: "COMRefundWireCollection",
      title: "Change of Mind - Wire - Collection",
      text: `Dear ${name}, <br><br>
  
  
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to hear that your HP Store product did not meet your expectations on this occasion, and we are actively working to have this item returned and have your refund issued as soon as possible.<br><br>


Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.<br><br>


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>


Our driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


As you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:<br><br>


IBAN:<br>SWIFT:<br>Bank Name:<br>Branch:<br>AccountName:<br>Sort Code:<br>Account Number:<br>*(Important Information - Please complete all fields)<br><br>


After successful collection and arrival of the goods at our warehouse and provided bank details, we will proceed with the refund process. Your funds will be returned to your account within the next 8 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "COMRefundCCLabel",
      title: "Change of Mind - CC - Label",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to hear that your HP Store product did not meet your expectations on this occasion, and we are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.<br><br>


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>


Please ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


Once this item is returned to our warehouse, our refund process will begin, and the money will be returned to your account within 3-5 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "COMRefundPPLabel",
      title: "Change of Mind - P - Label",
      text: `Dear ${name}, <br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to hear that your HP Store product did not meet your expectations on this occasion, and we are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days. <br><br>


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund process.<br><br>


Please ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


Once this item is returned to our warehouse, our refund process will begin, and the money will be returned to your PayPal account within 10 working days. <br><br>


If there is anything further you need, please do not hesitate to let us contact us.<br><br>


Kind regards,
        `,
    },
    {
      id: "COMRefundWireLabel",
      title: "Change of Mind - Wire - Collection",
      text: `Dear ${name}, <br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to hear that the product you have received is defective. We are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days. <br><br>


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund process.<br><br>


Please ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


As you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:<br><br>


IBAN:<br>SWIFT:<br>Bank Name:<br>Branch:<br>AccountName:<br>Sort Code:<br>Account Number:<br>*(Important Information - Please complete all fields)<br><br>
  
  
After successful collection and arrival of the goods at our warehouse and provided bank details, we will proceed with the refund process. Your funds will be returned to your account within the next 8 working days.<br><br>
  
  
If there is anything further you need, please do not hesitate to let us know.<br><br>
  
  
Kind regards,
        `,
    },
    {
      id: "COM14",
      title: "No Return outside 14 days",
      text: `Dear ${name}, <br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are unable to submit a return request for your order as it is now outside of the 14 day return period. We are sorry for any inconvenience this may cause.<br><br>
  
Kind regards,
        `,
    },
    //DAMAGE TEMPLATES
    {
      id: "DMGRepCollection",
      title: "Damaged Refund CC Collection",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to hear that the product you have received is damaged, we are actively working to have this item returned and have your replacement issued as soon as possible.<br><br>


Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.<br><br>


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the replacement procedure.<br><br>


Our driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


Once collection has been successful, the replacement process will begin, and your order will be shipped to you within 2-3 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "DMGRepLabel",
      title: "Damaged Refund CC Collection",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to hear that the product you have received is damaged, we are actively working to have this item returned and have your replacement issued as soon as possible.<br><br>


We will send you the necessary returns label via email within 5 working days so that you may return through your local Post Office.<br><br> 


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the replacement procedure.<br><br>


Please ensure that you get a receipt from the Post Office when you return this, this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


Once the return has been successful, the replacement process will begin, and your order will be shipped to you within 2-3 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "DMGRefundCCCollection",
      title: "Damaged Refund CC Collection",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to hear that the product you have received is damaged, we are actively working to have this item returned and have your refund issued as soon as possible.<br><br>


Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.<br><br>


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>


Our driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


Once collection has been successful, our refund process will begin, and the money will be returned to your account within 3-5 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "DMGRefundPPCollection",
      title: "DamagedRefund PP Collection",
      text: `Dear ${name},<br><br>
      
  
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to hear that the product you have received is damaged, we are actively working to have this item returned and have your refund issued as soon as possible.<br><br>


Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.<br><br>


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>


Our driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


Once collection has been successful, our refund process will begin, and the money will be returned to your PayPal account within 10 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "DMGRefundWireCollection",
      title: "Damaged Refund Wire Collection",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to hear that the product you have received is damaged, we are actively working to have this item returned and have your refund issued as soon as possible.<br><br>


Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.<br><br>


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>


Our driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


As you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:<br><br>


IBAN:<br>SWIFT:<br>Bank Name:<br>Branch:<br>AccountName:<br>Sort Code:<br>Account Number:<br>*(Important Information - Please complete all fields)<br><br>


After successful collection and arrival of the goods at our warehouse and provided bank details, we will proceed with the refund process. Your funds will be returned to your account within the next 8 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "DMGRefundCCLabel",
      title: "Damaged Refund CC - Label",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to hear that the product you have received is damaged. We are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.<br><br>


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>


Please ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


Once this item is returned to our warehouse, our refund process will begin, and the money will be returned to your account within 3-5 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "DMGRefundPPLabel",
      title: "Damaged Refund PP - Label",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to hear that the product you have received is damaged. We are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.<br><br>


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>


Please ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


Once this item is returned to our warehouse, our refund process will begin, and the money will be returned to your PayPal account within 10 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "DMGRefundWireLabel",
      title: "Damaged Refund Wire Collection",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to hear that the product you have received is damaged. We are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.<br><br>


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>


Please ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


As you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:<br><br>


IBAN:<br>SWIFT:<br>Bank Name:<br>Branch:<br>AccountName:<br>Sort Code:<br>Account Number:<br>*(Important Information - Please complete all fields)<br><br>


After successful collection and arrival of the goods at our warehouse and provided bank details, we will proceed with the refund process. Your funds will be returned to your account within the next 8 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "DMGPhotosRep",
      title: "Photos Needed - Rep ",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

      We are sorry to hear that the product you have received is damaged, we are actively working to have this item returned and have your replacement issued as soon as possible.<br><br>
In order to raise the issue with the warehouse, and organise your return can you please send us photos of the damage to the product and the box it was delivered in?<br><br>



If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "DMGPhotosRef",
      title: "Photos Needed - Rep ",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

      We are sorry to hear that the product you have received is damaged, we are actively working to have this item returned and have your refund issued as soon as possible.<br><br>
In order to raise the issue with the warehouse, and organise your return can you please send us photos of the damage to the product and the box it was delivered in?<br><br>

If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    //misc#2
    {
      id: "MSC2LowVal",
      title: "Low Value - No Collect",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

      In regards to your recent claim to have this item returned, we will not require return for your refund or replacement claim to process. You may dispose of this item as you see fit. You will soon begin to receive emails regarding your refund or replacement.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "MSC2AddressMod",
      title: "Address Mod Sent to LSP",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

We have sent the address information directly to the warehouse to update with the courier. Please note that this process may delay delivery by 1-2 working days.<br><br>

You may monitor your tracking for further updates.<br><br>

If the courier is not able to update this address before the order is fully sent back to our warehouse, please confirm whether you prefer to receive a refund, or if you prefer to have a replacement order generated to the correct address.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "MSC2VouchOff",
      title: "Voucher Offer",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

      We are sorry to hear that you faced some issues and we did not achieve our normal high standards.<br><br>
      We sincerely apologise for any inconvenience this may have caused and would like to offer you a £** e-discount voucher in recognition of this experience, which you can use on your next HP Store purchase.<br><br>
Please confirm if you accept this voucher and we will escalate further for the code. <br><br>
      We look forward to seeing you back at HP Store in the future.<br><br>
      


Kind regards,
        `,
    },
    {
      id: "MSC2VouchCode",
      title: "Voucher Code",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

      We are sorry to hear that you faced some issues and we did not achieve our normal high standards.<br><br>
      We sincerely apologise for any inconvenience this may have caused and would like to offer you a £** e-discount voucher in recognition of this experience, which you can use on your next HP Store purchase.<br><br>
      Please find below the discount voucher code (*conditions apply) and the steps how to receive the discount online:<br><br>
      ·     	-Log on to your account.<br>
      ·     	-Choose the product(s) of your choice and add it/them to the basket<br>
      ·     	-Proceed to checkout.<br>
      ·     	-Select “Apply E-voucher” and enter your exclusive code in the field.<br>
      ·     	<strong>-Your code is:</strong><br>
      ·     	-A discount of the value of the voucher will be applied automatically<br>
      ·     	-Confirm your order with the payment method of your choice<br><br>
      <strong>**The voucher is valid until ***** on the UK HP Online Store. Please note - only 1 discount code can be applied per order, all vouchers are for single use only.</strong><br><br>
      
      We look forward to seeing you back at HP Store in the future.<br><br>
      


Kind regards,
        `,
    },
    {
      id: "MSC2ErrCancelled",
      title: "System Error - order cancelled",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

We are sorry to advise that due to an issue in processing your order and it has been fully cancelled. Any money taken will be on its way back to you within the next few working days. Please confirm if you do not receive your refund within the next few working days and we will raise an query with the Finance Team.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "MSC2ReturnDelay",
      title: "Return Delay / collection or label ",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

      We apologise for the ongoing delay with your return.<br><br>


      There are several factors currently affecting this, including the intermittent strikes with Parcel Force, and unfortunately our collection & return label services have been greatly affected.<br><br>
      
      
      Our management team is presently working to find a solution to these delays, and we will confirm the details of your return as soon as we can.<br><br>
      
      
      Please note that this delay does not in any way affect your request, or your right to return.<br><br>
      
      
      We sincerely apologise once again, for this inconvenience.<br><br>
      




Kind regards,
        `,
    },
    {
      id: "MSC2ARN",
      title: "Return Delay / collection or label ",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

      Thank you for your mail relating to the refund for our HP Store order ******<br><br>
      Our Finance Team have confirmed your refund was released on <**/**/****> and we attach the credit note invoice confirming this transaction was made from the HP bank. We also provide the following transaction reference number for the payment that was made by HPs bank < ***********>.<br><br>
      These funds should appear back as an available balance on your account within the next few days subject to your banks standard operating procedure.<br><br>
      For more information on our refund policy please visit our FAQ's page on the HP Store Website.<br><br>
      




Kind regards,
        `,
    },
    {
      id: "MSC2EmptyBox",
      title: "Empty Box",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

      In connection with your return, we inform you that the investigation has been completed by our logistics department and the courier, the box was found to be empty.<br><br>
 
      In addition, the box showed no signs of being tampered with prior to delivery to the warehouse.<br><br>
       
      Since your original order was successfully delivered to you, we inform your claim has been rejected.<br><br>
       
      
      




Kind regards,
        `,
    },
    {
      id: "MSC2BillIssued",
      title: "Bill Issued ",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

      Due to the lack of update on the collection request, we have been informed by our carrier that a bill will be now issued for the non-return and non-payment of this product.<br><br>
      You will receive the bill within 2/3 days with payment instructions.<br><br>
      If we can assist you with anything else, please let us know.<br><br>
      
      
      




Kind regards,
        `,
    },
    // MISSING TEMPLATES
    {
      id: "MSGAllRep",
      title: "Missing All - Rep",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We sincerely apologise that you have not received your HP order and we are actively working with our logistics team to have a replacement order sent out as soon as possible.<br><br>


You will receive a confirmation email as soon this is on its way to you.<br><br>


If there is anything further you need, please do not hesitate to let me know.<br><br>


Kind regards,
      
        `,
    },
    {
      id: "MSGPartRep",
      title: "Missing Part - Rep",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We sincerely apologise that you have not received your full HP order and we are actively working with our logistics team to have the missing item sent out as soon as possible.<br><br>


You will receive a confirmation email as soon this is on its way to you.<br><br>


If there is anything further you need, please do not hesitate to let me know.<br><br>


Kind regards,
      
        `,
    },
    {
      id: "MSGAllRef",
      title: "Missing All - Refund",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We sincerely apologise that you have not received your HP order and we are actively working with our logistics team to refund you as soon as possible.<br><br>


Your money will be returned to your account within 3-5 working days.<br><br>


If there is anything further you need, please do not hesitate to let me know.<br><br>


Kind regards,
      
        `,
    },
    {
      id: "MSGAllWireRef",
      title: "Missing All - Wire Refund",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We sincerely apologise that you have not received your HP order and we are actively working with our logistics team to refund you as soon as possible.<br><br>


As you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:<br><br>


IBAN:<br>SWIFT:<br>Bank Name:<br>Branch:<br>AccountName:<br>Sort Code:<br>Account Number:<br>*(Important Information - Please complete all fields)<br><br>


If there is anything further you need, please do not hesitate to let me know.<br><br>


Kind regards,
      
        `,
    },
    {
      id: "MSGPartRef",
      title: "Missing All - Refund",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We sincerely apologise that you have not received your full HP order and we are actively working with our logistics team to refund the missing product as soon as possible.<br><br>


Your money will be returned to your account within 3-5 working days.<br><br>


If there is anything further you need, please do not hesitate to let me know.<br><br>


Kind regards,
      
        `,
    },
    {
      id: "MSGPartWireRef",
      title: "Missing All - Wire Refund",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We sincerely apologise that you have not received your full HP order and we are actively working with our logistics team to refund the missing product as soon as possible.<br><br>


As you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:<br><br>


IBAN:<br>SWIFT:<br>Bank Name:<br>Branch:<br>AccountName:<br>Sort Code:<br>Account Number:<br>*(Important Information - Please complete all fields)<br><br>


If there is anything further you need, please do not hesitate to let me know.<br><br>


Kind regards,
      
        `,
    },
    {
      id: "MSGDeliveredRef",
      title: "Delivered - Refund already sent ",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


      The Parcel Force investigation came back showing proper delivery of the original order. <strong>Please see delivery image attached.</strong><br><br>
      As you have already received the refund on this missing claim, please confirm if you prefer we arrange a return of the order, or for us to generate a bill to account for the refund already sent.<br><br>
      


If there is anything further you need, please do not hesitate to let me know.<br><br>


Kind regards,
      
        `,
    },
    {
      id: "MSGDeliveredRep",
      title: "Delivered - Rep already delivered ",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


      The Parcel Force investigation came back showing proper delivery of the original order. <strong>Please see delivery image attached.</strong><br><br>
      As you have already received the replacement order generated from this missing claim, please confirm if you prefer we arrange a return of the order, or for us to generate a bill to account for the additional order received.<br><br>


If there is anything further you need, please do not hesitate to let me know.<br><br>


Kind regards,
      
        `,
    },
    // wrong product templates
    {
      id: "WGPRepCollection",
      title: "Wrong Product Rep Collection",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to hear that you have received the wrong product, we are actively working to have this item returned and have your replacement issued as soon as possible.<br><br>


Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.<br><br>


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the replacement procedure.<br><br>


Our driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


Once collection has been successful, the replacement process will begin, and your order will be shipped to you within 2-3 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "WGPRepLabel",
      title: "Wrong Product Rep Collection",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


      We are sorry to hear that you have received the wrong product, and we are actively working to have this item returned and have your replacement issued as soon as possible.<br><br>


We will send you the necessary returns label via email within 5 working days so that you may return through your local Post Office.<br><br> 


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the replacement procedure.<br><br>


Please ensure that you get a receipt from the Post Office when you return this, this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


Once the return has been successful, the replacement process will begin, and your order will be shipped to you within 2-3 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "WGPRefundCCCollection",
      title: "Wrong Product Refund CC Collection",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


      We are sorry to hear that you have received the wrong product, and we are actively working to have this item returned and have your refund issued as soon as possible.<br><br>


Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.<br><br>


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>


Our driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


Once collection has been successful, our refund process will begin, and the money will be returned to your account within 3-5 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "WGPRefundPPCollection",
      title: "Wrong Product Refund PP Collection",
      text: `Dear ${name},<br><br>
      
  
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


      We are sorry to hear that you have received the wrong product, and we are actively working to have this item returned and have your refund issued as soon as possible.<br><br>


Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.<br><br>


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>


Our driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


Once collection has been successful, our refund process will begin, and the money will be returned to your PayPal account within 10 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "WGPRefundWireCollection",
      title: "Wrong Product Refund Wire Collection",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


      We are sorry to hear that you have received the wrong product, and we are actively working to have this item returned and have your refund issued as soon as possible.<br><br>


Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.<br><br>


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>


Our driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


As you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:<br><br>


IBAN:<br>SWIFT:<br>Bank Name:<br>Branch:<br>AccountName:<br>Sort Code:<br>Account Number:<br>*(Important Information - Please complete all fields)<br><br>


After successful collection and arrival of the goods at our warehouse and provided bank details, we will proceed with the refund process. Your funds will be returned to your account within the next 8 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "WGPRefundCCLabel",
      title: "Wrong Product Refund CC - Label",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


      We are sorry to hear that you have received the wrong product, and we are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.<br><br>


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>


Please ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


Once this item is returned to our warehouse, our refund process will begin, and the money will be returned to your account within 3-5 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "WGPRefundPPLabel",
      title: "Wrong Product Refund PP - Label",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


      We are sorry to hear that you have received the wrong product, and we are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.<br><br>


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>


Please ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


Once this item is returned to our warehouse, our refund process will begin, and the money will be returned to your PayPal account within 10 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "WGPRefundWireLabel",
      title: "Wrong Product Refund Wire Collection",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


      We are sorry to hear that you have received the wrong product, and we are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.<br><br>


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>


Please ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


As you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:<br><br>


IBAN:<br>SWIFT:<br>Bank Name:<br>Branch:<br>AccountName:<br>Sort Code:<br>Account Number:<br>*(Important Information - Please complete all fields)<br><br>


After successful collection and arrival of the goods at our warehouse and provided bank details, we will proceed with the refund process. Your funds will be returned to your account within the next 8 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "WGPPhotosRep",
      title: "Wrong Prod Photos Needed - Rep ",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

      We are sorry to hear that you have received the wrong product, we are actively working to have this item returned and have your replacement issued as soon as possible.<br><br>
In order to raise the issue with the warehouse, and organise your return can you please send us photos of the damage to the product and the box it was delivered in?<br><br>



If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "WGPPhotosRef",
      title: " Wrong Prod Photos Needed - Rep ",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

      We are sorry to hear that you have received the wrong product, and we are actively working to have this item returned and have your refund issued as soon as possible.<br><br>
In order to raise the issue with the warehouse, and organise your return can you please send us photos of the damage to the product and the box it was delivered in?<br><br>

If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
        `,
    },
    {
      id: "MSRTech",
      title: "Misrouted - Tech",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to hear that you are experiencing some technical issues with your HP product and we want to direct you to our HP Technical Support team who will be happy to assist and support to resolve your issue as quickly as possible.<br><br>


Please contact our experienced Technical Support team under the phone number:<br>

Consumer Products:   0207 660 0596<br>
Business Products:    0207 660 0403<br><br>


Important Information: Prior to calling our Technical Support please have your order details on hand, which should include the serial number of the device and a copy of the invoice if available.<br><br>


Please ensure you have enough time to support the call which may be extended if the agent is required to do some testing/troubleshooting on your product.<br><br>


If you have received your HP Store order within the last 30 days, and the Tech Support Team cannot assist directly and your item is marked as faulty, please revert back to us with the case notes and case ID provided by the Tech Team, and we will raise your claim for return of this device. Please specify if you prefer a replacement or a refund.<br><br>


For more information on the HP Technical support please review our FAQs page.<br><br>


Kind regards,`,
    },
    {
      id: "MSRSales",
      title: "Misrouted - Sales",
      text: `Dear ${name},<br><br>

 
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

       
Please contact our experienced sales team on<br>
       
Consumer 0207 660 3859<br>
       
Business 0207 660 3858<br><br>


You may also contact them via email at hpstoresalesuk@hp.com.<br><br>
       
They will assist you in choosing the correct product for your needs.<br><br>
       
Kind Regards,
       `,
    },
    {
      id: "MSRSapos",
      title: "Misrouted- Sapos",
      text: `Dear ${name},<br><br>

  
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to advise that we are unable to assist you directly with your sales enquiry.<br><br>


Please contact our experienced Sales Team, who will be happy to assist you and can be reached under the phone number:<br>

0207 660 3115 (Mon-Fri, office hours).<br><br>


If there is anything further we can do to assist please let us know.<br><br>


Kind regards,
   `,
    },
    {
      id: "MSRRecycling",
      title: "Recycling",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


Thank you for contacting HP Store Post sales.<br><br>


You can find all information on HP recycling at the HP Website below:<br>
<a href="https://www8.hp.com/uk/en/home/recycling.html">https://www8.hp.com/uk/en/home/recycling.html</a><br><br>


If you require any further assistance, please let us know.<br><br>


Kind regards,
 `,
    },
    {
      id: "MSRPromotions",
      title: "Misrouted - Promotions",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


Unfortunately, we are unable to assist you with this enquiry.<br><br>


Please contact our Promotions team, who will be happy to assist you and can be reached at the following email address: promotions@GPS1.hp.com.<br><br>


More information can be found on current HP promotions on our FAQs page below:<br>
<a href="https://www.hp.com/gb-en/shop/faq.aspx">https://www.hp.com/gb-en/shop/faq.aspx</a><br><br>


Kind regards,
 `,
    },
    {
      id: "MSRNonHP",
      title: "Misrouted - Non-HP",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We can only assist with orders placed directly on the HP Store. If this relates to an HP Store order, please provide your order number in format SCEOxxxxxxxx and we will look into your query. If you've purchased from another seller, you may contact them directly for assistance.<br><br>


Kind regards,
 `,
    },
    {
      id: "MSRInstantInk",
      title: "Misrouted - Instant Ink",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


      Please contact the Instant Ink team directly on 0207 660 0596.<br><br>
      If you require any further assistance, please let us know.
      <br><br>


Kind regards,
 `,
    },
    {
      id: "MSRInstantInk",
      title: "Misrouted - Instant Ink",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


Please contact the Instant Ink team directly on 0207 660 0596.<br><br>
      

If you require any further assistance, please let us know.<br><br>
      

Kind regards,
 `,
    },
    {
      id: "MSCInvoice",
      title: "Invoice Copy",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


Please find attached a copy of your invoice. <br><br>

 
If there is anything further you need please let us know, alternatively please review our FAQS on our website as seen below:
<a href="https://www.hp.com/gb-en/shop/faq.aspx">https://www.hp.com/gb-en/shop/faq.aspx</a><br><br>


Kind regards,
 `,
    },
    {
      id: "MSCRefundSent",
      title: "Refund Sent ",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


      Our Finance Team have confirmed that your refund was released on ***** and we attach your credit note invoice confirming this transaction was completed.<br><br>
      These funds should appear back as an available balance on your account within the next few days subject to your banks standard operating procedure.<br><br>
      
If there is anything further you need please let us know, alternatively please review our FAQS on our website as seen below:
<a href="https://www.hp.com/gb-en/shop/faq.aspx">https://www.hp.com/gb-en/shop/faq.aspx</a><br><br>


Kind regards,
 `,
    },
    {
      id: "MSCHolding",
      title: "Escalation - Holding",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We have sent your enquiry forward and are awaiting further input from our management team.<br><br>


Please be assured that HP takes all enquiries seriously and appreciate your patience and support whilst our investigation is ongoing, and this is being treated with the highest priority. We will contact you as soon as possible.<br><br>


Again, we thank you for your patience and understanding.<br><br>
      

Kind regards,
 `,
    },
    {
      id: "MSCHoldingCRT",
      title: "Escalation - Holding CRT",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


As we can only assist with orders received within the last 30 days, we have passed your request onto our Customer Relations Team who will contact you direct to resolve. We apologise for any inconvenience.<br><br>


Again, we thank you for your patience and understanding.<br><br>
      

Kind regards,
 `,
    },
    {
      id: "MSCCancelRequest",
      title: "Cancellation Request",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We have raised the request to fully cancel this order. Please note that due to the speed of the shipping system, we are not always able to fully cancel before the order before it ships to the courier. If this is the case, you will be notified that this has shipped, please note that if refuse delivery and let us know when you do, we will initiate the full refund.<br><br>


If this does cancel successfully before shipment, you will be notified as well via email. <br><br>


Kind regards,
 `,
    },
    {
      id: "MSCCancelSuccess",
      title: "Cancellation Success - CC/PP",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


Thank you for your request to cancel your recent HP Store order.<br><br>


We can confirm that your order is fully cancelled.<br><br>


Please note that if this purchase was made with a credit card, no money had been taken by HP for this order. Any money that appears to have been taken is simply on hold at your bank and will be returned within 3/5 business days. PayPal refunds are automatically initiated and will be back into your account within 8 business days.<br><br>


Kind regards,
 `,
    },
    {
      id: "MSCCancelSuccessWire",
      title: "Cancellation Success - Wire",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


Thank you for your request to cancel your recent HP Store order.<br><br>


We can confirm that your order is fully cancelled.<br><br>


As you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:<br><br>


IBAN:<br>SWIFT:<br>Bank Name:<br>Branch:<br>AccountName:<br>Sort Code:<br>Account Number:<br>*(Important Information - Please complete all fields)<br><br>


We would appreciate if you can also send us a screenshot of the transaction.<br><br>


If you need anything further, please let us know.<br><br>


Kind regards,
 `,
    },
    {
      id: "MSCBlank",
      title: "Blank",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br><br><br>


If you need anything further, please let us know.<br><br>


Kind regards,
 `,
    },
    // CARE PACK TEMPLATES
    {
      id: "CPCert",
      title: "Certificate Attached",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


Please find attached your HP Care Pack certificate.<br><br>


Once again, we apologise for any inconvenience this may have caused.<br><br>


If there is anything further, we can assist you with please feel free to contact us.<br><br>
      

Kind regards,
 `,
    },
    {
      id: "CPNotCompat",
      title: "Carepack not compatible",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


The Care Pack Team have advised that this Care Pack is not compatible with the hardware device you had tried to associate it with. <strong>Please confirm if you wish to have a refund on this Care Pack, or if you wish to associate this with a compatible hardware device</strong>.<br><br>

To speak directly with a Sales Agent regarding compatible Care Packs, you may contact them at 0207 660 3859 (Option 1 and Option 1 for Sales) or by writing them via email at hpstoresalesuk@hp.com.<br><br>
You may also visit the Care Pack Central to check on Care Pack compatibility with your device:<br>
<a href="https://cpc.ext.hp.com/portal/site/cpc/" target="__blank">https://www8.hp.com/us/en/carepacks/central.html</a><br><br>

Our apologies for any frustrations seen through the purchase of this Care Pack.<br><br>



If there is anything further, we can assist you with please feel free to contact us.<br><br>
      

Kind regards,
 `,
    },
    {
      id: "CPNotPhysical",
      title: "Certificate Not Physical",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


Please be aware that the Care Pack Warranty purchased is not a physical product but is sent electronically to you via the email address you provided when ordering. This email will contain an activation link that will direct you to the HP website where you can continue to register the Care Pack Warranty to your HP product with the serial number of the specific unit.<br><br>


If you do not receive your activation email within the next 2 business days, please contact us again and we will request that this is resent to you as soon as is possible.<br><br>


More information on HP Store Care Pack Activation can be found on our FAQS Page.<br><br>


If you require any further assistance, please let us know.<br><br>
      

Kind regards,
 `,
    },
    {
      id: "CPHWNeeded",
      title: "Hardware info needed",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


To enable us to complete the registration of your Care Pack, HP requires the following information to be sent to our Care Pack Registration team at the earliest opportunity.<br><br>


Please copy and paste the below information into your mail.<br>
Send your email to: postsales.carepackregistration@hp.com<br><br>


Email Subject: Care Pack Registration for HP Store order SCEOXXXXXX<br>
Dear HP Care Pack Registration team,<br>
Please find below the following information to allow the completion of my Care Pack Registration.<br>
Name:<br>
Address:<br>
Phone:<br>
Email:<br>
Product Code:<br>
Serial No:<br>
Invoice: (Please attach a copy of your original invoice)<br><br>


Please note Care Pack Registration can take up to 2 weeks to complete, after which your certificate will be visible and available for download. Further information on Care Pack Registration can be found on our FAQS Page below:<br>
<a href="https://www.hp.com/gb-en/shop/faq.aspx">hp.com/gb-en/shop/faq.aspx</a><br><br>


If you require any further assistance after this timeframe, please do let us know.<br><br>
      
      
Kind regards,
 `,
    },
    // ORDER STATUS
    {
      id: "OSAddressNeeded",
      title: "Address Needed",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We have received a request from the warehouse regarding your delivery. They have requested that you confirm your full delivery address.<br><br>


Once this has been sent to the warehouse, your order will be immediately shipped. You will begin to get automated emails from the system letting you know when it is on its way.<br><br>


If you need anything further, please let us know.<br><br>


Kind regards,
 `,
    },
    {
      id: "OSFraud",
      title: "Fraud Rejected",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


      We apologise for the order cancellation, and for any inconvenience.<br><br>
      Our finance team were unable to complete your order as they were unable to verify all the information provided.<br><br>
      I am sorry that we cannot offer specific reasons for order cancellations for data protection reasons. It is recommended that you contact your card holder for further advice.<br><br>
      If you need assistance in replacing the order, you can contact a sales agent on <strong>02076603859.</strong><br><br>


If you need anything further, please let us know.<br><br>


Kind regards,
`,
    },
    {
      id: "OSDelivered",
      title: "Delivered",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


Our tracking shows that your order has now been delivered.<br><br>


If you need anything further, please let us know.<br><br>


Kind regards,
 `,
    },
    {
      id: "OSDeliveryToday",
      title: "Delivery Today",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


Our tracking shows that your order is out for delivery today.<br><br>


If you need anything further, please let us know.<br><br>


Kind regards,
 `,
    },
    {
      id: "OSCollectPO",
      title: "Collect from PO",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


Due to failed deliveries, we have been unable to deliver your order. We have now arranged for your order to be collected from the local Post Office. Please reference your tracking information for further information.<br><br>

You may find further information related to the depot where this is located by using the following tool:<br>
<a href="https://www.parcelforce.com/depot-finder" target="__blank">https://www.parcelforce.com/depot-finder</a><br><br>

If you are unable to collect, please confirm if you wish to have a full refund on the order, or if you wish to have a replacement order generated. If you wish to have a replacement order generated, please confirm the full and complete delivery address so as to prevent further failed deliveries. <br><br>
If you need anything further, please let us know.<br><br>


Kind regards,
 `,
    },
    {
      id: "OSWithCourier",
      title: "Delivery Today",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


Our tracking shows that your order has shipped to the courier, you may monitor your tracking information for further updates.<br><br>


If you need anything further, please let us know.<br><br>


Kind regards,
 `,
    },
    {
      id: "OSEOL",
      title: "End of Life",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to advise that we are unable to fulfil your recent order HP Store order as this product has now been discontinued and no further stock is available. Your order will now be cancelled. <br><br>


Any money on reserve at your bank will be returned to you within 5/8 business days.<br><br>


Once again, we sincerely apologise we have not been unable to fulfil your requirements on this occasion. <br><br>


If there is anything further we can help with, please feel free to contact us.<br><br>
      

Kind regards,
 `,
    },
    {
      id: "OSETAFull",
      title: "No ETA Full",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to advise that your order has been delayed due to an unforeseen stock constraint within our supply chain.<br><br>


At present we do not have a firm date on when the new stock will arrive in our warehouse, but we continue to closely monitor this with our supply chain team, and we will notify you via email once your order has shipped.<br><br>


If you wish to cancel your order, please let us know in a reply here and we will do so. Alternatively, if you would need advice to select an alternative product, please contact our Sales Team via email hpstoresalesuk@hp.com or by phone on 02076603859.<br><br>


We sincerely apologise for any inconvenience this delay may cause and thank you for your patience and understanding.<br><br>
      

If there is anything further we can help with, please feel free to contact us.<br><br>
      

Kind regards,
 `,
    },
    {
      id: "OSRTSreforrep",
      title: "RTS - ref or rep?",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
      I apologise for the failed delivery.<br><br>

      Please confirm if you wish to have a full refund on the order, or if you wish to have a replacement order generated. If you wish to have a replacement order generated, please confirm the full and complete delivery address so as to prevent further failed deliveries. <br><br>
      

Kind regards,
 `,
    },
    {
      id: "OSRTSref",
      title: "RTS - Refund sent",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

      I apologise for the failed delivery.<br><br>

      We have initiated the refund today and your funds will be back in your account within 3/5 business days.<br><br>
If there is anything further you need, please do not hesitate to let me know.<br><br>

      
Kind regards,
 `,
    },
    {
      id: "OSRTSrep",
      title: "RTS - rep created",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

      I apologise for the failed delivery.<br><br>

      I have sent instructions to the warehouse to ship a replacement order to you ASAP. You will soon begin to get automated emails from the system letting you know when it is on its way.<br><br>

      If there is anything further you need, please do not hesitate to let me know.<br><br>


rep
      

Kind regards,
 `,
    },
    {
      id: "OSETAPart",
      title: "No ETA Part",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to advise that your order has been delayed due to an unforeseen stock constraint within our supply chain.<br><br>


The affected part is: *****.<br><br>


At present we do not have a firm date on when the new stock will arrive in our warehouse, but we continue to closely monitor this with our supply chain team, and we will notify you via email once your order has shipped.<br><br>


If you wish to cancel this part from your order, please let us know in a reply here and we will do so. This will enable the rest of the order to ship.<br><br>


A new order can then be placed for the delayed part. Alternatively, if you would need advice to select an alternative product, please contact our Sales Team via email hpstoresalesuk@hp.com or by phone on 02076603859.<br><br>


We sincerely apologise for any inconvenience this delay may cause and thank you for your patience and understanding.<br><br>

      

If there is anything further we can help with, please feel free to contact us.<br><br>
      

Kind regards,
 `,
    },
    // RETURNS TEMPLATES
    {
      id: "RETLabel1",
      title: "Failed Label 1",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


      We have been informed by our carrier that the label generated for the return of your HP Store order has not been used. To allow us to proceed with your claim, you may use the current label if it is still valid, or we will generate a fresh label for you if required. This will enable you to drop the parcel off at a local post office.<br><br>

      If your order has already been returned, we apologise for any confusion and kindly request that you reply directly to this email with a photo of the receipt provided by the Post Office upon return. We will forward this to the warehouse to ensure the goods are checked in properly.<br><br>
       
      Further details on the HP Store returns procedure can be found in our HP Store FAQs page on the HP Store website. <br><br>
      
      

If there is anything further we can help with, please feel free to contact us.<br><br>
      

Kind regards,
 `,
    },
    {
      id: "RETLabel2",
      title: "Failed Label 2",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


      We are writing again for HP Store regarding your recent return request.<br><br>

      We have been informed by our carrier that the label generated for the return of your HP Store order has not been used. To allow us to proceed with your claim, you may use the current label if it is still valid, or we will generate a fresh label for you if required. This will enable you to drop the parcel off at a local post office.<br><br>
       
      If you order has already been returned, we apologise for any confusion and kindly request that you reply directly to this email with a photo of the receipt provided by the Post Office upon return. We will forward this to the warehouse to ensure the goods are checked in properly.<br><br>
       
      Further details on the HP Store returns procedure can be found in our HP Store FAQs page on the HP Store website.<br><br>
      
      

If there is anything further we can help with, please feel free to contact us.<br><br>
      

Kind regards,
 `,
    },
    {
      id: "RETLabel3",
      title: "Failed Label 3",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


      Can we please request a response regarding your return request with HP Store?<br>
      <strong>*Please note that we need to provide a collection date to the warehouse within the next 24 hours, or the return request will be canceled.</strong><br><br>
      
      We have been informed by our carrier that the label generated for the return of your HP Store order has not been used. To allow us to proceed with your claim, you may use the current label if it is still valid, or we will generate a fresh label for you if required. This will enable you to drop the parcel off at a local post office.<br><br>
       
      If your order has already been returned, we apologise for any confusion and kindly request that you reply directly to this email with a photo of the receipt provided by the Post Office upon return. We will forward this to the warehouse to ensure the goods are checked in properly.<br><br>
       
      Further details on the HP Store returns procedure can be found in our HP Store FAQs page on the HP Store website.<br><br>
      
      

If there is anything further we can help with, please feel free to contact us.<br><br>
      

Kind regards,
 `,
    },
    {
      id: "RETCollect1",
      title: "Failed Collection 1",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


      We have been informed by our carrier that the planned collection of your HP Store order has been unsuccessful. To allow us to proceed with your claim we require you to reschedule this collection at the earliest opportunity.<br>
      <strong>*Please do note that 48 hours advance notice will be required to allow us to arrange your new collection with our carrier team.</strong><br><br>
      HP Store does not provide timed collections (i.e. a specific time to collect items). You will be notified by the driver of a time on the day of collection.<br>
      Our carrier operates Monday – Friday only, please note collections can be made up to 6pm in the evening.<br><br>
      If your order has already been collected, we apologise for any confusion and kindly request that you respond to this email to confirm this has taken place providing your copy of the collection receipt provided by our carrier.<br><br>
       
       
      Further details on the HP Store returns procedure can be found in our HP Store FAQs page on the HP Store website.<br><br>
      
      

If there is anything further we can help with, please feel free to contact us.<br><br>
      

Kind regards,
 `,
    },
    {
      id: "RETCollect2",
      title: "Failed Collection 2",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

      We are writing again for HP Store regarding your recent return request.<br><br>

      We have been informed by our carrier that the planned collection of your HP Store order has been unsuccessful. To allow us to proceed with your claim we require you to reschedule this collection at the earliest opportunity.<br>
      <strong>*Please do note that 48 hours advance notice will be required to allow us to arrange your new collection with our carrier team.</strong><br><br>
      HP Store does not provide timed collections (i.e. a specific time to collect items). You will be notified by the driver of a time on the day of collection.<br>
      Our carrier operates Monday – Friday only, please note collections can be made up to 6pm in the evening.<br><br>
      If your order has already been collected, we apologise for any confusion and kindly request that you respond to this email to confirm this has taken place providing your copy of the collection receipt provided by our carrier.<br><br>
       
       
      Further details on the HP Store returns procedure can be found in our HP Store FAQs page on the HP Store website.<br><br>
      

If there is anything further we can help with, please feel free to contact us.<br><br>
      

Kind regards,
 `,
    },
    {
      id: "RETCollect3",
      title: "Failed Collection 3",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

      Can we please request a response regarding your return request with HP Store?<br>
     <strong> *Please note that we need to provide a collection date to the warehouse within the next 24 hours, or the return request will be canceled.</strong><br><br>
      
      We have been informed by our carrier that the planned collection of your HP Store order has been unsuccessful. To allow us to proceed with your claim we require you to reschedule this collection at the earliest opportunity.<br>
      <strong>*Please do note that 48 hours advance notice will be required to allow us to arrange your new collection with our carrier team.</strong><br><br>
      HP Store does not provide timed collections (i.e. a specific time to collect items). You will be notified by the driver of a time on the day of collection.<br>
      Our carrier operates Monday – Friday only, please note collections can be made up to 6pm in the evening.<br><br>
      If your order has already been collected, we apologise for any confusion and kindly request that you respond to this email to confirm this has taken place providing your copy of the collection receipt provided by our carrier.<br><br>
       
       
      Further details on the HP Store returns procedure can be found in our HP Store FAQs page on the HP Store website.<br><br>
      

If there is anything further we can help with, please feel free to contact us.<br><br>
      

Kind regards,
 `,
    },
    {
      id: "RETCancel",
      title: "Claim Cancelled",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


      Due to the lack of update on the return request, we have been informed by our warehouse that they will be cancelling this claim for return.<br><br>
If there is anything further we can help with, please feel free to contact us.<br><br>
      

Kind regards,
 `,
    },
    {
      id: "RETCancel",
      title: "Claim Cancelled",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


<strong>SEND ME THE TEXT AND I'LL PUT IT UP</strong><br><br>
      

If there is anything further we can help with, please feel free to contact us.<br><br>
      

Kind regards,
 `,
    },
    {
      id: "RETCancel",
      title: "Claim Cancelled",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


<strong>SEND ME THE TEXT AND I'LL PUT IT UP</strong><br><br>
      

If there is anything further we can help with, please feel free to contact us.<br><br>
      

Kind regards,
 `,
    },
    {
      id: "RETBillProd",
      title: "Bill for extra product received",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


<strong>SEND ME THE TEXT AND I'LL PUT IT UP</strong><br><br>
      

If there is anything further we can help with, please feel free to contact us.<br><br>
      

Kind regards,
 `,
    },
    {
      id: "RETBillRef",
      title: "Bill for refund incorrectly sent",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


<strong>SEND ME THE TEXT AND I'LL PUT IT UP</strong><br><br>
      

If there is anything further we can help with, please feel free to contact us.<br><br>
      

Kind regards,
 `,
    },
  ];

  const babyTemps = [
    {
      id: 1,
      text: "We are only able to assist directly with orders placed on the HP Store and received within the last 30 days.",
    },
    {
      id: 2,
      text: "To speak directly with a Sales Agent, you may contact them at 0207 660 3859 (Option 1 and Option 1 for Sales) or by writing them via email at hpstoresalesuk@hp.com.",
    },
    {
      id: 2,
      text: "Our apologies for the inconveniences you have seen with this order. ",
    },
    {
      id: 2,
      text: "For more immediate assistance, our Post Sales phone line is open from 9am until 5:30pm and can be reached at 0207 660 3859 (Option 1 and then Option 3).",
    },
  ];

  //function to set text within editor to template
  const setTemplate = (id) => {
    const template = templates.find((template) => template.id === id);
    setText(template.text);
    setTemplateTitle(template.title);
  };

  return (
    <>
      <Grid container sx={{marginTop: '35px'}}>
        <Grid item xs={12}>
          <form id='back-to-top-anchor'>
            <div style={{ display: "flex" }}>
              <FormGroup sx={{ width: "30%" }}>
                <FormControlLabel
                  control={
                    <TextField
                      id='date'
                      label='Choose Collection Date'
                      type='date'
                      fullWidth
                      onChange={(e) => setDate(convertDate(e.target.value))}
                      onSelect={(e) => setDate(convertDate(e.target.value))}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  }
                />
              </FormGroup>
              <FormGroup sx={{ width: "30%" }}>
                <FormControlLabel
                  control={
                    <TextField
                      id='name'
                      label='Customers Name'
                      type='text'
                      fullWidth
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      // defaultValue={name}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  }
                />
              </FormGroup>
              <FormGroup sx={{ width: "30%" }}>
                <FormControlLabel
                  control={
                    <TextField
                      id='orderNumber'
                      label='SCEO Number'
                      type='text'
                      fullWidth
                      value={orderNumber}
                      onChange={(e) => setOrderNumber(e.target.value)}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  }
                />
              </FormGroup>
              <Button
                onClick={() => {
                  setName("");
                  setOrderNumber("");
                  setDate("");
                  setApology(false);
                }}
                sx={{ width: "5%", marginRight: ".5rem" }}
                variant='outlined'
                color='primary'
              >
                Clear All
              </Button>
              <Button
                onClick={() => {
                  setName("Customer");
                  setOrderNumber("in format SCEO********");
                  setDate(
                    "the date confirmed in your claim confirmation email"
                  );
                  setApology(false);
                }}
                sx={{ width: "5%" }}
                variant='outlined'
                color='secondary'
              >
                Safe Values
              </Button>{" "}
            </div>
            <div style={{ width: "100%" }}>
              {" "}
              <FormControl
                sx={{ m: 3 }}
                component='fieldset'
                variant='standard'
              >
                {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={apology}
                        onChange={handleChange}
                        name='apologyButton'
                      />
                    }
                    label='Add "Apologies for the delay in our reply.."'
                  />
                </FormGroup>
              </FormControl>
            </div>
          </form>
        </Grid>
        {/* DOA BUTTONS */}
        <Grid item xs={6} sm={3} md={2} lg={2}>
          <Typography
            variant='h6'
            component='h2'
            style={{ textAlign: "center" }}
          >
            DOA
          </Typography>
          <ButtonGroup
            variant='outlined'
            size='small'
            aria-label='outlined button group'
            style={{ display: "inline" }}
          >
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("DOARepCollection")}>
                Rep-Collect
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("DOARepLabel")}>
                Rep-Label
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button
                fullWidth
                onClick={() => setTemplate("DOARefundCCCollection")}
              >
                Refund-CC-Collect
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button
                fullWidth
                onClick={() => setTemplate("DOARefundPPCollection")}
              >
                Refund-PP-Collect
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button
                fullWidth
                onClick={() => setTemplate("DOARefundWireCollection")}
              >
                Refund-Wire-Collect
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("DOARefundCCLabel")}>
                Refund-CC-Label
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("DOARefundPPLabel")}>
                Refund-PP-Label
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button
                fullWidth
                onClick={() => setTemplate("DOARefundWireLabel")}
              >
                Refund-Wire-Label
              </Button>
            </Link>
          </ButtonGroup>
        </Grid>
        {/* CHANGE OF MIND BUTTONS */}
        <Grid item xs={6} sm={3} md={2} lg={2} id='back-to-top-anchor'>
          <Typography
            variant='h6'
            component='h2'
            style={{ textAlign: "center" }}
          >
            Change of Mind
          </Typography>
          <ButtonGroup
            variant='outlined'
            size='small'
            aria-label='outlined button group'
            style={{ display: "inline" }}
          >
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button
                fullWidth
                onClick={() => setTemplate("COMRefundCCCollection")}
              >
                Refund-CC-Collect
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button
                fullWidth
                onClick={() => setTemplate("COMRefundPPCollection")}
              >
                Refund-PP-Collect
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button
                fullWidth
                onClick={() => setTemplate("COMRefundWireCollection")}
              >
                Refund-Wire-Collect
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("COMRefundCCLabel")}>
                Refund-CC-Label
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("COMRefundPPLabel")}>
                Refund-PP-Label
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button
                fullWidth
                onClick={() => setTemplate("COMRefundWireLabel")}
              >
                Refund-Wire-Label
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button
                fullWidth
                variant='outlined'
                color='secondary'
                onClick={() => setTemplate("COM14")}
              >
                no return-14 days
              </Button>
            </Link>
          </ButtonGroup>
        </Grid>
        {/* DAMAGE BUTTONS */}
        <Grid item xs={6} sm={3} md={2} lg={2}>
          <Typography
            variant='h6'
            component='h2'
            style={{ textAlign: "center" }}
          >
            Damaged
          </Typography>
          <ButtonGroup
            variant='outlined'
            size='small'
            aria-label='outlined button group'
            style={{ display: "inline" }}
          >
            {" "}
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("DMGRepCollection")}>
                Rep-Collect
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("DMGRepLabel")}>
                Rep-Label
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button
                fullWidth
                onClick={() => setTemplate("DMGRefundCCCollection")}
              >
                Refund-CC-Collect
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button
                fullWidth
                onClick={() => setTemplate("DMGRefundPPCollection")}
              >
                Refund-PP-Collect
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button
                fullWidth
                onClick={() => setTemplate("DMGRefundWireCollection")}
              >
                Refund-Wire-Collect
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("DMGRefundCCLabel")}>
                Refund-CC-Label
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("DMGRefundPPLabel")}>
                Refund-PP-Label
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button
                fullWidth
                onClick={() => setTemplate("DMGRefundWireLabel")}
              >
                Refund-Wire-Label
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button
                fullWidth
                variant='outlined'
                color='secondary'
                onClick={() => setTemplate("DMGPhotosRep")}
              >
                Need photos - rep
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button
                fullWidth
                variant='outlined'
                color='secondary'
                onClick={() => setTemplate("DMGPhotosRef")}
              >
                need photos - ref
              </Button>
            </Link>
          </ButtonGroup>
        </Grid>
        {/* Missing BUTTONS */}
        <Grid item xs={6} sm={3} md={2} lg={2}>
          <Typography
            variant='h6'
            component='h2'
            style={{ textAlign: "center" }}
          >
            Missing
          </Typography>
          <ButtonGroup
            variant='outlined'
            size='small'
            aria-label='outlined button group'
            style={{ display: "inline" }}
          >
            {" "}
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("MSGAllRep")}>
                Rep - Mising All
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("MSGPartRep")}>
                Rep - Missing Part
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("MSGAllRef")}>
                Ref Missing All
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("MSGAllWireRef")}>
                Ref Wire Missing All
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("MSGPartRef")}>
                Ref Missing Part
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("MSGPartWireRef")}>
                Ref Wire Missing Part
              </Button>
            </Link>
            <Link to='editor'spy={true} smooth={true} duration={500}>
              <Button fullWidth  color="secondary" onClick={() => setTemplate("MSGDeliveredRef")}>
                Delivered - Ref
              </Button>
            </Link>
            <Link to='editor'spy={true} smooth={true} duration={500}>
              <Button fullWidth  color="secondary" onClick={() => setTemplate("MSGDeliveredRep")}>
                Delivered - Rep
              </Button>
            </Link>
          </ButtonGroup>
        </Grid>
        {/* Wrong product BUTTONS */}
        <Grid item xs={6} sm={3} md={2} lg={2}>
          <Typography
            variant='h6'
            component='h2'
            style={{ textAlign: "center" }}
          >
            Wrong Product
          </Typography>
          <ButtonGroup
            variant='outlined'
            size='small'
            aria-label='outlined button group'
            style={{ display: "inline" }}
          >
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("WGPRepCollection")}>
                Rep-Collect
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("WGPRepLabel")}>
                Rep-Label
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button
                fullWidth
                onClick={() => setTemplate("WGPRefundCCCollection")}
              >
                Refund-CC-Collect
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button
                fullWidth
                onClick={() => setTemplate("WGPRefundPPCollection")}
              >
                Refund-PP-Collect
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button
                fullWidth
                onClick={() => setTemplate("WGPRefundWireCollection")}
              >
                Refund-Wire-Collect
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("WGPRefundCCLabel")}>
                Refund-CC-Label
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("WGPRefundPPLabel")}>
                Refund-PP-Label
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button
                fullWidth
                onClick={() => setTemplate("WGPRefundWireLabel")}
              >
                Refund-Wire-Label
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button
                fullWidth
                variant='outlined'
                color='secondary'
                onClick={() => setTemplate("WGPPhotosRep")}
              >
                Need photos - rep
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button
                fullWidth
                variant='outlined'
                color='secondary'
                onClick={() => setTemplate("WGPPhotosRef")}
              >
                need photos - ref
              </Button>
            </Link>
          </ButtonGroup>
        </Grid>
        {/* MISROUTED BUTTONS */}
        <Grid item xs={6} sm={3} md={2} lg={2}>
          <Typography
            variant='h6'
            component='h2'
            style={{ textAlign: "center" }}
          >
            Misrouted
          </Typography>
          <ButtonGroup
            variant='outlined'
            size='small'
            aria-label='outlined button group'
            style={{ display: "inline" }}
          >
            {" "}
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("MSRTech")}>
                Tech
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("MSRSales")}>
                Sales
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("MSRSapos")}>
                Sapos
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("MSRRecycling")}>
                Recycling
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("MSRPromotions")}>
                Promotions
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("MSRNonHP")}>
                Non-HP
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("MSRInstantInk")}>
                Instant Ink
              </Button>
            </Link>
          </ButtonGroup>
        </Grid>
        {/* ORDER STATUS BUTTONS */}
        <Grid item xs={6} sm={3} md={2} lg={2}>
          <Typography
            variant='h6'
            component='h2'
            style={{ textAlign: "center" }}
          >
            Order Status
          </Typography>
          <ButtonGroup
            variant='outlined'
            size='small'
            aria-label='outlined button group'
            style={{ display: "inline" }}
          >
            {" "}
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("OSAddressNeeded")}>
                Address Needed
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("OSDelivered")}>
                Delivered
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("OSDeliveryToday")}>
                Delivery Today
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("OSWithCourier")}>
                Shipped to Courier
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("OSCollectPO")}>
                Collect PO
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("MSCCancelRequest")}>
                Cancel Request
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("MSCCancelSuccess")}>
                Cancel Success - CC/PP
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button
                fullWidth
                onClick={() => setTemplate("MSCCancelSuccessWire")}
              >
                Cancel Success - Wire
              </Button>
            </Link>

          </ButtonGroup>
        </Grid>
                {/* ORDER STATUS BUTTONS */}
                <Grid item xs={6} sm={3} md={2} lg={2}>
          <Typography
            variant='h6'
            component='h2'
            style={{ textAlign: "center" }}
          >
            Order Status #2
          </Typography>
          <ButtonGroup
            variant='outlined'
            size='small'
            aria-label='outlined button group'
            style={{ display: "inline" }}
          >            <Link to='editor' spy={true} smooth={true} duration={500}>
          <Button fullWidth color="secondary" onClick={() => setTemplate("OSRTSreforrep")}>
            RTS - ref or rep?
          </Button>
        </Link>
        <Link to='editor' spy={true} smooth={true} duration={500}>
          <Button fullWidth color="secondary" onClick={() => setTemplate("OSRTSref")}>
            RTS - ref
          </Button>
        </Link>
        <Link to='editor' spy={true} smooth={true} duration={500}>
          <Button fullWidth color="secondary" onClick={() => setTemplate("OSRTSrep")}>
            RTS - rep
          </Button>
        </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("OSETAFull")}>
                No ETA - Full
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("OSETAPart")}>
                No ETA - Part
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("OSEOL")}>
                End of Life
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("OSFraud")}>
                Fraud Rejected
              </Button>
            </Link>


          </ButtonGroup>
        </Grid>
        {/* RETURNSBUTTONS */}
        <Grid item xs={6} sm={3} md={2} lg={2}>
          <Typography
            variant='h6'
            component='h2'
            style={{ textAlign: "center" }}
          >
            Return Chaser
          </Typography>
          <ButtonGroup
            variant='outlined'
            size='small'
            aria-label='outlined button group'
            style={{ display: "inline" }}
          >
            {" "}
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("RETLabel1")}>
                Failed label - 1
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("RETLabel2")}>
                Failed label - 2
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("RETLabel3")}>
                Failed label - 3
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("RETCollect1")}>
                Failed Collect - 1
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("RETCollect2")}>
                Failed Collect - 2
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("RETCollect3")}>
                Failed Collect - 3
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button
                fullWidth
                color='secondary'
                onClick={() => setTemplate("RETCancel")}
              >
                Claim cancelled
              </Button>
            </Link>
            {/* <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button
                fullWidth
                color='secondary'
                onClick={() => setTemplate("RETBillProd")}
              >
                Bill - xtra prod
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button
                fullWidth
                color='secondary'
                onClick={() => setTemplate("RETBillRef")}
              >
                Bill - ref sent
              </Button>
            </Link> */}
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button
                fullWidth
                color='secondary'
                onClick={() => setTemplate("MSC2BillIssued")}
              >
                Bill Issued
              </Button>
            </Link>
          </ButtonGroup>
        </Grid>
        {/* MISC BUTTONS */}
        <Grid item xs={6} sm={3} md={2} lg={2}>
          <Typography
            variant='h6'
            component='h2'
            style={{ textAlign: "center" }}
          >
            Misc
          </Typography>
          <ButtonGroup
            variant='outlined'
            size='small'
            aria-label='outlined button group'
            style={{ display: "inline" }}
          >
            {" "}
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button
                fullWidth
                color='secondary'
                onClick={() => setTemplate("MSCBlank")}
              >
                Blank
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("MSCHolding")}>
                CEL-Holding
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("MSCHoldingCRT")}>
                CRT-Holding
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("MSCInvoice")}>
                Invoice Copy
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("MSCRefundSent")}>
                Refund Sent
              </Button>
            </Link>

          </ButtonGroup>
        </Grid>
        {/* MISC#2BUTTONS */}
        <Grid item xs={6} sm={3} md={2} lg={2}>
          <Typography
            variant='h6'
            component='h2'
            style={{ textAlign: "center" }}
          >
            Misc #2
          </Typography>
          <ButtonGroup
            variant='outlined'
            size='small'
            aria-label='outlined button group'
            style={{ display: "inline" }}
          >
            {" "}
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("MSC2ReturnDelay")}>
                Returns Delay
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("MSC2LowVal")}>
                Low Val - no collect
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("MSC2AddressMod")}>
                Address Mod Sent
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("MSC2VouchOff")}>
                Voucher - Offer
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("MSC2VouchCode")}>
                Voucher - Code
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("MSC2ErrCancelled")}>
                Error - Cancelled
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("MSC2ARN")}>
                ARN
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("MSC2EmptyBox")}>
                Empty Box - rejected
              </Button>
            </Link>
          </ButtonGroup>
        </Grid>

        {/* CAREPACK BUTTONS */}
        <Grid item xs={6} sm={3} md={2} lg={2}>
          <Typography
            variant='h6'
            component='h2'
            style={{ textAlign: "center" }}
          >
            Care Pack
          </Typography>
          <ButtonGroup
            variant='outlined'
            size='small'
            aria-label='outlined button group'
            style={{ display: "inline" }}
          >
            {" "}
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth color="secondary" onClick={() => setTemplate("CPNotCompat")}>
                CP Not compatible
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("CPCert")}>
                Certificate Attached
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("CPHWNeeded")}>
                Hardware Info Needed
              </Button>
            </Link>
            <Link to='editor' spy={true} smooth={true} duration={500}>
              <Button fullWidth onClick={() => setTemplate("CPNotPhysical")}>
                CP Not Physical
              </Button>
            </Link>
          </ButtonGroup>
        </Grid>

        <Grid xs={12}>
          <Typography
            variant='h6'
            sx={{
              display: "inline-block",
              borderBottom: "1px solid green",
              marginBottom: "10px",
            }}
          >
            Baby Temps
          </Typography>
          {babyTemps.map((template) => {
            return (
              <div style={{ display: "flex", marginBottom: "5px" }}>
                <BiCopy
                  onClick={() => {
                    navigator.clipboard.writeText(template.text);
                    setOpen(true);
                  }}
                  style={{
                    cursor: "pointer",
                    margin: "5 5 0 10",
                    color: "green",
                    fontSize: "20px",
                    flexShrink: 0,
                  }}
                />
                <Typography>{template.text}</Typography>
              </div>
            );
          })}
        </Grid>
        <Grid item xs={11} marginTop id='editor' sx={{ marginBottom: "80px" }}>
          <Typography
            variant='h6'
            sx={{
              display: "inline-block",
              borderBottom: "1px solid green",
              marginBottom: "10px",
            }}
          >
            {templateTitle}
          </Typography>
          <BiCopy
            onClick={() => {
              copyToClipboard();
            }}
            style={{
              cursor: "pointer",
              marginLeft: "10px",
              color: "green",
            }}
          />
          <CKEditor
            id='editor'
            editor={ClassicEditor}
            data={text}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
              setText(data);
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
          <div id='parsedText' style={{ display: "none" }}>
            {parse(text)}
          </div>

          <Snackbar
            open={open}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            onClose={() => setOpen(false)}
            autoHideDuration={2000}
            message='Copied to clipboard'
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Templates;

// {
//   id: "",
//   title: "",
//   text: ` `,
// }
