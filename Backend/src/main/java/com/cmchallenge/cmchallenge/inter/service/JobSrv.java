package com.cmchallenge.cmchallenge.inter.service;

import com.cmchallenge.cmchallenge.inter.JobInterface;
import com.cmchallenge.cmchallenge.model.Job;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JobSrv {
    @Autowired
    JobInterface jobInter;
    public List<Job> getAllJob(){
        List<Job> jobList = new ArrayList<>();
        jobInter.findAll().forEach(job -> jobList.add(job));
        return jobList;
    }
    public Job getJobById(Integer id){
        return jobInter.findById(id).get();
    }
    public void saveJob(Job job){
        jobInter.save(job);
    }
}
