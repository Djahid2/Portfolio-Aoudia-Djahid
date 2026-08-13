import './css/Project.css';
import Bank1 from './assets/Bank1.png';
import bank2 from './assets/bank2.png';
import eco1 from './assets/eco1.png';
import eco2 from './assets/eco2.png';
import Group231 from './assets/Group 23-1.png';
import Group232 from './assets/Group 23-2.png';
import Group23 from './assets/Group 23.png';
import med1 from './assets/med1.png';
import med2 from './assets/med2.png';
import scrab1 from './assets/scrab1.png';
import scrab2 from './assets/scrab2.png';
import scrab3 from './assets/scrab3.png';

export default function Project() {


const projects   = [
{titel: "Budget Prediction MLOps Platform", description: "An end-to-end MLOps platform that forecasts bank budget lines (income, expenses, provisions, regularisations) and flags impayé (default) risk. It trains a family of walk-forward LightGBM / XGBoost models on an Oracle data warehouse, tracks experiments with MLflow, serves forecasts and analytics through a FastAPI backend, and visualises them in a React dashboard.", images: [Bank1, bank2],tools: ["Python", "FastAPI", "React", "MLflow", "Mlops","Docker" , "Kubernetes" , "Oracle", "ETL"] , etat : "privet" },
{titel : "Mobile Healthcare Application ", description: "A mobile healthcare application developed with Flutter, PHP, and MySQL, designed to simplify access to healthcare services. It enables users to find nearby doctors and pharmacies, search for medications, and book medical appointments online. Doctors can manage their clinics, working hours, and appointment requests through a dedicated interface.", images: [Group231, Group232, Group23],tools: ["Flutter", "PHP", "MySQL"],etat : "privet"},
{titel : "Scrapping application about Fraud Detection with Big Data, and Machine Learning" ,description:"A full-stack application combining web scraping, Big Data, and Machine Learning to collect and analyze data for fraud detection. Built with Django and React.js, the platform automates data collection and provides an interactive interface for exploring and visualizing the results. The project demonstrates the integration of data engineering, machine learning, and web technologies into an end-to-end solution.", images: [scrab1, scrab2, scrab3],tools: ["Python", "Django", "React"],etat : "https://github.com/Djahid2/Scraping-project-about-Fraud-Detection-with-Big-Data-and-Machine-Learning"},
{titel : "Medical records management application using a distributed, encrypted database system.",description : "This project focuses on developing a secure medical records management system using a locally distributed, encrypted database. The application ensures the confidentiality, integrity, and availability of sensitive patient information, aligning with modern data security standards in the healthcare sector.Additionally, the system includes a user authentication and access management feature, allowing authorized users to log in through the application interface with the necessary credentials, ensuring proper access control.",images: [med1, med2],tools: ["React", "node.js " ,"MongoDB","Docker", "Encryption"],etat : "https://github.com/Djahid2/medical-application-using-a-distributed-encrypted-database-system"},
{titel : "Waste Collection Points Analysis with MongoDB & ArcGIS",description : "This project focuses on analyzing the spatial distribution of urban waste collection points using GIS and NoSQL technologies. By integrating shapefiles with MongoDB (in JSON format), it enables geospatial queries to identify underserved zones based on collection point density. The data is visualized using mapping SDKs like Leaflet or Mapbox, and generated from real-world urban routing and zone boundaries.",images: [eco1, eco2],tools: ["MongoDB", "ArcGIS", "nodejs" ,"React"],etat : "https://github.com/Djahid2/Waste-Collection-Points-Analysis-with-MongoDB-ArcGIS"}
]
return (<>
<div className="sec-Project" id="projects">
    <h2>Projects</h2>
    <div className="project-list">
        {projects.map((project, index) => (
            <div className="project-item" key={index}  style={{ "--index": index }} >
                <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                <div className= "info_Project">
                    <h3>{project.titel}</h3>
                    <p>{project.description}</p>
                </div>
                <div className= "project-image">
                    {project.images.map((img, imgIndex) => (
                        <img
                            key={imgIndex}
                            src={img}
                            alt={`Project ${index + 1} Image ${imgIndex + 1}`}
                            style={{ "--i": imgIndex }}
                        />
                    ))}
                </div>
                <div className = "project_tool">
                    <div>
                    <h4>Tools Used: </h4>
                    <ul>
                        {project.tools.map((tool, toolIndex) => (
                            <li key={toolIndex}>{tool}</li>
                        ))}
                    </ul>
                    </div>
                    <div className="project-link">
                        {project.etat === "privet" ? (
                            <span className="project-link__private">Private Project</span> ) : (
                            <a href={project.etat} target="_blank" rel="noopener noreferrer" className="project-link__public">
                                View Project
                            </a>
                        )}
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>

</>)
}