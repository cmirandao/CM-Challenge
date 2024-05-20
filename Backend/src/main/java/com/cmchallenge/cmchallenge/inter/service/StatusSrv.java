package com.cmchallenge.cmchallenge.inter.service;

import com.cmchallenge.cmchallenge.inter.StatusInterface;
import com.cmchallenge.cmchallenge.model.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StatusSrv {
    @Autowired
    StatusInterface statusInter;


    public List<Status> getAllStatus(){
        List<Status> statusList = new ArrayList<>();
        statusInter.findAll().forEach(status -> statusList.add(status));
        return statusList;
    }
}
