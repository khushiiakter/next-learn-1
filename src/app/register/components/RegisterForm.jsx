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
    <div className="glass-card w-full max-w-md h-fit shrink-0">
      <div className="card-body">
        <form onSubmit={handleSubmit}  className="fieldset ">
          <label className="label">Name</label>
          <input
            type="text"
            name="username"
            className="input input-bordered w-full bg-white/10 border-violet-200/20 text-white placeholder-violet-200/70"
            placeholder="Name"
          />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full bg-white/10 border-violet-200/20 text-white placeholder-violet-200/70"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input input-bordered w-full bg-white/10 border-violet-200/20 text-white placeholder-violet-200/70"
            placeholder="Password"
          />

          <button className="btn btn-gradient mt-4">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
