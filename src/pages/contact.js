import React, { useState } from "react"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "../components/layout"

const Contact = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/43c12f7e-1126-4545-85d9-18f9fa043e0d",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }

  return (
    <Layout>
      <h1>Contact</h1>
      <form 
        enctype="multipart/form-data"
        onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label for="exampleInputEmail1">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required="required"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputName">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleInputName"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label for="exampleInputMessage">Message</label>
          <textarea 
          type="text" 
          name="message" 
          className="form-control"
          id="exampleInputMessage"
          placeholder="Enter your message"
          required 
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlSelect1">Favourite Platform</label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            name="platform"
            required
          >
            <option>Github</option>
            <option>Gitlab</option>
            <option>Bitbucket</option>
          </select>
        </div>
        <hr />
          <div class="form-group mt-3">
            <label class="mr-2">Upload your CV:</label>
            <input type="file" name="file" />
          </div>
        <hr />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={serverState.submitting}
        >
          Submit
        </button>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </form>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Contact
