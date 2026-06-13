🔐 Secret Club (Member Only Posting System)

A full-stack web application where users can sign up, create posts, and view content based on membership status. The platform hides author identities by default — only users who unlock the secret password (passport) can see who wrote each post.

🚀 Features
👤 User Signup & Login system
🔐 Session-based authentication (Passport.js)
📝 Create and view posts (members only)
🕵️ Anonymous post viewing (default mode)
🧠 Secret “passport” system to reveal post authors
🔒 Role-based access control (guest vs member)
⚡ PostgreSQL database integration
🧩 How It Works
Users must sign up and log in to access the platform
All logged-in users can:
View posts
Create posts
However:
Post usernames are hidden by default
To reveal post authors:
Users must solve a secret riddle / enter a password
Once verified, their member_status is updated in the database
They gain access to see post authors
🛠️ Tech Stack
Backend: Node.js, Express.js
Authentication: Passport.js
Database: PostgreSQL
Templating Engine: EJS
Styling: Tailwind CSS (or your setup)
Session Management: express-session
📁 Project Structure
/controllers
/routes
/views
/models
/db
app.js
⚙️ Installation
git clone https://github.com/your-username/secret-club.git
cd secret-club
npm install
🔑 Environment Variables

Create a .env file:

DB_USER=your_user
DB_HOST=localhost
DB_NAME=your_database
DB_PASSWORD=your_password
SESSION_SECRET=your_secret
▶️ Run the Project
npm start

Server runs on:

http://localhost:3000
🔐 Authentication Flow
User signs up / logs in
User can view posts anonymously (no author names)
User enters secret password (riddle system)



👨‍💻 Author
Developed by: Prajan Basnet
Inspired by building real-world authentication systems
