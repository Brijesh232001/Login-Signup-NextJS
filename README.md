
Setup Instructions
Clone the repository

git clone <repo_url>
cd <project_directory>

Install dependencies
npm install

Set up environment variables
Create a .env file in the root directory and add the following:
NEXTAUTH_URL = "http://localhost:3000"
 NEXTAUTH_SECRET= 'Your-secret-string',
 MONGODB_URI="your_database_connection_string"
Replace your_database_connection_string with your actual database connection URL.

Start the application
npm start
