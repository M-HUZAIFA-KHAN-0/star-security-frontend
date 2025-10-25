"use client";
import { useState } from "react";
import styles from "./jobSection.module.css"; // manual CSS import

export default function JobSection({ jobs = [], regions = [], topHeading }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const filteredJobs = jobs.filter((job) =>
    (selectedLocation === "all" || job.location === selectedLocation) &&
    (searchTerm === "" ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section className="section-padding bg-muted py-5">
      <div className="container">
        <div className="text-center">
            <div
              className="bg-primary mb-3 mx-auto"
              style={{ width: "60px", height: "3px" }}
            />
            <h1 className="display-5 mb-5">{topHeading}</h1>
        </div>

        {/* Search and Filter */}
        <div className="row g-3 mb-4 justify-content-center">
          <div className="col-12 col-md-8">
            <div className="position-relative">
              <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 primary-hover"></i>
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`form-control ps-5 ${styles.searchBox}`}
              />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className={`form-select ${styles.searchBox}`}
            >
              <option value="all">All Locations</option>
              {regions.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Job Listings */}
        <div className="d-flex flex-column gap-4">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className={`card border rounded p-4 shadow-sm ${styles.jobCard}`}
            >
              <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between">
                <div className="flex-grow-1">
                  <h3 className="h5 fw-semibold text-dark mb-2">{job.title}</h3>
                  <p className="text-muted mb-3">{job.description}</p>

                  <div className="d-flex flex-wrap gap-3 text-muted small mb-3">
                    <div className="d-flex align-items-center gap-1">
                      <i className="bi bi-geo-alt primary-hover"></i>
                      <span>{job.location}</span>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <i className="bi bi-clock primary-hover"></i>
                      <span>{job.type}</span>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <i className="bi bi-cash-coin primary-hover"></i>
                      <span>{job.salary}</span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <h4 className="fw-medium mb-2">Requirements:</h4>
                    <ul className="list-unstyled ms-3">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="mb-1">
                          • {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                
                  <div className="small text-muted">Posted {job.posted}</div>
                  <div className={`${styles.leftBorder} border-start border-5 shadow-sm p-3 mt-2 bg-body rounded`} >
                
                    <span className="fw-semibold text-center"><i className="bi bi-envelope-fill primary-hover"></i><span className="fw-light"> Send your resume to:</span> starsecurity@gmail.com </span>

                  </div>
          
                </div>

                {/* <div className="mt-3 mt-lg-0 ms-lg-4">
                  <a href="/contact" className={styles.cta}>Apply Now</a>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-5">
            <p className="text-muted fs-5">
              No jobs found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
