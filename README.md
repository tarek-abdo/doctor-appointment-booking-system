# Doctor Booking Application System
A modern, full-stack web application designed to streamline the process of finding, and booking appointments with healthcare professionals. This platform provides a user-friendly interface for patients to search for doctors by specialty, view profiles, and manage their appointments seamlessly.

---

## ✨ Key Features
- **🔐 Secure Authentication**: Easy and secure user sign-up and sign-in powered by Kinde.
- **🔍 Advanced Search**: Search for doctors by name or browse through various medical specializations like Cardiology, Dentistry, Neurology, and more.
- **👨‍⚕️ Doctor Profiles**: View a curated list of popular doctors and access their details.
- **🗓️ Seamless Booking**: An intuitive appointment booking system with a date and time picker.
- **📅 Appointment Management**: A dedicated "My Bookings" page where users can view their upcoming and expired appointments.
- **📧 Email Notifications**: Automatic email confirmations for booked appointments using Resend and React Email.
- **📱 Responsive Design**: A fully responsive interface that works flawlessly on desktops, tablets, and mobile devices.
- **🎨 Modern UI**: Built with the latest technologies including Next.js, Tailwind CSS, and Shadcn/ui for a clean and modern user experience.

---

## 📸 Screenshots
<img width="1893" height="838" alt="image" src="https://github.com/user-attachments/assets/65f9e31f-7b2d-44c9-a8bc-86965c17e575" />
<img width="1889" height="720" alt="image" src="https://github.com/user-attachments/assets/372ea36e-8deb-4b6d-96f5-21f8daff3344" />
<img width="1893" height="838" alt="image" src="https://github.com/user-attachments/assets/afe31c84-db4f-4421-9a63-d5c94235a4c9" />
<img width="1919" height="841" alt="image" src="https://github.com/user-attachments/assets/3e44154d-af41-40cb-94d6-7b0431069d23" />
<img width="1900" height="838" alt="image" src="https://github.com/user-attachments/assets/3fc92e23-e942-42ac-84ef-ccc49faf9e75" />
<img width="1896" height="799" alt="image" src="https://github.com/user-attachments/assets/f19125f9-eeda-4fb0-8f0f-a04d218dc4d1" />
<img width="1893" height="837" alt="image" src="https://github.com/user-attachments/assets/2ecc4c24-fbbb-4fb7-9aed-60958d71de39" />
<img width="762" height="749" alt="image" src="https://github.com/user-attachments/assets/27fa1c69-4bf6-4ae1-a2b2-bc0154ec667a" />
<img width="552" height="735" alt="image" src="https://github.com/user-attachments/assets/f9246cf5-ce68-4309-a1d2-938d90bebc17" />
<img width="598" height="740" alt="image" src="https://github.com/user-attachments/assets/3182a946-48c9-4540-87c2-d363d4a6fe95" />

---
## 🛠️ Tech Stack
This project is built with a modern, robust, and scalable tech stack:
- **Framework**: [Next.js 14](https://nextjs.org/)
- **Authentication**: [Kinde](https://kinde.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/)
- **API Requests**: [Axios](https://axios-http.com/)
- **Date & Time**: [date-fns](https://date-fns.org/), [Moment.js](https://momentjs.com/), [React Day Picker](http://react-day-picker.js.org/)
- **Emailing**: [Resend](https://resend.com/), [React Email](https://react.email/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/), [React Hot Toast](https://react-hot-toast.com/)
- **Linting/Formatting**: ESLint, Prettier
---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://www.google.com/url?sa=E&q=https%3A%2F%2Fnodejs.org%2F) (version 18.x or higher)
- [npm](https://www.google.com/url?sa=E&q=https%3A%2F%2Fwww.npmjs.com%2F) or [yarn](https://www.google.com/url?sa=E&q=https%3A%2F%2Fyarnpkg.com%2F)

### Installation
1. **Clone the repository:**
git clone https://github.com/your-username/doctor-appointment-booking-system.git
cd doctor-appointment-booking-system

    
2. **Install dependencies:** code Bash
   `npm install`
    
3. **Set up environment variables:** code Ini
   Create a .env.local file in the root directory. Use .env.example as a template:
    # Kinde Authentication - Get these from your Kinde dashboard
    KINDE_CLIENT_ID=
    KINDE_CLIENT_SECRET=
    KINDE_ISSUER_URL=
    KINDE_SITE_URL=http://localhost:3000
    KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
    KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000
    
    # Resend for Emails - Get this from your Resend dashboard
    RESEND_API_KEY=
    # This should be a verified domain on Resend
    RESEND_EMAIL_FROM=you@your-domain.com`
    
4. **Run the development server:** code Bash
    npm run dev
    # or
    yarn dev
    Open http://localhost:3000 to view the app.

## 📜 Available Scripts
In the project directory, you can run:
- npm run dev: Runs the app in development mode.
- npm run build: Builds the app for production.
- npm run start: Starts the production server.
- npm run lint: Lints the project files.
- npm run email: Starts the React Email development server to preview email templates.
---

## 🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.
1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request
