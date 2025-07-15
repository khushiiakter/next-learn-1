"use client";
const RegisterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const payload = { username, password, email };
  };
  return (
    <div className="card  bg-base-100 w-full max-w-md h-fit shrink-0 shadow-2xl">
      <div className="card-body ">
        <form onSubmit={handleSubmit}  className="fieldset ">
          <label className="label">Name</label>
          <input type="text" name="username" className="input w-full" placeholder="Name" />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input w-full"
            placeholder="Password"
          />

          <button className="btn btn-neutral mt-4">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
