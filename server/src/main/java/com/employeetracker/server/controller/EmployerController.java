package com.employeetracker.server.controller;

import java.time.LocalDateTime;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.employeetracker.server.exception.ResourceNotFoundException;
import com.employeetracker.server.model.Employer;
import com.employeetracker.server.repository.EmployerRepository;

import com.employeetracker.server.generate.CreateUsername;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class EmployerController {
    @Autowired
    private  EmployerRepository employerRepository;

    @PostMapping("/employers")
    public Employer createEmployer(@RequestBody Employer employer) {
        int count = CreateUsername.checkDuplicateNames(getAllEmployers(), employer);
        employer.setUsername(CreateUsername.setUsername(employer.getFirstName(), employer.getLastName(), count));
        employer.setDateCreated(LocalDateTime.now());
        return employerRepository.save(employer);
    }

    @GetMapping("/employers")
    public List<Employer> getAllEmployers() {
        return employerRepository.findAll();
    }

    @GetMapping("/employers/{id}")
    public ResponseEntity<Employer> getEmployerById(@PathVariable Long id) {
        Employer employer = employerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employer with " + " id " + id + " does not exist"));
        return ResponseEntity.ok(employer);
    }

    @PutMapping("/employers/{id}")
    public ResponseEntity<Employer> updateEmployer(@PathVariable Long id, @RequestBody Employer employerDetails) {
        Employer employer = employerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employer with " + " id " + id + " does not exist"));

        employer.setFirstName(employerDetails.getFirstName());
        employer.setLastName(employerDetails.getLastName());
        employer.setEmail(employerDetails.getEmail());
        employer.setPhoneNumber(employerDetails.getPhoneNumber());
        employer.setCompanyName(employerDetails.getCompanyName());
        employer.setRole(employerDetails.getRole());
        employer.setPassword(employerDetails.getPassword());
        employer.setDateUpdated(LocalDateTime.now());

        Employer updatedEmployer = employerRepository.save(employer);
        return ResponseEntity.ok(updatedEmployer);
    }

    @DeleteMapping("/employers/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployer(@PathVariable Long id){
        Employer employer = employerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employer with " + " id " + id + " does not exist"));

        employerRepository.delete(employer);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
