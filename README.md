<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://github.com/adiamorrisswanger/workOfArtServer.git">
    <img src="./public/images/WoALogo-2020-SM.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Work of Art: Interactive</h3>

  <p align="center">
    API server for Work of Art: Interact React site created by Adia Morris Swanger and <a href="https://github.com/RachelNurmi91">Rachel Nurmi</a>.
    <br />
    <a href="https://github.com/adiamorrisswanger/workOfArtServer.git"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <!-- Add demo link -->
    <a href="">View Demo</a>

  </p>
</div>
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]]()


<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* [Node.js](https://nodejs.org/en//)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
# Code Overview

## Dependencies

- [expressjs](https://github.com/expressjs/express) 
- [express-jwt](https://github.com/auth0/express-jwt) 
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [mongoose](https://github.com/Automattic/mongoose) 
- [passport](https://github.com/jaredhanson/passport) - For handling user authentication

## Application Structure

- `app.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models- `config/` - Contains configuration for MongoDB
- `routes/` - This folder contains the route definitions for our API.
- `models/` - This folder contains the schema definitions for our Mongoose models.

## Authentication


<br />
<!-- CONTACT -->
## Contact

Adia Morris Swanger - [@longtallsallie](https://twitter.com/longtallsallie) - adia@adiamorris.com

React Project Link: [https://github.com/adiamorrisswanger/react-woa](https://github.com/adiamorrisswanger/react-woa)
Node Project Link: [https://github.com/adiamorrisswanger/workOfArtServer.git](https://github.com/adiamorrisswanger/workOfArtServer.git)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/adiamorrisswanger/react-woa.svg?style=for-the-badge
[contributors-url]: https://github.com/adiamorrisswanger/react-woa/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/adiamorrisswanger/react-woa.svg?style=for-the-badge
[forks-url]: https://github.com/adiamorrisswanger/react-woa/network/members
[stars-shield]: https://img.shields.io/github/stars/adiamorrisswanger/react-woa.svg?style=for-the-badge
[stars-url]: https://github.com/adiamorrisswanger/react-woa/stargazers
[issues-shield]: https://img.shields.io/github/issues/adiamorrisswanger/react-woa.svg?style=for-the-badge
[issues-url]: https://github.com/adiamorrisswanger/react-woa/issues
[license-shield]: https://img.shields.io/github/license/adiamorrisswanger/react-woa.svg?style=for-the-badge
[license-url]: https://github.com/adiamorrisswanger/react-woa/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/adia-morris-swanger
<!-- Upload screenshot -->
[product-screenshot]: ./public/images/woa-screencapture-5-4-22.png