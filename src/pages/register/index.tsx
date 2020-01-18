import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

import { Account, AccountKeys, accountService } from "api/services/account";

import Alert from "ui/alert";

import "./index.scss";

const useAccountForm = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState(new Account());

  const change = ({
    target: { value, dataset }
  }: React.ChangeEvent<HTMLInputElement>) => {
    setData(prevData => ({ ...prevData, [dataset.key]: value }));
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsPending(true);
      const result = await accountService.create(data);
      setError("");
      console.log(result);
    } catch (err) {
      setError("Error occured");
    } finally {
      setIsPending(false);
    }
  };

  return [data, change, submit, isPending, error] as [
    Account,
    (e: React.ChangeEvent<HTMLInputElement>) => void,
    (e: React.FormEvent<HTMLFormElement>) => void,
    boolean,
    string
  ];
};

const Register = () => {
  const [data, changeField, submit, isCreating, error] = useAccountForm();

  const keys = Object.keys(data) as AccountKeys;

  return (
    <div className="register">
      <Helmet>
        <title>Register page</title>
      </Helmet>

      {isCreating && <div>siema</div>}

      {error && !isCreating && <Alert />}

      <form onSubmit={submit} className="form">
        {keys.map(key => (
          <div key={key} className="field-wrapper">
            <input data-key={key} value={data[key]} onChange={changeField} />
          </div>
        ))}

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
