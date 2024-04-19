import { signIn } from 'next-auth/react';

export default function SignupPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password
    });
    if (!result.error) {
      // Redirect user after successful signup
    } else {
      // Handle signup error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
}
