package com.employeetracker.server.model;

import java.util.*;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "employers")
public class Employer {
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

    @Column(name = "username", unique = true)
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "company_name")
    private String company_name;

    @Column(name = "role")
    private String role;

    @Column(name = "session_cookie")
    private String session_cookie;

    @Column(name = "date_created", updatable = false)
    private LocalDateTime date_created;

    @Column(name= "date_updated")
    private  LocalDateTime date_updated;

    @OneToMany(mappedBy = "employer")
    private Set<Employee> employees = new HashSet<>();

    @OneToMany(mappedBy = "employer")
    private Set<Task> tasks = new HashSet<>();

    public Employer() {

    }

    public Employer(String first_name,
                    String last_name,
                    String email,
                    String phone_number,
                    String username,
                    String password,
                    String company_name,
                    String role,
                    String session_cookie) {
        super();
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone_number = phone_number;
        this.username = username;
        this.password = password;
        this.company_name = company_name;
        this.role = role;
        this.session_cookie = session_cookie;
        this.date_created = LocalDateTime.now();
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

    public String getCompanyName() {
        return company_name;
    }

    public String getRole() {
        return role;
    }

    public String getSessionCookie() {
        return session_cookie;
    }

    public LocalDateTime getDateCreated() {
        return date_created;
    }

    public LocalDateTime getDateUpdated() {
        return date_updated;
    }

    public Set<Employee> getEmployees() {
        return employees;
    }

    public Set<Task> getTasks () { return tasks; }

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

    public void setCompanyName(String company_name) {
        this.company_name = company_name;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setSessionCookie(String session_cookie) {
        this.session_cookie = session_cookie;
    }

    public void setDateCreated(LocalDateTime date_created) {
        this.date_created = date_created;
    }

    public void setDateUpdated(LocalDateTime date_updated) {
        this.date_updated = date_updated;
    }

    public void addEmployee(Employee employee) {
        employees.add(employee);
    }
}
