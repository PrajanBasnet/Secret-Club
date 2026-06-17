# 🔐 Members Only Club

A private, members-only message board where anonymity is the default — and a secret passphrase is the key to the truth.

---

## 📖 About

Members Only Club is a full-stack web application built around a simple but interesting social mechanic:

- **Anyone** can sign up and join the club
- **Members** can read all posts on the board
- **But** — the author of every post is hidden by default
- **Only** members who know the **secret passphrase** can unlock author visibility and see who wrote what

It's a little mysterious. That's the point.

---

## ✨ Features

- 🔒 **Authentication** — Secure sign-up and login system
- 📝 **Post Board** — Members can create and read posts after logging in
- 👤 **Anonymous by Default** — Post authors are hidden from regular members
- 🗝️ **Secret Passphrase** — Enter the passphrase to reveal author names across all posts
- 🛡️ **Route Protection** — Non-members are blocked from viewing the board

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Node.js, Express |
| Database | PostgreSQL |
| Authentication | Passport.js, bcrypt, express-session |
| Frontend | EJS (or React) |
| Environment | dotenv |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- PostgreSQL

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/members-only-club.git
   cd members-only-club
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   ```bash
   psql -U postgres -f db/schema.sql
   ```

4. **Configure environment variables**

   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/members_only
   SESSION_SECRET=your_session_secret_here
   SECRET_PASSPHRASE=your_secret_passphrase_here
   PORT=3000
   ```

5. **Start the server**
   ```bash
   npm start
   ```

6. Open your browser and go to `http://localhost:3000`

---

## 🔑 How the Passphrase Works

After signing up and logging in, users land on the message board. All posts are visible, but the **author field is hidden**.

To reveal author names:

1. Navigate to the **"Unlock"** or **"Enter Passphrase"** page
2. Enter the secret passphrase
3. If correct, your account is upgraded — you can now see **who wrote every post**

This status persists in your session/account until you log out.

---

## 📁 Project Structure

```
members-only-club/
├── db/
│   └── schema.sql          # Database schema
├── routes/
│   ├── auth.js             # Sign up / login / logout
│   ├── posts.js            # View and create posts
│   └── passphrase.js       # Secret passphrase unlock
├── middleware/
│   └── auth.js             # Route protection middleware
├── views/                  # EJS templates (or React components)
├── public/                 # Static assets
├── app.js                  # Express app entry point
├── .env.example            # Environment variable template
└── README.md
```

---

## 📸 Screenshots

> <img width="2534" height="1240" alt="image" src="https://github.com/user-attachments/assets/b342a145-6abf-4882-b33d-e84640b4ec6d" />


---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

[MIT](LICENSE)
