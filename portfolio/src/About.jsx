import './css/About.css';

export default function About() {
  return (
    <div className="sec-about" id="about">
      <h2>About Me</h2>
      <div className="sec-about__body">
        <div className="sec-about__line" />
        <p>
          I am a Big Data and Data Science specialist passionate about
          turning data into meaningful insights and practical solutions. My
          experience covers Data Analysis, Machine Learning, ETL, Business
          Intelligence, Data Architecture, and Data Warehousing, as well as
          GIS and geolocation for working with and visualizing spatial data.
          <br /><br />
          I also have experience in web development, building interactive
          applications and data-driven interfaces that connect data
          processing, Machine Learning models, and user-friendly
          experiences. I enjoy working across the different stages of a
          project, from data collection and transformation to analysis,
          modeling, visualization, and application development.
          <br /><br />
          My goal is to build complete and intelligent data solutions that
          combine data science, modern data architectures, and web
          technologies to solve real-world problems!
        </p>
      </div>
    </div>
  );
}