// src/utils/email.js
import emailjs from "@emailjs/browser";

export const sendEmail = (formRef, onSuccess, onError) => {
  emailjs
    .sendForm(
      "service_3c6fktc",  // Your EmailJS Service ID
      "template_wj9iti4", // Your EmailJS Template ID
      formRef.current,
      "yB-W7GvXAxUG0KbAm" // Your Public Key
    )
    .then(
      (result) => {
        console.log("EmailJS success:", result.text);
        onSuccess();
      },
      (error) => {
        console.error("EmailJS error:", error.text);
        onError(error);
      }
    );
};
