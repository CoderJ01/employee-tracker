package com.employeetracker.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employeetracker.server.model.Employer;

public interface EmployerRepository extends JpaRepository<Employer, Long>{

}
