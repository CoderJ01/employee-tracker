package com.employeetracker.server.validation;

import com.employeetracker.server.model.Employer;

import java.util.List;

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
}
