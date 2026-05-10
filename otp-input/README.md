# OTP Input Component

A reusable React OTP (One-Time Password) input component that supports **dynamic OTP lengths**, automatic focus management, paste handling, and numeric-only validation.

<img width="800" height="400" alt="ScreenRecording2026-05-10at5 34 40PM-ezgif com-video-to-gif-converter" src="https://github.com/user-attachments/assets/4869c549-85f3-46ac-ac2f-afb7cf41330e" />

---

## Features

* Supports **N number of OTP input boxes**
* Accepts only numeric input
* Automatically moves focus to the next input
* Moves focus back on backspace
* Supports full OTP paste
* Triggers callback when OTP is fully entered
* Rejects non-numeric characters
* Real-time UI updates
* Reusable and configurable component

---

## Requirements Implemented

* Render OTP input boxes dynamically based on length
* Each input accepts only one digit
* Auto-focus next input after typing
* Auto-focus previous input on backspace
* Paste support for complete OTP
* Trigger `onChangeOTP` callback after all digits are entered
* Numeric-only validation

---

## Constraints & Edge Cases

* Only numbers are allowed
* Backspace on empty input moves focus to previous box
* Pasting full OTP fills all input boxes correctly
* Non-numeric input is ignored
* Each input stores only one digit
* Supports variable OTP lengths (4, 5, 6, etc.)

---

## Tech Stack

* React
* JavaScript
* CSS

---

## Project Structure

```plaintext id="5qj6v6"
src/
│
├── components/
│   ├── OTPInput.jsx
│   └── OTPInput.css
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Installation

Clone the repository:

```bash id="9kg9r4"
git clone https://github.com/your-username/your-repo-name.git
```

Navigate to the project folder:

```bash id="qjlwmn"
cd your-repo-name
```

Install dependencies:

```bash id="i6d8my"
npm install
```

Start the development server:

```bash id="6c7c87"
npm run dev
```

---

## Usage

```jsx id="1lbm7d"
<OTPInput length={6} onChangeOTP={handleOTPChange} />
```

---

## Example OTP State

```js id="z6zccv"
const otp = ["1", "2", "3", "4", "5", "6"];
```

Combined OTP:

```js id="by1rr2"
otp.join(""); // "123456"
```

---

## Example Callback

```js id="l44xb9"
const handleOTPChange = (otp) => {
  console.log("Entered OTP:", otp);
};
```

---

## Future Improvements

* Masked OTP input
* Mobile OTP auto-read support
* Accessibility enhancements
* Auto-submit on completion
* Error validation states
* Resend OTP timer

---

## License

This project is licensed under the MIT License.


