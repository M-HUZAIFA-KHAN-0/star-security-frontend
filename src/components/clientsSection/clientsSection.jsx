"use client";
import styles from "./clientsSection.module.css";

export default function ClientsSection({ clients }) {
  return (
    <section className={`section-padding ${styles.sectionBg} mt-5`}>
      <div className="container">
        <div className="row">
          {clients.map((client, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
              <div className={`card h-100 ${styles.cardHover}`}>
                <div className="card-body">
                  {/* Icon */}
                  <div className={`${styles.iconBox} mb-3`}>
                    <i className="bi bi-building color-primary"></i>
                  </div>

                  {/* Name */}
                  <h3 className="h5 fw-semibold mb-2">{client.name}</h3>

                  {/* Sector */}
                  <p className="fw-medium mb-2">{client.sector}</p>

                  {/* Services */}
                  <p className="text-muted mb-2">{client.services}</p>

                  {/* Staff Info */}
                  <div className="d-flex align-items-center text-muted small">
                    <i className="bi bi-people me-2 color-primary"></i>
                    <span>{client.staff} Staff Assigned</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
