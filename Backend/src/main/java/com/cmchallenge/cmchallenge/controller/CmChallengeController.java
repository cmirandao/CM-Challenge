package com.cmchallenge.cmchallenge.controller;

import com.cmchallenge.cmchallenge.inter.service.CandidateSrv;
import com.cmchallenge.cmchallenge.inter.service.JobApplicationSrv;
import com.cmchallenge.cmchallenge.inter.service.JobSrv;
import com.cmchallenge.cmchallenge.inter.service.StatusSrv;
import com.cmchallenge.cmchallenge.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/challenge")
public class CmChallengeController {
    @Autowired
    StatusSrv statusService;
    @Autowired
    JobSrv jobService;
    @Autowired
    CandidateSrv candidateService;
    @Autowired
    JobApplicationSrv jobAppService;

    @GetMapping("/status")
    private List<Status> getAllStatus() {
        return statusService.getAllStatus();
    }
    @GetMapping("/job")
    private List<Job> getAllJob() {
        return jobService.getAllJob();
    }
    @GetMapping("/job/{id}")
    private ResponseEntity<Job> getJobById(@PathVariable("id") Integer id) {
        Job job = jobService.getJobById(id);
        if(job != null){
            return new ResponseEntity<>(job, HttpStatus.OK);
        }
        return new ResponseEntity<>(job, HttpStatus.NOT_ACCEPTABLE);
    }
    @PostMapping("/job/save")
    private ResponseEntity<String> saveJob(@RequestBody Job job){
        jobService.saveJob(job);
        return new ResponseEntity<>("Posicion guardada exitosamente", HttpStatus.OK);
    }
    @GetMapping("/candidate")
    private List<Candidate> getAllCandidate() {
        return candidateService.getAllCandidate();
    }
    @GetMapping("/candidate/{id}")
    private ResponseEntity<Candidate> getCandidateById(@PathVariable("id") Integer id) {
        Candidate candidate = candidateService.getCandidateById(id);
        if(candidate != null){
            return new ResponseEntity<>(candidate, HttpStatus.OK);
        }
        return new ResponseEntity<>(candidate, HttpStatus.NOT_ACCEPTABLE);
    }
    @PostMapping("/candidate/save")
    private ResponseEntity<Integer> saveCandidate(@RequestBody Candidate candidate){
        int candidateId = candidateService.saveCandidate(candidate);
        return new ResponseEntity<>(candidateId, HttpStatus.OK);
    }
    @GetMapping("/jobapplication")
    private List<JobApplication> getAllJobApp() {
        return jobAppService.getAllJobApp();
    }
    @GetMapping("/jobapplication/{id}")
    private ResponseEntity<JobApplication> getJobAppById(@PathVariable("id") Integer id) {
        JobApplication jobApp = jobAppService.getJobAppById(id);
        if(jobApp != null){
            return new ResponseEntity<>(jobApp, HttpStatus.OK);
        }
        return new ResponseEntity<>(jobApp, HttpStatus.NOT_ACCEPTABLE);
    }
    @PostMapping("/jobapplication/save")
    private ResponseEntity<String> saveJobApp(@RequestBody JobApplication jobApp){
        jobAppService.saveOrUpdateJobApp(jobApp);
        return new ResponseEntity<>("Postulacion guardada exitosamente", HttpStatus.OK);
    }
    @PutMapping("/jobapplication/save")
    private ResponseEntity<String> UpdateJobApp(@RequestBody JobApplication jobApp){
        jobAppService.saveOrUpdateJobApp(jobApp);
        return new ResponseEntity<>("Postulacion guardada exitosamente", HttpStatus.OK);
    }
    @GetMapping("/jobappview")
    private List<JobAppView> getAllJobAppView() {
        return jobAppService.getAllJobAppView();
    }
}
