package com.cmchallenge.cmchallenge.inter.service;

import com.cmchallenge.cmchallenge.inter.CandidateInterface;
import com.cmchallenge.cmchallenge.model.Candidate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CandidateSrv {
    @Autowired
    CandidateInterface candidateInterface;
    public List<Candidate> getAllCandidate(){
        List<Candidate> candidateList = new ArrayList<>();
        candidateInterface.findAll().forEach(candidate -> candidateList.add(candidate));
        return candidateList;
    }
    public Candidate getCandidateById(Integer id){
        return candidateInterface.findById(id).get();
    }
    public Integer saveCandidate(Candidate candidate) {
        return candidateInterface.save(candidate).getId_candidate();
    }
}
