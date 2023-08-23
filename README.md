# Threads Clone using Next.js, Typescript, TailwindCSS, MongoDB and Mongoose

### Description
Threads web is an innovative open-source project that draws inspiration from the popular social media platform Twitter and seamlessly merges it with the collaborative nature of GitHub. This project aims to create a microblogging platform that fosters communication, collaboration, and knowledge sharing among developers, while utilizing the familiarity and structure of GitHub's ecosystem.

### Key Features
 - Responsive Design with TailwindCSS and ShadowUI Components
 - Clerk Authentication
 - Sign In and Sign Out Functionality
 - Thread Management: create, share, and delete threads
 - Thread Comments
 - Community Creation and Membership
 - Profile Customization and Image upload using UploadThing
 - Server Error Handling with react-hot-toast
 - User and Community Search
 - Activity Tracking

## Application Overview

### Home Page
![Screenshot 2023-08-21 111128](https://github.com/Aakash-Sleur/threads/assets/112175038/c1c2c736-314f-4554-be3b-01a2bceb2148)

### Search Page
![Screenshot 2023-08-21 111212](https://github.com/Aakash-Sleur/threads/assets/112175038/7da3864e-b3ee-4702-943f-9b676547564e)

### Create thread
![Screenshot 2023-08-21 111311](https://github.com/Aakash-Sleur/threads/assets/112175038/ecb86a5c-eee9-4b53-9424-e0649178e480)

### Activity Section
![Screenshot 2023-08-21 114126](https://github.com/Aakash-Sleur/threads/assets/112175038/6e02e645-922a-452c-96d5-feaae828b7ff)

### Community Page
![Screenshot 2023-08-21 111328](https://github.com/Aakash-Sleur/threads/assets/112175038/b52a19d4-6809-4b25-a0f5-201552093038)

### Profile Page
![Screenshot 2023-08-21 111249](https://github.com/Aakash-Sleur/threads/assets/112175038/34efff75-5cd6-4b63-bed3-22de4b1f6dba)

## Live Application
https://threads-cyan.vercel.app


## Prerequisites

NODE version 14.x


### Clone Respository

```shell
https://github.com/Aakash-Sleur/threads.git
```

### Install
```shell
npm install
```

### Set Environment up
```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_CLERK_WEBHOOK_SECRET=

MONGODB_URL=
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```

### Start the app
```shell
npm run dev
```
