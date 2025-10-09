---
layout: page
permalink: /service/
title: service
description: Teaching, mentoring, and community service experience
nav: true
nav_order: 4
---

<div class="service-experience">
  <div class="service-item">
    <div class="service-header">
      <h3>Teaching Assistant</h3>
      <div class="service-org">
        <a href="https://engineering.tamu.edu/">College of Engineering</a> & <a href="https://stat.tamu.edu/">Department of Statistics</a>, Texas A&M University
      </div>
    </div>
    <div class="service-periods">
      <div class="period">
        <span class="period-date">Aug 2021 – Dec 2021</span>
        <div class="period-content">
          <p>I was Teaching Assistant for <strong>STAT 212 Principles of Statistics II</strong>, serving 200+ students from two classes. I conducted weekly recitation sessions and office hours, graded quizzes and exams, and covered statistical fundamentals including experimental design, multiple regression, non-parametric methods, and contingency analysis.</p>
        </div>
      </div>
      <div class="period">
        <span class="period-date">Jan 2019 – May 2019</span>
        <div class="period-content">
          <p>I served as a Supplemental Instructor for <strong>ENGR 102: Engineering Lab I – Computation</strong>. I designed customized worksheets, led weekly recitation and lab sessions, and hosted exam reviews. The course focused on software design, debugging, and an introduction to engineering disciplines and professional practices.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="service-item">
    <div class="service-header">
      <h3>Camp Instructor</h3>
      <div class="service-org">
        <a href="https://www.idtech.com/">iD Tech Camp</a>
      </div>
    </div>
    <div class="service-periods">
      <div class="period">
        <span class="period-date">May 2019 – Aug 2019</span>
        <div class="period-content">
          <p>I designed and delivered <strong>Machine Learning & AI</strong> curriculum for 50+ high school students at Rice University. I covered basics for supervised learning, reinforcement learning, and convolutional neural networks through hands-on projects. </p>
        </div>
      </div>
      <div class="period">
        <span class="period-date">May 2020 – Aug 2020</span>
        <div class="period-content">
          <p>I taught Python, <strong>data structures & algorithms</strong>, and computer fundamentals through online instruction during the COVID-19 pandemic. I managed the classroom and leveraged virtual learning tools to sustain student engagement.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="service-item">
    <div class="service-header">
      <h3>Student Volunteer</h3>
      <div class="service-org">
        <a href="https://engineering.tamu.edu/">Engineering Serving Community, Texas A&M University</a>
      </div>
    </div>
    <div class="service-periods">
      <div class="period">
        <span class="period-date">Aug 2018 – Dec 2018</span>
        <div class="period-content">
          <p>We collaborated with multidisciplinary teams to develop engineering solutions that support <strong>local charities</strong> and improve access to community services. For example, I helped modernize the graphical user interface of a local food bank management system and enhanced an academic planning platform to better serve incoming students.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="service-item">
    <div class="service-header">
      <h3>Sunday School Instructor</h3>
      <div class="service-org">
        <a href="https://www.fbcchome.org/FBCC/Page/114">Fort Bend Community Church</a>
      </div>
    </div>
    <div class="service-periods">
      <div class="period">
        <span class="period-date">Fall 2016 – Spring 2018</span>
        <div class="period-content">
          <p>I have facilitated weekly <strong>fellowship programs</strong> for international students, which provided cultural integration support and mentorship to help them navigate life in the United States. I also designed and delivered age-appropriate Bible lessons for elementary students, incorporating interactive activities and educational games. </p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.service-experience {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.service-item {
  margin-bottom: 3rem;
  border-left: 3px solid var(--global-theme-color);
  padding-left: 1.5rem;
  position: relative;
}

.service-item:before {
  content: '';
  position: absolute;
  left: -6px;
  top: 0;
  width: 9px;
  height: 9px;
  background: var(--global-theme-color);
  border-radius: 50%;
}

.service-header h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: var(--global-text-color);
}

.service-org {
  margin-bottom: 1rem;
}

.service-org a {
  color: var(--global-theme-color);
  text-decoration: none;
  font-weight: 500;
}

.service-org a:hover {
  text-decoration: underline;
}

.service-periods {
  margin-left: 1rem;
}

.period {
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--global-border-color);
}

.period:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.period-date {
  display: inline-block;
  background: var(--global-bg-color);
  color: var(--global-theme-color);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 0.8rem;
  border: 1px solid var(--global-theme-color);
}

.period-content p {
  margin: 0;
  line-height: 1.6;
  color: var(--global-text-color);
}

.period-content strong {
  color: var(--global-theme-color);
  font-weight: 600;
}

@media (max-width: 768px) {
  .service-experience {
    padding: 1rem 0.5rem;
  }
  
  .service-item {
    padding-left: 1rem;
  }
  
  .service-periods {
    margin-left: 0.5rem;
  }
}
</style>

