package com.cmchallenge.cmchallenge.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table
@NamedNativeQuery(
        name = "find_jobApp",
        query ="select ID_JOBAPP, JA.ID_JOB, JA.ID_STATUS, JA.ID_CANDIDATE, DATE_APPLICATION, J.NAME JOBNAME, C.NAME CANDIDATENAME, C.LASTNAME CANDIDATELASTNAME, J.DESCRIPTION JOBDESCRIPTION, S.DESCRIPTION STATUSDESC, C.CV CV\n" +
                "from JOB_APPLICATION JA\n" +
                "INNER JOIN JOB J ON JA.ID_JOB=J.ID_JOB\n" +
                "INNER JOIN STATUS S ON JA.ID_STATUS=S.ID_STATUS\n" +
                "INNER JOIN CANDIDATE C ON JA.ID_CANDIDATE=C.ID_CANDIDATE",
        resultSetMapping = "jobApp"
)
@SqlResultSetMapping(
        name = "jobApp",
        classes = @ConstructorResult(
                targetClass = JobAppView.class,
                columns = {
                        @ColumnResult(name = "id_jobapp", type = Integer.class),
                        @ColumnResult(name = "id_candidate", type = Integer.class),
                        @ColumnResult(name = "id_job", type = Integer.class),
                        @ColumnResult(name = "id_status", type = Integer.class),
                        @ColumnResult(name = "date_application", type = Date.class),
                        @ColumnResult(name = "jobName", type = String.class),
                        @ColumnResult(name = "jobDescription", type = String.class),
                        @ColumnResult(name = "candidateName", type = String.class),
                        @ColumnResult(name = "candidateLastname", type = String.class),
                        @ColumnResult(name = "statusDesc", type = String.class),
                        @ColumnResult(name = "cv", type = String.class)
                }
        )
)
public class JobApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Integer id_jobapp;
    private Integer id_candidate;
    private Integer id_job;
    private Integer id_status;
    private Date date_application;

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

    public JobApplication(){}
}
