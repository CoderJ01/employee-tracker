package com.employeetracker.server.controller;

import java.time.LocalDateTime;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import com.employeetracker.server.model.Employer;
import com.employeetracker.server.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.employeetracker.server.exception.ResourceNotFoundException;
import com.employeetracker.server.model.Employee;
import com.employeetracker.server.repository.EmployerRepository;

import com.employeetracker.server.generate.CreateUsername;

@CrossOrigin(origins = {"http://localhost:5173", "https://employee-tracker-u47j.onrender.com"})
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
    private EmployerRepository employerRepository;

    @PostMapping("/employees/{employer_id}")
    public Employee createEmployee(@PathVariable Long employer_id,
                                   @RequestBody Employee employee) {
        Employer employer = employerRepository.findById(employer_id)
                .orElseThrow(() -> new ResourceNotFoundException("Employer with " + " id " + employer_id + " does not exist"));

        employee.setUsername(CreateUsername.setUsername(employee.getFirstName(), employee.getLastName()));
        employee.setDateCreated(LocalDateTime.now());
        employee.setEmployer(employer);

        return employeeRepository.save(employee);
    }

    @GetMapping("/employees/{employer_id}")
    public Set<Employee> getAllEmployees(@PathVariable Long employer_id) {
        Employer employer = employerRepository.findById(employer_id)
                .orElseThrow(() -> new ResourceNotFoundException("Employer with " + " id " + employer_id + " does not exist"));
        return  employer.getEmployees();
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,
                                                   @RequestBody Employee employeeDetails) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee with " + " id " + id + " does not exist"));
        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setPassword(employeeDetails.getPassword());
        employee.setEmail(employeeDetails.getEmail());
        employee.setPhoneNumber(employeeDetails.getPhoneNumber());
        employee.setRole(employeeDetails.getRole());
        employee.setDepartment(employeeDetails.getDepartment());
        employee.setSalary(employeeDetails.getSalary());
        employee.setDateUpdated(LocalDateTime.now());

        Employee updatedEmployee = employeeRepository.save(employee);
        return ResponseEntity.ok(updatedEmployee);
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee with " + " id " + id + " does not exist"));

        employeeRepository.delete(employee);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
