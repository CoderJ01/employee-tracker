package com.employeetracker.server.validation;

import com.employeetracker.server.model.Employee;
import com.employeetracker.server.model.Employer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;
import java.util.Set;

public class ValidateInput {
    public static Employer validateUsernameOrEmail(List<Employer> allEmployers, Employer requested) {
        for(int i = 0; i < allEmployers.size(); i++) {
            if(requested.getUsername().equals(allEmployers.get(i).getUsername()) ||
                    requested.getUsername().equals(allEmployers.get(i).getEmail())) {
                return allEmployers.get(i);
            }
        }
        throw new RuntimeException("Username or email does not exists!");
    }

    public static boolean validatePassword(String passwordInput, String databasePassword) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        boolean passwordIsValid = bCryptPasswordEncoder.matches(passwordInput, databasePassword);
        if(passwordIsValid) return true;
        throw new RuntimeException("Wrong password!");
    }

    public static Employee selectEmployeeForTask(Set<Employee> employees, String email) {
        Employee[] SQLlist = employees.toArray(new Employee[employees.size()]);
        for(int i = 0; i < employees.size(); i++) {
            if(email.equals(SQLlist[i].getEmail())) {
                return SQLlist[i];
            }
        }
        throw new RuntimeException("Employee does not exist!");
    }
}
