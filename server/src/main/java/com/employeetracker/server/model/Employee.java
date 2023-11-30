package com.employeetracker.server.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "first_name")
    private String first_name;

    @Column(name = "last_name")
    private String last_name;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "phone_number", unique = true)
    private String phone_number;

    @Column(name = "password")
    private String password;

    @Column(name = "username", unique = true)
    private String username;

    @Column(name = "role")
    private String role;

    @Column(name = "department")
    private String department;

    @Column(name = "salary")
    private int salary;

    @Column(name = "random_string")
    private String random_string;

    @Column(name = "date_created", updatable = false)
    private LocalDateTime date_created;

    @Column(name = "date_updated")
    private  LocalDateTime date_updated;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "employer_id")
    private Employer employer;

    @OneToMany(mappedBy = "employee")
    private Set<Task> tasks = new HashSet<>();

    public Employee() {

    }

    public Employee(String first_name,
                    String last_name,
                    String email,
                    String phone_number,
                    String username,
                    String password,
                    String role,
                    String department,
                    int salary,
                    String random_string,
                    Employer employer) {
        super();
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone_number = phone_number;
        this.username = username;
        this.password = password;
        this.role = role;
        this.department = department;
        this.salary = salary;
        this.random_string = random_string;
        this.date_created = LocalDateTime.now();
        this.employer = employer;
    }

    public long getId() {
        return id;
    }

    public String getFirstName() {
        return first_name;
    }

    public String getLastName() {
        return last_name;
    }

    public String getEmail() {
        return email;
    }

    public String getPhoneNumber() {
        return phone_number;
    }

    public String getUsername() { return username; }

    public String getPassword() {
        return password;
    }

    public String getRole() {
        return role;
    }

    public String getDepartment() { return department; }

    public int getSalary() { return salary; }

    public String getRandomString() {
        return random_string;
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

    public Set<Task> getTasks() { return tasks; }

    public void setId(long id) {
        this.id = id;
    }

    public void setFirstName(String first_name) {
        this.first_name = first_name;
    }

    public void setLastName(String last_name) {
        this.last_name = last_name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhoneNumber(String phone_number) {
        this.phone_number = phone_number;
    }

    public void setUsername(String username) { this.username = username; }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setDepartment(String department) { this.department = department; }

    public void setSalary(int salary) { this.salary = salary; }

    public void setRandomString(String random_string) {
        this.random_string = random_string;
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
}
