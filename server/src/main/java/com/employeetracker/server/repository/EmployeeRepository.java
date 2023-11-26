package com.employeetracker.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employeetracker.server.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
