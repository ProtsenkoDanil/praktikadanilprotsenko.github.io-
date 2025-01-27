export default {
  template: `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background-color: #f5f5f5;">
      <h1 style="margin-bottom: 20px;">Login Page</h1>
      <form @submit.prevent="handleLogin" style="display: flex; flex-direction: column; width: 300px; gap: 15px;">
        <input 
          type="email" 
          placeholder="Email" 
          v-model="email" 
          style="padding: 10px; border: 1px solid #ccc; border-radius: 5px;"
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          v-model="password" 
          style="padding: 10px; border: 1px solid #ccc; border-radius: 5px;"
          required
        />
        <button 
          type="submit" 
          style="padding: 10px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;">
          Log In
        </button>
      </form>
      <p style="margin-top: 10px;">Use <b>adminmail.com</b> and <b>admin</b> as credentials for admin login.</p>
    </div>
  `,
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      if (this.email === 'adminmail.com' && this.password === 'admin') {
        alert('Welcome, Admin!');
        this.$router.push('/admin');
      } else {
        alert('Invalid credentials! Please try again.');
      }
    },
  },
};
