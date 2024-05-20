package com.cmchallenge.cmchallenge.inter;

import com.cmchallenge.cmchallenge.model.Candidate;
import org.springframework.data.repository.CrudRepository;

public interface CandidateInterface extends CrudRepository<Candidate, Integer> {
}
