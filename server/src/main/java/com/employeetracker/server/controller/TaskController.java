package com.employeetracker.server.controller;

import com.employeetracker.server.exception.ResourceNotFoundException;
import com.employeetracker.server.model.Employee;
import com.employeetracker.server.model.Employer;
import com.employeetracker.server.model.Task;
import com.employeetracker.server.repository.EmployeeRepository;
import com.employeetracker.server.repository.EmployerRepository;
import com.employeetracker.server.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/v1")
public class TaskController {
    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private EmployerRepository employerRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    @PostMapping("/tasks/{employer_id}/{employee_id}")
    public Task createTask(@PathVariable Long employer_id,
                           @PathVariable Long employee_id,
                           @RequestBody Task task) {
        Employer employer = employerRepository.findById(employer_id)
                .orElseThrow(() -> new ResourceNotFoundException("Employer with " + " id " + employer_id + " does not exist"));

        Employee employee = employeeRepository.findById(employee_id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee with " + " id " + employee_id + " does not exist"));

        task.setDateCreated(LocalDateTime.now());
        task.setEmployer(employer);
        task.setEmployee(employee);
        task.setEmployeeName(employee.getFirstName() + " " + employee.getLastName());

        return taskRepository.save(task);
    }

    @GetMapping("/tasks/employer/{employer_id}")
    public Set<Task> getTaskByEmployer(@PathVariable Long employer_id) {
        Employer employer = employerRepository.findById(employer_id)
                .orElseThrow(() -> new ResourceNotFoundException("Employer with " + " id " + employer_id + " does not exist"));
        return employer.getTasks();
    }

    @GetMapping("/tasks/employee/{employee_id}")
    public Set<Task> getTaskByEmployee(@PathVariable Long employee_id) {
        Employee employee = employeeRepository.findById(employee_id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee with " + " id " + employee_id + " does not exist"));
        return employee.getTasks();
    }

    @PutMapping("/tasks/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id,
                                           @RequestBody Task taskDetails) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task with " + " id " + id + " does not exist"));

        task.setTitle(taskDetails.getTitle());
        task.setDescription(taskDetails.getDescription());
        task.setDateUpdated(LocalDateTime.now());

        Task updatedTask = taskRepository.save(task);
        return ResponseEntity.ok(updatedTask);
    }

    @DeleteMapping("/tasks/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteTask(@PathVariable Long id){
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task with " + " id " + id + " does not exist"));

        taskRepository.delete(task);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
