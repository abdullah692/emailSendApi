
# Node.js Email Sending API

A simple API built with Node.js to send emails using [Nodemailer](https://nodemailer.com/).

## Features

- Send emails with a POST request
- Built using `Express` and `Nodemailer`

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/my-node-api.git
cd my-node-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Environment Variables

Create a `.env` file in the project root:

```bash
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
```

### 4. Run the Server

```bash
npm run dev   # For development (nodemon)
npm start     # For production
```

Server runs on `http://localhost:3000`.

## Usage

### API Endpoint: POST `/api/send-email`

Send an email by providing `recipientEmail`, `subject`, and `message` in the request body.

- **Example Request**:

```json
{
  "recipientEmail": "recipient@example.com",
  "subject": "Test Email",
  "message": "Hello, this is a test email!"
}
```

- **Example Response**:

```json
{
  "message": "Email sent successfully!"
}
```

### Example cURL

```bash
curl -X POST http://localhost:3000/api/send-email \
-H "Content-Type: application/json" \
-d '{"recipientEmail":"recipient@example.com", "subject":"Test", "message":"Hello!"}'
```

---

This version is more concise while still covering essential information.
