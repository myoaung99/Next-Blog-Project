import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./notification.module.css";

const noti = {
  hidden: {
    y: 500,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      duration: 1,
    },
  },

  exit: {
    y: 500,
    transition: {
      duration: 0.7,
    },
  },
};

function Notification(props) {
  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        variants={noti}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={cssClasses}
      >
        <h2>{title}</h2>
        <p>{message}</p>
      </motion.div>
    </AnimatePresence>,
    document.getElementById("notifications")
  );
}

export default Notification;
