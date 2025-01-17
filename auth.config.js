export const authConfig = {
    pages: {
      signIn: '/main/login', // Change this to your login page path
    },
    callbacks: {
      authorized({ auth, request: { nextUrl } }) {
        const isLoggedIn = !!auth?.user;
        console.log(auth)
        const isProtected = nextUrl.pathname.startsWith('/main');
        
        if (isProtected) {
          if (isLoggedIn) return true;
          return false; // Redirect unauthenticated users to login page
        }
        return true;
      }
    },
    providers: [], // Providers are now configured in auth.js
  }