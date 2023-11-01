# PortfolioForge

PortfolioForge is a user-friendly web application that allows you to effortlessly create and share stunning portfolios. With a straightforward form-based approach, you can generate personalized portfolios to showcase your work, skills, and achievements.

## Tech Stack

- Next.js 13: A powerful React framework for building modern web applications.
- Tailwind CSS: A utility-first CSS framework for creating sleek and responsive designs.
- NextAuth.js: A complete authentication solution for Next.js applications.
- MongoDB: A NoSQL database to store and manage user data and portfolios.
- NodeJs: Node.js is a back-end JavaScript runtime environment.

## Demo

https://portflection.vercel.app/

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/PortfolioForge.git
```

2. Install Dependencies:

Navigate to the project's root directory and install the necessary dependencies.

```bash
cd PortfolioForge
npm install
```

3. Set Up Environment Variables:

Create a .env.local file and configure the following environment variables with your values:

```bash
MONGODB_URI=your-mongodb-uri

GOOGLE_ID = your-google_id
GOOGLE_CLIENT_SECRET = your-google-client-secret

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET= `openssl rand -base64 32` use this command to generate a secret
```

4. Run the Development Server:

Start the Next.js development server:

```bash
npm run dev
```

5. Open Your Browser:
   The application will be available at http://localhost:3000. You can access it via your web browser.
