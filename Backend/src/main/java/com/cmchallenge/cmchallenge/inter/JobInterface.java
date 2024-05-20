package com.cmchallenge.cmchallenge.inter;

import com.cmchallenge.cmchallenge.model.Job;
import org.springframework.data.repository.CrudRepository;

public interface JobInterface extends CrudRepository<Job, Integer> {
}
