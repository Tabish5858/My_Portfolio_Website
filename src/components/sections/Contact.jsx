import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import { personalData } from "../../data/personal-data";
import { IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { BiLogoLinkedin } from "react-icons/bi";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setLoading(true);
    const emailData = {
      to_name: "Tabish Bin Ishfaq",
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    emailjs
      .send(
        "service_3vsryhr",
        "template_b6smmau",
        emailData,
        "GlkJgV_nfVG5Ns47M"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully!");
          reset();
        },
        (err) => {
          console.error("FAILED...", err);
          toast.error(
            `Failed to send message: ${err.text || "Please try again."}`
          );
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast.success("Phone number copied to clipboard!");
      },
      (err) => {
        toast.error("Failed to copy phone number.");
      }
    );
  };

  return (
    <section className="Contact">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center mx-auto text-center heading-with-lines">
          <h5>Contact Me</h5>
        </div>
        <div className="row justify-content-between gy-md-0 gy-4 mt-lg-5 mt-4">
          <div className="col-md-6">
            <div>
              <h5 className="mb-lg-4 mt-3 text-md-start text-center">
                If you have any questions or concerns, please don't hesitate to
                contact me. I am open to any work opportunities that align with
                my skills and interests... And Believe Me ... This Works 👇!
              </h5>
              <form
                className="d-flex flex-column gap-lg-4 gap-3"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="w-100">
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="w-100">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="w-100">
                  <textarea
                    id="message"
                    placeholder="Message For Me"
                    rows={12}
                    {...register("message")}
                  ></textarea>
                  {errors.message && (
                    <p className="text-sm text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <button className="hover1" type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="d-flex flex-column justify-content-center h-100 gap-md-4 gap-3 ">
              <div className="d-flex flex-column gap-md-4 gap-3">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalData.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdAlternateEmail /> {personalData.email}
                </a>
                <h6 onClick={() => copyToClipboard(personalData.phone)}>
                  <IoMdCall /> {personalData.phone}
                </h6>
              </div>
              <div className="d-flex gap-md-3 gap-2">
                <Link to={personalData.github} target="_blank">
                  <IoLogoGithub /> GitHub
                </Link>
                <Link to={`https://${personalData.linkedIn}`} target="_blank">
                  <BiLogoLinkedin /> LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="py-lg-4 py-3">
          <p className="pt-lg-3 pt-2">
            &copy; Developed By{" "}
            <Link to={`https://${personalData.linkedIn}`} target="_blank">
              Tabish Bin Ishfaq
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
