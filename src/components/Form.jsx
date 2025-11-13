export default function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    alert(`Submitted: ${name} — ${email}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ border: '1px solid lightgreen', width: '50%', padding: '10px' }}>
        <div style={{ margin: '10px' }}>
          <label htmlFor="name">Name:</label><br />
          <input type="text" id="name" name="name" style={{ marginBottom: '10px' }} /><br />

          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="email" style={{ marginBottom: '10px' }} /><br />

          <label htmlFor="password">Password:</label><br />
          <input type="password" id="password" name="password" style={{ marginBottom: '10px' }} /><br />

          <label htmlFor="passwordMatch">Re-type Password:</label><br />
          <input type="password" id="passwordMatch" name="passwordMatch" style={{ marginBottom: '10px' }} /><br />

          <input type="checkbox" id="buyer" name="buyer" value="buyer" />
          <label htmlFor="buyer">I want to buy produce directly from allotment owners.</label><br />

          <input type="checkbox" id="seller" name="seller" value="seller" />
          <label htmlFor="seller">I want to sell produce from my allotment.</label><br />

          <input type="checkbox" id="tos" name="tos" value="tos" required />
          <label htmlFor="tos">
            I agree to the{' '}
            <a style={{ display: 'inline', color: 'blue', padding: '0', textDecoration: 'underline' }} href="">
              Terms of Use
            </a>{' '}
            and{' '}
            <a style={{ display: 'inline', color: 'blue', padding: '0', textDecoration: 'underline' }} href="">
              Privacy Policy
            </a>.
          </label>
          <br />

          <input type="submit" id="button" value="Register" />
          <a
            style={{ display: 'inline', color: 'blue', padding: '0', textDecoration: 'underline', paddingLeft: '10px' }}
            href=""
          >
            Learn more
          </a>
        </div>
      </div>
    </form>
  );
}