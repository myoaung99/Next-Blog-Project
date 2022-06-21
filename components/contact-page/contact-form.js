import React, { useRef, useState, useEffect } from "react";
import Notification from "../ui/notification";
import classes from "./contact-form.module.css";

const sendMessage = async (messageData) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(messageData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Something went wrong");
  }
};

const ContactForm = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  const [requestStatus, setRequestStatus] = useState(null); // success,error,pending
  const [errorStatus, setErrorStatus] = useState(null);

  // auto dismiss notification
  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setErrorStatus(null);
      }, 2500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [requestStatus]);

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredName = nameRef.current.value;
    const enteredMessage = messageRef.current.value;

    if (
      !enteredEmail ||
      !enteredEmail.includes("@") ||
      !enteredName ||
      enteredName.trim().length === 0 ||
      !enteredMessage ||
      enteredMessage.trim().length === 0
    ) {
      // error noti
      return;
    }

    setRequestStatus("pending");
    try {
      await sendMessage({
        email: enteredEmail,
        userName: enteredName,
        message: enteredMessage,
      });
      setRequestStatus("success");
    } catch (error) {
      setRequestStatus("error");
      setErrorStatus(error.message);
    }
  };

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending!",
      message: "Your message on its way",
    };
  }
  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: errorStatus,
    };
  }
  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully",
    };
  }

  return (
    <>
      {notification && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />
      )}

      <section className={classes.contact}>
        <h1>How can I help you?</h1>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.controls}>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" ref={emailRef} required />
            </div>
            <div className={classes.control}>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" ref={nameRef} required />
            </div>
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows="5"
              ref={messageRef}
              required
            ></textarea>
          </div>

          <div className={classes.actions}>
            <button>Send Message</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
