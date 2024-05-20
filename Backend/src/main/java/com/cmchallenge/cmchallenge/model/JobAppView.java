package com.cmchallenge.cmchallenge.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table
public class JobAppView {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Integer id_jobapp;
    private Integer id_candidate;
    private Integer id_job;
    private Integer id_status;
    private Date date_application;
    private String jobName;
    private String jobDescription;
    private String candidateName;
    private String candidateLastname;
    private String statusDesc;
    private String cv;

    public String getJobDescription() {
        return jobDescription;
    }

    public void setJobDescription(String jobDescription) {
        this.jobDescription = jobDescription;
    }

    public String getCv() {
        return cv;
    }

    public void setCv(String cv) {
        this.cv = cv;
    }

    public Integer getId_jobapp() {
        return id_jobapp;
    }

    public void setId_jobapp(Integer id_jobapp) {
        this.id_jobapp = id_jobapp;
    }

    public Integer getId_candidate() {
        return id_candidate;
    }

    public void setId_candidate(Integer id_candidate) {
        this.id_candidate = id_candidate;
    }

    public Integer getId_job() {
        return id_job;
    }

    public void setId_job(Integer id_job) {
        this.id_job = id_job;
    }

    public Integer getId_status() {
        return id_status;
    }

    public void setId_status(Integer id_status) {
        this.id_status = id_status;
    }

    public Date getDate_application() {
        return date_application;
    }

    public void setDate_application(Date date_application) {
        this.date_application = date_application;
    }

    public String getJobName() {
        return jobName;
    }

    public void setJobName(String jobName) {
        this.jobName = jobName;
    }

    public String getJobDesc() {
        return jobDescription;
    }

    public void setJobDesc(String jobDescription) {
        this.jobDescription = jobDescription;
    }

    public String getCandidateName() {
        return candidateName;
    }

    public void setCandidateName(String candidateName) {
        this.candidateName = candidateName;
    }

    public String getCandidateLastname() {
        return candidateLastname;
    }

    public void setCandidateLastname(String candidateLastname) {
        this.candidateLastname = candidateLastname;
    }

    public String getStatusDesc() {
        return statusDesc;
    }

    public void setStatusDesc(String statusDesc) {
        this.statusDesc = statusDesc;
    }

    public JobAppView(){}
}
