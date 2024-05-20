package com.cmchallenge.cmchallenge.inter.service;

import com.cmchallenge.cmchallenge.inter.JobApplicationInterface;
import com.cmchallenge.cmchallenge.model.JobAppView;
import com.cmchallenge.cmchallenge.model.JobApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class JobApplicationSrv {
    @Autowired
    JobApplicationInterface jobAppInter;
    public List<JobApplication> getAllJobApp(){
        List<JobApplication> jobAppList = new ArrayList<>();
        jobAppInter.findAll().forEach(job -> jobAppList.add(job));
        return jobAppList;
    }
    public JobApplication getJobAppById(Integer id){
        return jobAppInter.findById(id).get();
    }
    public void saveOrUpdateJobApp(JobApplication jobApp){
        jobApp.setDate_application(new Date());
        jobAppInter.save(jobApp);
    }
    public List<JobAppView> getAllJobAppView(){
        List<JobAppView> jobAppViewList = new ArrayList<>();
        jobAppInter.getjobApp().forEach(job -> jobAppViewList.add(job));
        return jobAppViewList;
    }
}
