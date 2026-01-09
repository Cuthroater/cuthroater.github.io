import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="resume">
    <header class="header">
      <h1>Abdul Rahman</h1>
      <p class="subtitle">Software Developer</p>
      <div class="contact-info">
        <a href="mailto:contact@abdulrahman.dev">contact@abdulrahman.dev</a>
        <span class="separator">|</span>
        <a href="https://github.com/Cuthroater" target="_blank">GitHub</a>
        <span class="separator">|</span>
        <a href="https://linkedin.com/in/abdulrahman" target="_blank">LinkedIn</a>
      </div>
    </header>

    <section class="section">
      <h2>About Me</h2>
      <p>
        Passionate software developer with expertise in web technologies and modern development practices.
        Experienced in building scalable applications and working with diverse technology stacks.
      </p>
    </section>

    <section class="section">
      <h2>Skills</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <h3>Frontend</h3>
          <ul>
            <li>HTML5, CSS3, JavaScript</li>
            <li>React, Vue.js</li>
            <li>Responsive Design</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Backend</h3>
          <ul>
            <li>Node.js, Python</li>
            <li>RESTful APIs</li>
            <li>Database Design</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Tools & Others</h3>
          <ul>
            <li>Git, GitHub</li>
            <li>CI/CD</li>
            <li>Agile Methodologies</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Experience</h2>
      <div class="experience-item">
        <div class="experience-header">
          <h3>Software Developer</h3>
          <span class="date">2022 - Present</span>
        </div>
        <p class="company">Tech Company</p>
        <ul>
          <li>Developed and maintained web applications using modern frameworks</li>
          <li>Collaborated with cross-functional teams to deliver high-quality software</li>
          <li>Implemented best practices and coding standards</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2>Education</h2>
      <div class="education-item">
        <div class="experience-header">
          <h3>Bachelor of Science in Computer Science</h3>
          <span class="date">2018 - 2022</span>
        </div>
        <p class="company">University</p>
      </div>
    </section>

    <section class="section">
      <h2>Projects</h2>
      <div class="project-item">
        <h3>Personal Website</h3>
        <p>Built with Vite and vanilla JavaScript, showcasing modern web development practices.</p>
      </div>
    </section>

    <footer class="footer">
      <p>© ${new Date().getFullYear()} Abdul Rahman. Built with Vite.</p>
    </footer>
  </div>
`
