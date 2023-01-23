import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import { BiCopy } from "react-icons/bi";
import parse from "html-react-parser";

export const TemplateText = ({ name, date, orderNumber, apology }) => {
  const [open, setOpen] = useState(false);
  const [timeGreeting, setTimeGreeting] = useState("");
  const copyToClipboard = (e) => {
    setOpen(true);
    navigator.clipboard.writeText(e.toString());
  };

  let time = new Date();
  let hour = time.getHours();

  const parse = require("html-react-parser");

  const TemplateTextArray = [
    {
      id: "test",
      title: "test",
      text: `Dear ${name},
       ${date}. <strong>example</strong> <a href="https://www.google.com">example</a>
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
    {
      id: "COMRefundPPCollection",
      title: "Change of Mind - PP - Collection",
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
  
  
Once collection has been successful, our refund process will begin, and the money will be returned to your PayPal account within 10 working days.


If there is anything further you need, please do not hesitate to let us know.
  
  
Kind regards,
        `,
    },
    {
      id: "COMRefundWireCollection",
      title: "Change of Mind - Wire - Collection",
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


As you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:


IBAN:\nSWIFT:\nBank Name:\nBranch:\nAccountName:\nSort Code:\nAccount Number:\n*(Important Information - Please complete all fields)


After successful collection and arrival of the goods at our warehouse and provided bank details, we will proceed with the refund process. Your funds will be returned to your account within the next 8 working days.


If there is anything further you need, please do not hesitate to let us know.


Kind regards,
        `,
    },
    {
      id: "COMRefundCCLabel",
      title: "Change of Mind - CC - Label",
      text: `Dear ${name},
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We are sorry to hear that your HP Store product did not meet your expectations on this occasion, and we are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.


Please ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.


Once this item is returned to our warehouse, our refund process will begin, and the money will be returned to your account within 3-5 working days.


If there is anything further you need, please do not hesitate to let us know.


Kind regards,
        `,
    },
    {
      id: "COMRefundPPLabel",
      title: "Change of Mind - P - Label",
      text: `Dear ${name},
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We are sorry to hear that your HP Store product did not meet your expectations on this occasion, and we are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund proc


Please ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our ware


Once this item is returned to our warehouse, our refund process will begin, and the money will be returned to your PayPal account within 10 working


If there is anything further you need, please do not hesitate to let us


Kind regards,
        `,
    },
    {
      id: "COMRefundWireLabel",
      title: "Change of Mind - Wire - Collection",
      text: `Dear ${name},
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We are sorry to hear that the product you have received is defective. We are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund proc


Please ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our ware


As you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this r


IBAN:\nSWIFT:\nBank Name:\nBranch:\nAccountName:\nSort Code:\nAccount Number:\n*(Important Information - Please complete all fie
  
  
After successful collection and arrival of the goods at our warehouse and provided bank details, we will proceed with the refund process. Your funds will be returned to your account within the next 8 working d
  
  
If there is anything further you need, please do not hesitate to let us k
  
  
Kind regards,
        `,
    },
    //DAMAGE TEMPLATES
    {
      id: "DMGRepCollection",
      title: "Damaged Refund CC Collection",
      text: `Dear ${name},


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We are sorry to hear that the product you have received is damaged, we are actively working to have this item returned and have your replacement issued as soon as possible.


Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the replacement procedure.


Our driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.


Once collection has been successful, the replacement process will begin, and your order will be shipped to you within 2-3 working days.


If there is anything further you need, please do not hesitate to let us know.


Kind regards,
        `,
    },
    {
      id: "DMGRepLabel",
      title: "Damaged Refund CC Collection",
      text: `Dear ${name},


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We are sorry to hear that the product you have received is damaged, we are actively working to have this item returned and have your replacement issued as soon as possible.


We will send you the necessary returns label via email within 5 working days so that you may return through your local Post Office. 


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the replacement procedure.


Please ensure that you get a receipt from the Post Office when you return this, this may be required in the unlikely event something goes wrong with the return to our warehouse.


Once the return has been successful, the replacement process will begin, and your order will be shipped to you within 2-3 working days.


If there is anything further you need, please do not hesitate to let us know.


Kind regards,
        `,
    },
    {
      id: "DMGRefundCCCollection",
      title: "Damaged Refund CC Collection",
      text: `Dear ${name},


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We are sorry to hear that the product you have received is damaged, we are actively working to have this item returned and have your refund issued as soon as possible.


Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.


Our driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.


Once collection has been successful, our refund process will begin, and the money will be returned to your account within 3-5 working days.


If there is anything further you need, please do not hesitate to let us know.


Kind regards,
        `,
    },
    {
      id: "DMGRefundPPCollection",
      title: "DamagedRefund PP Collection",
      text: `Dear ${name},
      
  
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We are sorry to hear that the product you have received is damaged, we are actively working to have this item returned and have your refund issued as soon as possible.


Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.


Our driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.


Once collection has been successful, our refund process will begin, and the money will be returned to your PayPal account within 10 working days.


If there is anything further you need, please do not hesitate to let us know.


Kind regards,
        `,
    },
    {
      id: "DMGRefundWireCollection",
      title: "Damaged Refund Wire Collection",
      text: `Dear ${name},
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We are sorry to hear that the product you have received is damaged, we are actively working to have this item returned and have your refund issued as soon as possible.


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
      id: "DMGRefundCCLabel",
      title: "Damaged Refund CC - Label",
      text: `Dear ${name},
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We are sorry to hear that the product you have received is damaged. We are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.


Please ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.


Once this item is returned to our warehouse, our refund process will begin, and the money will be returned to your account within 3-5 working days.


If there is anything further you need, please do not hesitate to let us know.


Kind regards,
        `,
    },
    {
      id: "DMGRefundPPLabel",
      title: "Damaged Refund PP - Label",
      text: `Dear ${name},
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We are sorry to hear that the product you have received is damaged. We are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.


Please ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.


Once this item is returned to our warehouse, our refund process will begin, and the money will be returned to your PayPal account within 10 working days.


If there is anything further you need, please do not hesitate to let us know.


Kind regards,
        `,
    },
    {
      id: "DMGRefundWireLabel",
      title: "Damaged Refund Wire Collection",
      text: `Dear ${name},
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We are sorry to hear that the product you have received is damaged. We are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.


We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.


Please ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.


As you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:


IBAN:\nSWIFT:\nBank Name:\nBranch:\nAccountName:\nSort Code:\nAccount Number:\n*(Important Information - Please complete all fields)


After successful collection and arrival of the goods at our warehouse and provided bank details, we will proceed with the refund process. Your funds will be returned to your account within the next 8 working days.


If there is anything further you need, please do not hesitate to let us know.


Kind regards,
        `,
    },
    // MISSING TEMPLATES
    {
      id: "MSGAllRep",
      title: "Missing All - Rep",
      text: `Dear ${name},
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We sincerely apologise that you have not received your HP order and we are actively working with our logistics team to have a replacement order sent out as soon as possible.


You will receive a confirmation email as soon this is on its way to you.


If there is anything further you need, please do not hesitate to let me know.


Kind regards,
      
        `,
    },
    {
      id: "MSGPartRep",
      title: "Missing Part - Rep",
      text: `Dear ${name},
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We sincerely apologise that you have not received your full HP order and we are actively working with our logistics team to have the missing item sent out as soon as possible.


You will receive a confirmation email as soon this is on its way to you.


If there is anything further you need, please do not hesitate to let me know.


Kind regards,
      
        `,
    },
    {
      id: "MSGAllRef",
      title: "Missing All - Refund",
      text: `Dear ${name},
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We sincerely apologise that you have not received your HP order and we are actively working with our logistics team to refund you as soon as possible.


Your money will be returned to your account within 3-5 working days.


If there is anything further you need, please do not hesitate to let me know.


Kind regards,
      
        `,
    },
    {
      id: "MSGAllWireRef",
      title: "Missing All - Wire Refund",
      text: `Dear ${name},
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We sincerely apologise that you have not received your HP order and we are actively working with our logistics team to refund you as soon as possible.


As you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:


IBAN:\nSWIFT:\nBank Name:\nBranch:\nAccountName:\nSort Code:\nAccount Number:\n*(Important Information - Please complete all fields)


If there is anything further you need, please do not hesitate to let me know.


Kind regards,
      
        `,
    },
    {
      id: "MSGPartRef",
      title: "Missing All - Refund",
      text: `Dear ${name},
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We sincerely apologise that you have not received your full HP order and we are actively working with our logistics team to refund the missing product as soon as possible.


Your money will be returned to your account within 3-5 working days.


If there is anything further you need, please do not hesitate to let me know.


Kind regards,
      
        `,
    },
    {
      id: "MSGPartWireRef",
      title: "Missing All - Wire Refund",
      text: `Dear ${name},
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We sincerely apologise that you have not received your full HP order and we are actively working with our logistics team to refund the missing product as soon as possible.


As you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:


IBAN:\nSWIFT:\nBank Name:\nBranch:\nAccountName:\nSort Code:\nAccount Number:\n*(Important Information - Please complete all fields)


If there is anything further you need, please do not hesitate to let me know.


Kind regards,
      
        `,
    },
    {
      id: "MSRTech",
      title: "Misrouted - Tech",
      text: `Dear ${name},


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We are sorry to hear that you are experiencing some technical issues with your HP product and we want to direct you to our HP Technical Support team who will be happy to assist and support to resolve your issue as quickly as possible.


Please contact our experienced Technical Support team under the phone number:

Consumer Products:   0207 660 0596
Business Products:    0207 660 0403


Important Information: Prior to calling our Technical Support please have your order details on hand, which should include the serial number of the device and a copy of the invoice if available.


Please ensure you have enough time to support the call which may be extended if the agent is required to do some testing/troubleshooting on your product.


If you have received your HP Store order within the last 30 days, and the Tech Support Team cannot assist directly and your item is marked as faulty, please revert back to us with the case notes and case ID provided by the Tech Team, and we will raise your claim for return of this device. Please specify if you prefer a replacement or a refund.


For more information on the HP Technical support please review our FAQs page.


Kind regards,`,
    },
    {
      id: "MSRSales",
      title: "Misrouted - Sales",
      text: `Dear ${name},

 
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }

       
Please contact our experienced sales team on
       
Consumer 0207 660 3859
       
Business 0207 660 3858


You may also contact them via email at hpstoresalesuk@hp.com.
       
They will assist you in choosing the correct product for your needs.
       
Kind Regards,
       `,
    },
    {
      id: "MSRSapos",
      title: "Misrouted- Sapos",
      text: `Dear ${name},

  
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We are sorry to advise that we are unable to assist you directly with your sales enquiry.


Please contact our experienced Sales Team, who will be happy to assist you and can be reached under the phone number:

0207 660 3115 (Mon-Fri, office hours).


If there is anything further we can do to assist please let us know.


Kind regards,
   `,
    },
    {
      id: "MSRRecycling",
      title: "Recycling",
      text: `Dear ${name},


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


Thank you for contacting HP Store Post sales.


You can find all information on HP recycling at the HP Website below:
https://www8.hp.com/uk/en/home/recycling.html


If you require any further assistance, please let us know.


Kind regards,
 `,
    },
    {
      id: "MSRPromotions",
      title: "Misrouted - Promotions",
      text: `Dear ${name},


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


Unfortunately, we are unable to assist you with this enquiry.


Please contact our Promotions team, who will be happy to assist you and can be reached at the following email address: promotions@GPS1.hp.com.


More information can be found on current HP promotions on our FAQs page below:
https://www.hp.com/gb-en/shop/faq.aspx


Kind regards,
 `,
    },
    {
      id: "MSRNonHP",
      title: "Misrouted - Non-HP",
      text: `Dear ${name},


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We can only assist with orders placed directly on the HP Store. If this relates to an HP Store order, please provide your order number in format SCEOxxxxxxxx and we will look into your query. If you've purchased from another seller, you may contact them directly for assistance.


Kind regards,
 `,
    },
    {
      id: "MSRInstantInk",
      title: "Misrouted - Instant Ink",
      text: `Dear ${name},


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


Please contact the Instant Ink team directly on 0207 660 0596.
      

If you require any further assistance, please let us know.
      

Kind regards,
 `,
    },
    {
      id: "MSCInvoice",
      title: "Invoice Copy",
      text: `Dear ${name},


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


Please find attached a copy of your invoice. 

 
If there is anything further you need please let us know, alternatively please review our FAQS on our website as seen below:
https://www.hp.com/gb-en/shop/faq.aspx


Kind regards,
 `,
    },
    {
      id: "MSCHolding",
      title: "Escalation - Holding",
      text: `Dear ${name},


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We have sent your enquiry forward and are awaiting further input from our management team.


Please be assured that HP takes all enquiries seriously and appreciate your patience and support whilst our investigation is ongoing, and this is being treated with the highest priority. We will contact you as soon as possible.


Again, we thank you for your patience and understanding.
      

Kind regards,
 `,
    },
    {
      id: "MSCHoldingCRT",
      title: "Escalation - Holding CRT",
      text: `Dear ${name},


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


As we can only assist with orders received within the last 30 days, we have passed your request onto our Customer Relations Team who will contact you direct to resolve. We apologise for any inconvenience.


Again, we thank you for your patience and understanding.
      

Kind regards,
 `,
    },
    {
      id: "MSCCancelRequest",
      title: "Cancellation Request",
      text: `Dear ${name},


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We have raised the request to fully cancel this order. Please note that due to the speed of the shipping system, we are not always able to fully cancel before the order ships to the courier. If this is the case, you will be notified that this has shipped, please note that if refuse delivery and let us know when you do, we will initiate the full refund.


If this does cancel successfully before shipment, you will be notified as well via email. 


Kind regards,
 `,
    },
    {
      id: "MSCCancelSuccess",
      title: "Cancellation Success - CC/PP",
      text: `Dear ${name},


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


Thank you for your request to cancel your recent HP Store order. 


We can confirm that your order is fully cancelled. 


Please note that if this purchase was made with a credit card, no money had been taken by HP for this order. Any money that appears to have been taken is simply on hold at your bank and will be returned within 3/5 business days. PayPal refunds are automatically initiated and will be back into your account within 8 business days.


Kind regards,
 `,
    },
    {
      id: "MSCCancelSuccessWire",
      title: "Cancellation Success - Wire",
      text: `Dear ${name},


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


Thank you for your request to cancel your recent HP Store order. 


We can confirm that your order is fully cancelled. 


As you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:


IBAN:\nSWIFT:\nBank Name:\nBranch:\nAccountName:\nSort Code:\nAccount Number:\n*(Important Information - Please complete all fields)


We would appreciate if you can also send us a screenshot of the transaction.


If you need anything further, please let us know.


Kind regards,
 `,
    },
    // CARE PACK TEMPLATES
    {
      id: "CPCert",
      title: "Certificate Attached",
      text: `Dear ${name},


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


Please find attached your HP Care Pack certificate.


Once again, we apologise for any inconvenience this may have caused.


If there is anything further, we can assist you with please feel free to contact us.
      

Kind regards,
 `,
    },
    {
      id: "CPNotPhysical",
      title: "Certificate Not Physical",
      text: `Dear ${name},


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


Please be aware that the Care Pack Warranty purchased is not a physical product but is sent electronically to you via the email address you provided when ordering. This email will contain an activation link that will direct you to the HP website where you can continue to register the Care Pack Warranty to your HP product with the serial number of the specific unit.


If you do not receive your activation email within the next 2 business days, please contact us again and we will request that this is resent to you as soon as is possible.


More information on HP Store Care Pack Activation can be found on our FAQS Page.


If you require any further assistance, please let us know.
      

Kind regards,
 `,
    },
    {
      id: "CPHWNeeded",
      title: "Hardware info needed",
      text: `Dear ${name},


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


To enable us to complete the registration of your Care Pack, HP requires the following information to be sent to our Care Pack Registration team at the earliest opportunity.


Please copy and paste the below information into your mail.
Send your email to: postsales.carepackregistration@hp.com


Email Subject: Care Pack Registration for HP Store order SCEOXXXXXX
Dear HP Care Pack Registration team,
Please find below the following information to allow the completion of my Care Pack Registration.
Name:
Address:
Phone:
Email:
Product Code:
Serial No:
Invoice: (Please attach a copy of your original invoice)


Please note Care Pack Registration can take up to 2 weeks to complete, after which your certificate will be visible and available for download. Further information on Care Pack Registration can be found on our FAQS Page below:
hp.com/gb-en/shop/faq.aspx


If you require any further assistance after this timeframe, please do let us know.
      
      
Kind regards,
 `,
    },
    // ORDER STATUS
    {
      id: "OSAddressNeeded",
      title: "Address Needed",
      text: `Dear ${name},


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We have received a request from the warehouse regarding your delivery. They have requested that you confirm your full delivery address.


Once this has been sent to the warehouse, your order will be immediately shipped. You will begin to get automated emails from the system letting you know when it is on its way.


If you need anything further, please let us know.


Kind regards,
 `,
    },
    {
      id: "OSDelivered",
      title: "Delivered",
      text: `Dear ${name},


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


Our tracking shows that your order has now been delivered.


If you need anything further, please let us know.


Kind regards,
 `,
    },
    {
      id: "OSDeliveryToday",
      title: "Delivery Today",
      text: `Dear ${name},


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


Our tracking shows that your order is out for delivery today


If you need anything further, please let us know.


Kind regards,
 `,
    },
    {
      id: "OSEOL",
      title: "End of Life",
      text: `Dear ${name},


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We are sorry to advise that we are unable to fulfil your recent order HP Store order as this product has now been discontinued and no further stock is available. Your order will now be cancelled. 


Any money on reserve at your bank will be returned to you within 5/8 business days.


Once again, we sincerely apologise we have not been unable to fulfil your requirements on this occasion. 


If there is anything further we can help with, please feel free to contact us 
      

Kind regards,
 `,
    },
    {
      id: "OSETAFull",
      title: "No ETA Full",
      text: `Dear ${name},


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We are sorry to advise that your order has been delayed due to an unforeseen stock constraint within our supply chain.


At present we do not have a firm date on when the new stock will arrive in our warehouse, but we continue to closely monitor this with our supply chain team, and we will notify you via email once your order has shipped.


If you wish to cancel your order, please let us know in a reply here and we will do so. Alternatively, if you would need advice to select an alternative product, please contact our Sales Team via email hpstoresalesuk@hp.com or by phone on 02076603859.


We sincerely apologise for any inconvenience this delay may cause and thank you for your patience and understanding.
      

If there is anything further we can help with, please feel free to contact us 
      

Kind regards,
 `,
    },
    {
      id: "OSETAPart",
      title: "No ETA Part",
      text: `Dear ${name},


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply" : ""
      }


We are sorry to advise that your order has been delayed due to an unforeseen stock constraint within our supply chain.


The affected part is: *****.


At present we do not have a firm date on when the new stock will arrive in our warehouse, but we continue to closely monitor this with our supply chain team, and we will notify you via email once your order has shipped.


If you wish to cancel this part from your order, please let us know in a reply here and we will do so. This will enable the rest of the order to ship.


A new order can then be placed for the delayed part. Alternatively, if you would need advice to select an alternative product, please contact our Sales Team via email hpstoresalesuk@hp.com or by phone on 02076603859.


We sincerely apologise for any inconvenience this delay may cause and thank you for your patience and understanding.

      

If there is anything further we can help with, please feel free to contact us 
      

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
                  console.log((JSON.stringify(template.text)));
                  copyToClipboard(template.text);
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
              <textfield
                key={template.id}
                variant='body1'
                style={{ whiteSpace: "pre-wrap" }}
              >
                {parse(template.text)}
              </textfield>
            </Grid>
            <Divider />
          </Grid>
        );
      })}
    </>
  );
};
