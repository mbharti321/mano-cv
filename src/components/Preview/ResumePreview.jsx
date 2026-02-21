import React from "react";
import "./ResumePreview.css";

export default function ResumePreview({ resume, custom }) {
  const px = (n) => n * 1.3333;
  const mm = (n) => `${n * 3.7795}px`;
  const C = custom;

  // set css variables for dynamic customization values
  const rootStyle = {
    fontFamily: `${C.fontFamily}, serif`,
    "--font-size": px(C.fontSize) + "px",
    "--line-height": C.lineHeight,
    "--padding": `${mm(C.marginY)} ${mm(C.marginX)}`,
    "--color": C.bulletColor,
    "--name-size": px(C.nameSize) + "px",
    "--name-color": C.nameColor,
    "--title-size": px(C.titleSize) + "px",
    "--date-color": C.dateColor,
    "--link-color": C.linkColor,
    "--accent-color": C.accentColor,
    "--section-line-color": C.sectionLineColor,
    "--heading-size": px(C.headingSize) + "px",
    "--heading-weight": C.headingWeight,
  };

  const p = resume.personal;

  return (
    <div className="resume-paper" style={rootStyle}>
      {/* Header */}
      <div className="resume-header">
        <div className="resume-name">
          {p.name} {p.title && <span className="resume-title">{p.title}</span>}
        </div>

        <div className="resume-contact">
          {p.email && (
            <span>
              <a className="resume-link" href={`mailto:${p.email}`}>
                {p.email}
              </a>{" "}
            </span>
          )}
          {p.phone && (
            <span>
              <a
                className="resume-link"
                href={`tel:${p.phone.replace(/\s+/g, "")}`}
              >
                {p.phone}
              </a>{" "}
            </span>
          )}
          {p.location && <span>{p.location}</span>}
          {p.portfolio && (
            <span>
              <a className="resume-link" href={p.portfolio}>
                {p.portfolio}
              </a>
            </span>
          )}

          <div className="urls">
            {p.links
              .filter((l) => l.visible && l.text)
              .map((l) => (
                <span key={l.id}>
                  {l.url ? (
                    <a className="resume-link" href={l.url}>
                      {l.text}{" "}
                    </a>
                  ) : (
                    l.text
                  )}
                </span>
              ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      {resume.sections
        .filter((s) => s.visible)
        .map((s) => (
          <div key={s.id} className="section">
            <div className="section-title">{s.title}</div>
            <div className="section-rule" />
            <SectionPreview sec={s} custom={C} px={px} />
          </div>
        ))}
    </div>
  );
}

function SectionPreview({ sec }) {
  if (sec.type === "text") return <div className="sec-text">{sec.content}</div>;

  if (sec.type === "skills")
    return (
      <div className="sec-skills">
        <ul className="skill-list">
          {sec.items
            .filter((i) => i.visible)
            .map((i) => (
              <li key={i.id} className="skill-category">
                <span className="skill-label">{i.label}</span> — {i.value}
              </li>
            ))}
        </ul>
      </div>
    );

  if (sec.type === "experience")
    return (
      <div className="sec-experience">
        {sec.items
          .filter((i) => i.visible)
          .map((i) => (
            <div key={i.id} className="exp-item">
              <div className="exp-header">
                <div>
                  <span className="exp-title">{i.title}</span>
                  {i.company && (
                    <span className="exp-company">
                      ,{" "}
                      {i.companyUrl ? (
                        <a className="resume-link" href={i.companyUrl}>
                          {i.company}
                        </a>
                      ) : (
                        i.company
                      )}
                    </span>
                  )}
                </div>
                <span className="exp-dates">
                  {i.startDate}
                  {i.endDate ? ` – ${i.endDate}` : ""}
                  {i.location ? ` | ${i.location}` : ""}
                </span>
              </div>
              <ul className="exp-bullets">
                {i.bullets
                  .filter((b) => b.visible)
                  .map((b) => (
                    <li key={b.id}>{b.text}</li>
                  ))}
              </ul>
            </div>
          ))}
      </div>
    );

  if (sec.type === "projects")
    return (
      <div className="sec-projects">
        {sec.items
          .filter((i) => i.visible)
          .map((i) => (
            <div key={i.id} className="proj-item">
              <div className="proj-header">
                <span className="proj-title">
                  {i.url ? (
                    <a className="resume-link" href={i.url}>
                      {i.title}
                    </a>
                  ) : (
                    i.title
                  )}
                </span>
                {i.subtitle && (
                  <span className="proj-subtitle">, {i.subtitle}</span>
                )}
              </div>
              <ul className="proj-bullets">
                {i.bullets
                  .filter((b) => b.visible)
                  .map((b) => (
                    <li key={b.id}>{b.text}</li>
                  ))}
              </ul>
            </div>
          ))}
      </div>
    );

  if (sec.type === "education")
    return (
      <div className="sec-education">
        {sec.items
          .filter((i) => i.visible)
          .map((i) => (
            <div key={i.id} className="edu-item">
              <div className="edu-header">
                <div>
                  <div className="edu-item-header">
                    <div>
                      <span className="edu-degree">{i.degree}</span>
                      {i.school && (
                        <span className="edu-school">
                          ,{" "}
                          {i.schoolUrl ? (
                            <a className="resume-link" href={i.schoolUrl}>
                              {i.school}
                            </a>
                          ) : (
                            i.school
                          )}
                        </span>
                      )}
                    </div>

                    <div>
                      <span className="edu-dates">
                        {i.startDate}
                        {i.endDate ? ` – ${i.endDate}` : ""}
                        {i.location ? ` | ${i.location}` : ""}
                      </span>
                    </div>
                  </div>
                  {i.description && (
                    <div className="edu-desc">{i.description}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    );

  if (sec.type === "publications")
    return (
      <div className="sec-publications">
        {sec.items
          .filter((i) => i.visible)
          .map((i) => (
            <div key={i.id} className="pub-item">
              <span className="pub-title">
                {i.url ? (
                  <a className="resume-link" href={i.url}>
                    {i.title}
                  </a>
                ) : (
                  i.title
                )}
              </span>
              {i.publisher && (
                <span className="pub-meta"> — {i.publisher}</span>
              )}
              {i.date && <span className="pub-meta">, {i.date}</span>}
            </div>
          ))}
      </div>
    );

  if (sec.type === "list")
    return (
      <div className="sec-list">
        {sec.items
          .filter((i) => i.visible)
          .map((i) => (
            <div key={i.id} className="list-item">
              •{" "}
              {i.url ? (
                <a className="resume-link" href={i.url}>
                  {i.text}
                </a>
              ) : (
                i.text
              )}
              {i.source && <span className="list-source"> ({i.source})</span>}
            </div>
          ))}
      </div>
    );

  return <div className="sec-unknown">[{sec.type} section]</div>;
}
