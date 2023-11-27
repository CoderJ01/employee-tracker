package com.employeetracker.server.model;

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
}
