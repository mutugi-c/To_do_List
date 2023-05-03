<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 Webpack-Boilerplate <a name="about-project"></a>

**Webpack-Boilerplate** is a project to build a simple yet powerful webpack boilerplate, which can later be used as a starting point in projects.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://developer.mozilla.org/es/docs/Learn/HTML">HTML</a></li>
    <li><a href="https://developer.mozilla.org/es/docs/Web/CSS">CSS</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **Uses HtmlWebpackPlugin to automatically create the index.html file in the /dist directory**
- **Style-loader and css-loader added to module configuration**
- **Webpack dev server set up**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

To use this boilerplate, you need an IDE such as VS code, sublime, atom e.t.c:

### Setup

Clone this repository to your desired folder:

Example commands:

```sh
 $ cd your-folder
 $ git clone https://github.com/mutugi-c/Webpack-boilerplate.git
```

### Install

To work with this boilerplate, you need to initialize npm, install webpack locally, and install the webpack-cli (the tool used to run webpack on the command line):

```sh
   $ npm init -y

   $ npm install webpack webpack-cli --save-dev
```

### Usage

To build during development or for production, run:

```sh
  $ npm run build
```

otherwise, you can use the local dev server using:

```sh
  $ npm start
```

Go to your browser and type localhost:8080. Your Application should run

### Run tests

- The linters within the project help test for good code practice.
- To run tests, run the HTML document in Google Chrome and right-click the HTML element you want to inspect. Click on "Inspect" and you will have the tools to run, analyze, and even debug the code

### Deployment

You can deploy this project using build tools such as webpack, Rollup, Parcel, e.t.c or even deploy using Github pages:

Example: To build for production with github pages:

- Run npm run build to update the dist if necessary.
- Deploy your website using GitHub Pages.
- NOTE: as GH pages are meant to deploy static pages you need to go to the dist directory to see your app:
  https://<GH_username>.github.io/<GH_repo_name>/dist/.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Chris Mutugi**

- GitHub: [@mutugi-c](https://github.com/mutugi-c)
- Twitter: [@chris\_\_mutugi](https://twitter.com/chris__mutugi)
- LinkedIn: [chris-mutugi](https://www.linkedin.com/in/chris-mutugi-46594b123/)

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- **Any configurations that may be deemed necessary**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project, give a ⭐️.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank [Microverse](https://www.microverse.org/go?utm_source=google&utm_medium=paid&utm_campaign=search_europe&gclid=CjwKCAjwq-WgBhBMEiwAzKSH6IxBgyh61fi4WRuQvUsaGigJMuzzc9177uC6mhMwXeriUDendiuvChoC20wQAvD_BwE) for the opportunity to work on this project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
