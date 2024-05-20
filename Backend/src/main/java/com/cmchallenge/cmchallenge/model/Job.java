package com.cmchallenge.cmchallenge.model;

import jakarta.persistence.*;

@Entity
@Table
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Integer id_job;
    private String name;
    private String description;

    public Integer getId_job() {
        return id_job;
    }

    public void setId_job(Integer id_job) {
        this.id_job = id_job;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Job(){}
}
