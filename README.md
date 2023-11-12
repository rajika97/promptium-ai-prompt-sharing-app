# Promptium

![Promptium Logo](/public/assets/images/logo.svg)

Discover and share AI-powered prompts with Promptium.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

Promptium is an open-source AI prompting tool designed for the modern world. It allows users to discover, create, and share creative prompts. Whether you are a writer, developer, or anyone seeking creative inspiration, Promptium is here to inspire your imagination.

You can check the deployed project here: [https://promptium.rajika.pro](https://promptium.rajika.pro).

## Features

- Create and share AI-generated prompts.
- Login using Google Authentication
- Discover a wide range of prompts from the community.
- Search for prompts based on tags, keywords, and usernames.
- User-friendly and intuitive interface.
- Open-source and customizable.

## Installation

To run Promptopia locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/rajika97/promptium-ai-prompt-sharing-app.git

   ```

2. Navigate to the project directory:

   ```bash
   cd promptium-ai-prompt-sharing-app

   ```

3. Install dependencies:

   ```bash
   npm install

   ```

4. Set up environment variables. Create a .env file in the root directory and configure your environment variables:

   ```bash
    GOOGLE_ID=[Your Google ID]
    GOOGLE_CLIENT_SECRET=[Your Google Client Secret]
    MONGODB_URI=[Your MongoDB URI]

    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_URL_INTERNAL=http://localhost:3000
    NEXTAUTH_SECRET=[Your NEXTAUTH Secret]

   ```

5. Run the development server:

   ```bash
   npm run dev

   ```

6. Your Promptopia app should now be running at http://localhost:3000

## Usage

- Visit the Promptium app in your browser.
- Sign in or create an account to start using the app.
- Explore prompts, create your own, and share them with the community.
- Use the search feature to discover prompts based on your interests.
