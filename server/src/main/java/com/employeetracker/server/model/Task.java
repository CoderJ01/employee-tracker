package com.employeetracker.server.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "date_created", updatable = false)
    private LocalDateTime date_created;

    @Column(name= "date_updated")
    private  LocalDateTime date_updated;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "employer_id")
    private Employer employer;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee;

    /*
    The column below enables the retrieval of the employee that a task belongs to
    The proper way to achieve this would be to remove the @JsonIgnore annotation over
    the column above. However, if said annotation is removed, a task cannot be created.
    The following error message is displayed: Cannot call sendError() after the
    response has been committed
    */
    @JoinColumn(name = "employee_name")
    private String employee_name;

    public Task () {

    }

    public Task(String title, String description) {
        this.title = title;
        this.description = description;
        this.date_created = LocalDateTime.now();
    }

    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public LocalDateTime getDateCreated() {
        return date_created;
    }

    public LocalDateTime getDateUpdated() {
        return date_updated;
    }

    public Employer getEmployer() {
        return employer;
    }

    public Employee getEmployee() {
        return employee;
    }

    public String getEmployeeName() {
        return employee_name;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setDateCreated(LocalDateTime date_created) {
        this.date_created = date_created;
    }

    public void setDateUpdated(LocalDateTime date_updated) {
        this.date_updated = date_updated;
    }

    public void setEmployer(Employer employer) {
        this.employer = employer;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public void setEmployeeName(String employee_name) { this.employee_name = employee_name; }
}
