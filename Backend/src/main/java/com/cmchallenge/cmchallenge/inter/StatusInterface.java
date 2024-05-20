package com.cmchallenge.cmchallenge.inter;

import com.cmchallenge.cmchallenge.model.Status;
import org.springframework.data.repository.CrudRepository;

public interface StatusInterface extends CrudRepository<Status, Integer> {
}
