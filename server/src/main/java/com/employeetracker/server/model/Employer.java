package com.employeetracker.server.model;

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

    @Column(name = "email")
    private String email;

    @Column(name = "phone_number")
    private String phone_number;

    @Column(name = "password")
    private String password;

    @Column(name = "company_name")
    private String company_name;

    @Column(name = "role")
    private String role;

    @Column(name = "random_string")
    private String random_string;

    @Column(name = "date_created")
    private LocalDateTime date_created;

    public Employer() {

    }

    public Employer(String first_name,
                    String last_name,
                    String email,
                    String phone_number,
                    String password,
                    String company_name,
                    String role,
                    String random_string) {
        super();
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone_number = phone_number;
        this.password = password;
        this.company_name = company_name;
        this.role = role;
        this.random_string = random_string;
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

    public String getPassword() {
        return password;
    }

    public String getCompanyName() {
        return company_name;
    }

    public String getRole() {
        return role;
    }

    public String getRandomString() {
        return random_string;
    }

    public LocalDateTime getDateCreated() {
        return date_created;
    }

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

    public void setPassword(String password) {
        this.password = password;
    }

    public void setCompanyName(String company_name) {
        this.company_name = company_name;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setRandomString(String random_string) {
        this.random_string = random_string;
    }

    public void setDateCreated(LocalDateTime date_created) {
        this.date_created = date_created;
    }
}
