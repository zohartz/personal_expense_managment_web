import React, { Componenet ,useState ,Redirect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import API from '../api/expense_mng_api'
import './components.css'

// const SignUp = () => {

const SignUp = () => {
  const initialUserState = {
    id:null,
    name:'',
    last_name: '',
    password: '',
    email: '',
    phone:''
  };
  const [user, setUser] = useState(initialUserState);

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({...user,[name]:value,})
  };

  const saveUser = () => {
    var data = {
      name:user.name,
      last_name:user.last_name,
      password:user.password,
      email:user.email,
      phone:user.phone
    };

    API.createUser(data)
      .then(response => {
        // setUser({
        //   id: response.data.id,
        //   title: response.data.title,
        //   description: response.data.description,
        //   published: response.data.published
        // });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newUser = () => {
    setUser(initialUserState);
    setSubmitted(false);
  };
  return (
    <div className='signUpDiv'>
    <div className = "submit">
      <header className = "formHeader">
        Sign Up
      </header>
    <div className="submit-form" >
      {submitted ? (
       // <Redirect to='/dashboard' />
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-primary" onClick={newUser}>
            Add
          </button>
        </div>
      ) : (
        //name, last_name, password, email, phone
        <div>
          <div className="form-group">
            {/* <label htmlFor="name">Name</label> */}
            <input
              type="text"
              className="form-control"
              id="name"
              required
              //value = "Name"
              value={user.name}
              onChange={handleInputChange}
              name="name"
              placeholder="Name"

            />
          </div>

          <div className="form-group">
            {/* <label htmlFor="last_name">Last Name </label> */}
            <input
              type="text"
              className="form-control"
              id="last_name"
              required
              //value = "Last Name"
              value={user.last_name}
              onChange={handleInputChange}
              name="last_name"
              placeholder="Last Name"

            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="password">Password </label> */}
            <input
              type="text"
              className="form-control"
              id="password"
              required
              //value = 'Password'
              value={user.password}
              onChange={handleInputChange}
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="email">Email </label> */}
            <input
              type="text"
              className="form-control"
              id="email"
              required
              //value = 'Email'
              value={user.email}
              onChange={handleInputChange}
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="phone">Phone </label> */}
            <input
              type="text"
              className="form-control"
              id="phone"
              required
              //value = "Phone"
              value={user.phone}
              onChange={handleInputChange}
              name="phone"
              placeholder="Phone"
            />
          </div>
          <div>
          <button onClick={saveUser} className="btn btn-primary">
            Submit
          </button>
          <a class="btn btn-primary" id='loginButton' href="/login" role="button">Login</a>
          </div>

        </div>
      )}
    </div>
  </div>
  </div>
  );
};

export default SignUp;
