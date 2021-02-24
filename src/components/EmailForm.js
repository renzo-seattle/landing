import React from "react";
import { Formik, ErrorMessage, Field } from "formik";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import isEmail from "validator/lib/isEmail";

const url =
  "https://actionnote.us1.list-manage.com/subscribe/post?u=110ff937cf1386a4401d8d0f7&amp;id=b3d2acb817";

const EmailForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <Formik
        initialValues={{
          email: "",
        }}
        validateOnBlur
        validate={(vals) => {
          const errs = {};
          if (!isEmail(vals.email)) errs.email = "Please enter valid email";
          if (!vals.email.length) errs.email = "Please enter email";
          if (Object.keys(errs).length) return errs;
        }}
        onSubmit={(vals, actions) => {
          const payload = {
            EMAIL: vals.email,
          };
          subscribe(payload);
          actions.resetForm();
        }}
      >
        {(formikProps) => {
          const { handleSubmit } = formikProps;
          return (
            <div className="flex flex-col">
              <div className="flex flex-row">
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1 border-gray-300"
                  autoComplete="email"
                />
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Notify Me
                </button>
              </div>
              <ErrorMessage
                name="email"
                render={(msg) => (
                  <div className="text-red-500 text-sm">{msg}</div>
                )}
              />
              {status === "sending" && (
                <div className="mt-2 px-2 py-1 bg-indigo-600 animate-pulse text-white text-sm">
                  📡 Sending
                </div>
              )}
              {status === "success" && (
                <div className="mt-2 px-2 py-1 bg-green-500 text-white text-sm">
                  ✅ Success! We'll reach out to you shortly.
                </div>
              )}
              {status === "error" && (
                <div className="mt-2 px-2 py-1 bg-red-500 text-white text-sm">
                  {message ? (
                    <div dangerouslySetInnerHTML={{ __html: message }} />
                  ) : (
                    "😢 Oh no! Something went wrong."
                  )}
                </div>
              )}
            </div>
          );
        }}
      </Formik>
    )}
  />
);

export default EmailForm;
