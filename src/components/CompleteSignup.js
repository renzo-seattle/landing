import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { Formik, Field } from "formik";
import { CustomerService } from "../services/customer.service";
import qs from "query-string";

const customerService = new CustomerService();

const CompleteSignup = () => {
  let query = {};
  if (typeof document !== "undefined") {
    query = qs.parse(window.location.search);
  }

  const [submitted, setSubmitted] = useState(false);
  const { token } = query;

  return submitted ? (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-12 w-auto" src={logo} alt="logo" />
          <h3 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Thank you for registering. You will be redirected momentarily.
          </h3>
        </div>
      </div>
    </>
  ) : (
    <>
      <Formik
        initialValues={{}}
        validateOnChange={false}
        validate={(vals) => {
          let errs = {};
          if (!vals.institutionName) errs.institutionName = "Required";
          if (!vals.firstName) errs.firstName = "Required";
          if (!vals.lastName) errs.lastName = "Required";
          if (!vals.password) errs.password = "Required";
          if (Object.keys(errs).length > 0) {
            return errs;
          }
          vals.token = token;
        }}
        onSubmit={(vals) => {
          customerService.submitCustomerInformation(vals);
          setSubmitted(true);
        }}
      >
        {(formikProps) => {
          return (
            <form onSubmit={formikProps.handleSubmit}>
              <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                  <img className="mx-auto h-12 w-auto" src={logo} alt="logo" />
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Complete Your Registration
                  </h2>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                  <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Gym / School Name
                      </label>
                      <div className="mt-1">
                        <Field
                          id="institutionName"
                          name="institutionName"
                          type="text"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Subdomain
                      </label>
                      <div className="mt-1">
                        <Field
                          id="subdomain"
                          name="subdomain"
                          type="text"
                          placeholder="yoursubdomain.actionnote.co"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className="block text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <div className="mt-1">
                        <Field
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <div className="mt-1">
                        <Field
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <div className="mt-1">
                        <Field
                          id="password"
                          name="password"
                          type="password"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
      ;
    </>
  );
};

export default CompleteSignup;
