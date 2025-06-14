
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="home">
        <p className="text-center">Portfolio</p>
        <p className="text-center">Designer</p>
        <p className="text-center">Artist</p>
        <p className="text-center">Web Developer</p>
        <p className="text-center">Full Stack Engineer</p>

        <div className="home-head" data-aos="fade-right" data-aos-offset="0" data-aos-duration="1000"
          data-aos-easing="ease-in-out">
          <h2>Hey <span className="h2">There</span></h2>
          <h1>I'm <span className="h1">Sameer</span></h1>
        </div>

        <div className='home-extra'>
          <div className='home-back'>
            <div className='back'></div>
            <h2>Porfolio</h2>
            <h5><span>Hey</span> there! I'm Sameer, a passionate web developer who thrives on building clean, fast, and user-friendly websites. I specialize in React.js and modern web technologies, ensuring seamless and responsive designs that enhance user experience. Problem-solving excites me, and I love bringing ideas to life through code.</h5>
          </div>
        </div>

        <div className='back1'>
          <div className='div1'></div>
          <div className='div2'></div>
          <div className='div3'></div>
        </div>

      </section>

      <section id="about">
        <div className="about-pic" data-aos="zoom-in" data-aos-offset="150" data-aos-duration="700">
          <img
            src="https://thumbs.dreamstime.com/b/avatar-gold-icon-vector-illustration-golden-particle-background-isolated-vector-sign-symbol-education-icon-black-background-168668166.jpg"
            alt="About Me" />

          <div className="about-content">
            <h1>ABOUT ME</h1>
            <p>I thrive on solving complex problems and turning ideas into functional, high-performing web applications. Every project I work on is an opportunity to push boundaries, optimize performance, and ensure a flawless digital experience.</p>
            <p>Beyond coding, I’m always exploring new trends, experimenting with the latest tech, and refining my skills to stay ahead in the ever-evolving web development landscape. I believe that great web experiences come from a mix of creativity, precision, and an eye for detail.</p>
          </div>

        </div>
      </section>

      <section id="skills">
        <h1 className="text-center">My Skills</h1>
        <div className="container">
          <div className="row p-lg-3 p-0 mb-lg-3 mb-0">
            <div className="col-lg-6 col-12 pt-lg-0 pt-2" data-aos="fade-right" data-aos-offset="100" data-aos-duration="700">
              <label>HTML</label>
              <div className="progress">
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }}>75%</div>
              </div>
            </div>
            <div className="col-lg-6 col-12 pt-lg-0 pt-2" data-aos="fade-left" data-aos-offset="100" data-aos-duration="700">
              <label>CSS</label>
              <div className="progress">
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }}>75%</div>
              </div>
            </div>
          </div>

          <div className="row p-lg-3 p-0 mb-lg-3 mb-0">
            <div className="col-lg-6 col-12 pt-lg-0 pt-2" data-aos="fade-right" data-aos-offset="100" data-aos-duration="700">
              <label>JavaScript</label>
              <div className="progress">
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '50%' }}>50%</div>
              </div>
            </div>
            <div className="col-lg-6 col-12 pt-lg-0 pt-2" data-aos="fade-left" data-aos-offset="100" data-aos-duration="700">
              <label>Bootstrap</label>
              <div className="progress">
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '60%' }}>60%</div>
              </div>
            </div>
          </div>

          <div className="row p-lg-3 p-0 mb-lg-3 mb-0">
            <div className="col-lg-6 col-12 pt-lg-0 pt-2" data-aos="fade-right" data-aos-offset="100" data-aos-duration="700">
              <label>ReactJS</label>
              <div className="progress">
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '50%' }}>50%</div>
              </div>
            </div>
            <div className="col-lg-6 col-12 pt-lg-0 pt-2" data-aos="fade-left" data-aos-offset="100" data-aos-duration="700">
              <label>NodeJS</label>
              <div className="progress">
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '35%' }}>35%</div>
              </div>
            </div>
          </div>

          <div className="row p-lg-3 p-0 mb-lg-3 mb-0">
            <div className="col-lg-6 col-12 pt-lg-0 pt-2" data-aos="fade-right" data-aos-offset="100" data-aos-duration="700">
              <label>Express</label>
              <div className="progress">
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '40%' }}>40%</div>
              </div>
            </div>
            <div className="col-lg-6 col-12 pt-lg-0 pt-2" data-aos="fade-left" data-aos-offset="100" data-aos-duration="700">
              <label>Mango DB</label>
              <div className="progress">
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '70%' }}>70%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container pb-lg-5">
          <h1 className="display-4 text-center">Projects</h1>

          <div className="row my-5">
            <div className="col-lg-4 col-12" data-aos="zoom-in" data-aos-offset="100" data-aos-duration="700">
              <div className="card" style={{ width: '25rem' }}>
                <div className="card-head">
                  <img src="bmi.jpg" className="card-img-top" alt="BMI Calculation" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">BMI Calculation</h5>
                  <p className="card-text">Instantly calculate your BMI and get health feedback. Created using React.js for a smooth experience.</p>
                  <a href="https://mohamedsameer007.github.io/BmiCalulator-React/" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12 my-lg-0 my-4" data-aos="zoom-in" data-aos-offset="200" data-aos-duration="700">
              <div className="card" style={{ width: '25rem' }}>
                <div className="card-head">
                  <img src="https://libertystreeteconomics.newyorkfed.org/wp-content/uploads/sites/2/2022/11/LSE_2022_international-pressures_goldberg_460-1.jpg"
                    className="card-img-top" alt="Currency Converter" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Currency Converter</h5>
                  <p className="card-text">Convert currencies in real-time with ease. Built with React.js for quick and accurate results.</p>
                  <a href="https://mohamedsameer007.github.io/CurrencyConverter-React/" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12 my-lg-0 my-4" data-aos="zoom-in" data-aos-offset="300" data-aos-duration="700">
              <div className="card" style={{ width: '25rem' }}>
                <div className="card-head">
                  <img src="https://wallpaper.dog/large/20490581.jpg" className="card-img-top" alt="Digital Clock" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Digital Clock</h5>
                  <p className="card-text">A real-time digital clock built with React.js. Displays hours, minutes, and seconds accurately.</p>
                  <a href="https://mohamedsameer007.github.io/DigitalClock-React/" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
          </div>


          <div className="row my-5">
            <div className="col-lg-4 col-12" data-aos="zoom-in" data-aos-offset="100" data-aos-duration="700">
              <div className="card" style={{ width: '25rem' }}>
                <div className="card-head">
                  <img src="https://www.acu-data78.com/wp-content/uploads/2016/05/qr-codes-featured-02.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">QR Code Generator</h5>
                  <p className="card-text">Instantly generate QR codes from any text or URL. Built with React.js for quick processing.</p>
                  <a href="https://mohamedsameer007.github.io/QrCodeGenerator-React/" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12 my-lg-0 my-4" data-aos="zoom-in" data-aos-offset="200" data-aos-duration="700">
              <div className="card" style={{ width: '25rem' }}>
                <div className="card-head">
                  <img src="https://mir-s3-cdn-cf.behance.net/projects/404/4064e9187713019.Y3JvcCw4MDgsNjMyLDAsMA.png" className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Password Generator</h5>
                  <p className="card-text">Create strong, secure passwords instantly. Built with React.js for fast and secure generation.</p>
                  <a href="https://mohamedsameer007.github.io/PasswordGenerator-React/" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12 my-lg-0 my-4" data-aos="zoom-in" data-aos-offset="300" data-aos-duration="700">
              <div className="card" style={{ width: '25rem' }}>
                <div className="card-head">
                  <img src="https://www.allaboutai.com/wp-content/uploads/2024/01/Right-AI-Tool-for-FAQs.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">FAQ Items</h5>
                  <p className="card-text">A dynamic FAQ section built using React.js. Get quick answers to common questions.</p>
                  <a href="https://mohamedsameer007.github.io/FaqItem-React/" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-lg-4 col-12" data-aos="zoom-in" data-aos-offset="100" data-aos-duration="700">
              <div className="card" style={{ width: '25rem' }}>
                <div className="card-head">
                  <img src="https://c8.alamy.com/comp/2ARR354/tripadvisor-online-travel-company-2ARR354.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">TripAdvisor</h5>
                  <p className="card-text">Designed a clean and engaging front page for TripAdvisor. Explore top destinations and travel tips.</p>
                  <a href="https://mohamedsameer007.github.io/TripAdvisor/" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12 my-lg-0 my-4" data-aos="zoom-in" data-aos-offset="200" data-aos-duration="700">
              <div className="card" style={{ width: '25rem' }}>
                <div className="card-head">
                  <img src="https://wallpapers.com/images/hd/juice-with-different-flavors-qu169nfu2r1ysjxk.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Juice World</h5>
                  <p className="card-text">Created a vibrant front page showcasing fresh juice options. Simple, colorful, and inviting.</p>
                  <a href="https://mohamedsameer007.github.io/Juicer/" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12 my-lg-0 my-4" data-aos="zoom-in" data-aos-offset="300" data-aos-duration="700">
              <div className="card" style={{ width: '25rem' }}>
                <div className="card-head">
                  <img src="https://media.wired.com/photos/65e83cc9b8ffa5f8fa84c893/4:3/w_2664,h_1998,c_limit/wired-uk-google-watching.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Google</h5>
                  <p className="card-text">Built a minimalist and fast-loading front page for Google. Clean design with quick search access.</p>
                  <a href="https://mohamedsameer007.github.io/Google-FrontPage/" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
          </div>


          <div className="row my-5">
            <div className="col-lg-4 col-12" data-aos="zoom-in" data-aos-offset="100" data-aos-duration="700">
              <div className="card" style={{ width: '25rem' }}>
                <div className="card-head">
                  <img src="https://as1.ftcdn.net/v2/jpg/03/45/97/36/1000_F_345973621_sMifpCogXNoIDjmXlbLwx1QZA5ZmQVl8.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Quiz</h5>
                  <p className="card-text">Test your knowledge with this interactive quiz app. Built with React.js for real-time feedback.</p>
                  <a href="https://mohamedsameer007.github.io/QuizApp-React/" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12 my-lg-0 my-4" data-aos="zoom-in" data-aos-offset="200" data-aos-duration="700">
              <div className="card" style={{ width: '25rem' }}>
                <div className="card-head">
                  <img src="https://img.freepik.com/premium-vector/customer-relationship-network-connection-technology-with-people-icons-dark-blue-background_618588-1059.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">User Card</h5>
                  <p className="card-text">Manage and display user profiles effortlessly. Created using React.js for a dynamic interface.</p>
                  <a href="https://mohamedsameer007.github.io/UserCard-React/" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12 my-lg-0 my-4" data-aos="zoom-in" data-aos-offset="300" data-aos-duration="700">
              <div className="card" style={{ width: '25rem' }}>
                <div className="card-head">
                  <img src="https://ecommercefastlane.com/wp-content/uploads/2024/01/Best-Ecommerce-Website-Builders-800x457.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">E-Commerce</h5>
                  <p className="card-text">Developed an intuitive and user-friendly front page for an online store. Smooth navigation and product display.</p>
                  <a href="https://mohamedsameer007.github.io/Juicer/" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
          </div>


          <div className="row mt-5">
            <div className="col-lg-4 col-12" data-aos="zoom-in" data-aos-offset="100" data-aos-duration="700">
              <div className="card" style={{ width: '25rem' }}>
                <div className="card-head">
                  <img src="https://png.pngtree.com/thumb_back/fh260/background/20231001/pngtree-completed-to-do-list-icon-a-3d-rendering-of-a-notebook-image_13576111.png" className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Todo list</h5>
                  <p className="card-text">Stay organized with this dynamic to-do list app. Built with React.js, it ensures an intuitive user experience.</p>
                  <a href="https://mohamedsameer007.github.io/TodoList-React/" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12 my-lg-0 my-4" data-aos="zoom-in" data-aos-offset="200" data-aos-duration="700">
              <div className="card" style={{ width: '25rem' }}>
                <div className="card-head">
                  <img src="https://png.pngtree.com/background/20230520/original/pngtree-an-orange-3d-calculator-sits-on-top-of-a-black-surface-picture-image_2674190.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Calculator</h5>
                  <p className="card-text">Perform quick and accurate calculations with this modern calculator app. Developed using React.js</p>
                  <a href="https://mohamedsameer007.github.io/Calculator-React/" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12 my-lg-0 my-4" data-aos="zoom-in" data-aos-offset="300" data-aos-duration="700">
              <div className="card" style={{ width: '25rem' }}>
                <div className="card-head">
                  <img src="https://static.vecteezy.com/system/resources/previews/021/667/135/non_2x/sun-cloud-lightning-gold-icon-illustration-of-golden-style-summer-time-on-dark-background-vector.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Weather App</h5>
                  <p className="card-text">Get real-time weather updates with this sleek weather app. Built with React.js, it provides accurate forecasts</p>
                  <a href="https://mohamedsameer007.github.io/Weather-React/" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      <section id="contact">
        <div className="container contact-us-main">
          <div className="row contact-us py-2">
            <div className="col-lg-7 contact-head" data-aos="fade-right" data-aos-offset="150" data-aos-duration="700">
              <img src="mern.jpg" alt="MERN Stack" />
            </div>

            <div className="col-lg-5 contact-body" data-aos="fade-left" data-aos-offset="150" data-aos-duration="700">
              <h3 className="my-2 text-center">Contact US</h3>
              <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">Name</label>
                <input type="text" className="form-control" id="nameInput" placeholder="enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">Email id</label>
                <input type="text" className="form-control" id="emailInput" placeholder="enter your mail" />
              </div>
              <div className="mb-3">
                <label htmlFor="messageTextarea" className="form-label">Message</label>
                <textarea className="form-control" id="messageTextarea" rows="2"></textarea>
              </div>
              <button className="btn btn-success">Submit</button>
            </div>
          </div>
        </div>
      </section>


      <footer>
        <div className="container py-lg-5 footer-content">
          <div className="row">
            <div className="col-lg-8 footer-head">
              <div className="footer-header">
                <div className="footer-head-content">
                  <p className="font mb-2">About Me</p>
                  <ul className="space-y-1">
                    <li><a href="#" className="hover:underline">Who I Am</a></li>
                    <li><a href="#" className="hover:underline">Skills</a></li>
                    <li><a href="#" className="hover:underline">Experience</a></li>
                    <li><a href="#" className="hover:underline">Resume</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                  </ul>
                </div>
                <div className="footer-head-content">
                  <p className="font mb-2">Explore</p>
                  <ul className="space-y-1">
                    <li><a href="#projects" className="hover:underline">Projects</a></li>
                    <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
                    <li><a href="#blog" className="hover:underline">Blog</a></li>
                    <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
                    <li><a href="#faq" className="hover:underline">FAQs</a></li>
                  </ul>
                </div>
                <div className="footer-head-content">
                  <p className="font mb-2">Work With Me</p>
                  <ul className="space-y-1">
                    <li><a href="#hire" className="hover:underline">Hire Me</a></li>
                    <li><a href="#freelance" className="hover:underline">Freelance Work</a></li>
                    <li><a href="#collab" className="hover:underline">Collaborations</a></li>
                    <li><a href="#consulting" className="hover:underline">Consulting</a></li>
                    <li><a href="#api" className="hover:underline">API & Integrations</a></li>
                  </ul>
                </div>
              </div>

              <div className="footer-item">
                <p><a href=""><i className="fa-solid fa-magnifying-glass"></i>About Me</a></p>
                <p><a href=""><i className="fa-solid fa-link"></i>Quick Links</a></p>
                <p><a href=""><i className="fa-solid fa-user-plus"></i>Follow Me</a></p>
                <p><a href=""><i className="fa-solid fa-copyright"></i>Copyright</a></p>
              </div>
              <p className="footer-para">"I’m a passionate Frontend Developer specializing in building interactive,
                user-friendly, and responsive web applications. With expertise in modern technologies like HTML,
                CSS, JavaScript, React, and Tailwind CSS, I create seamless digital experiences."</p>
            </div>

            <div className="col-lg-4 footer-body">
              <div className="footer-body-content">
                <ul>
                  <li>Looking for a frontend expert? Let’s collaborate.</li>
                  <li> Open to working with designers, developers, and startups.</li>
                </ul>
              </div>
              <div className="input">
                <div className="select-class">
                </div>
                <div className="icon pb-5">
                  <a href=""><i className="fa-brands fa-linkedin"></i></a>
                  <a href=""><i className="fa-brands fa-twitter"></i></a>
                  <a href=""><i className="fa-brands fa-tiktok"></i></a>
                  <a href=""><i className="fa-brands fa-youtube"></i></a>
                  <a href=""><i className="fa-brands fa-instagram"></i></a>
                  <a href=""><i className="fa-brands fa-facebook"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>



      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      />

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        defer
      ></script>



    </>
  )
}



export default App
