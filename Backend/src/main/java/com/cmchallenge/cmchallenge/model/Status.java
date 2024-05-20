package com.cmchallenge.cmchallenge.model;


import jakarta.persistence.*;

@Entity
@Table
public class Status {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Integer id_status;
    private String description;

    public Integer getId_status() {
        return id_status;
    }

    public String getDescription() {
        return description;
    }

    public void setId_status(Integer id_status) {
        this.id_status = id_status;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Status() {
    }
}
