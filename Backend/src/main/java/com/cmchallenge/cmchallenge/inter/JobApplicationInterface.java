package com.cmchallenge.cmchallenge.inter;

import com.cmchallenge.cmchallenge.model.JobAppView;
import com.cmchallenge.cmchallenge.model.JobApplication;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface JobApplicationInterface extends CrudRepository<JobApplication, Integer> {
    @Query(nativeQuery = true, name = "find_jobApp")
    public List<JobAppView> getjobApp();
}
