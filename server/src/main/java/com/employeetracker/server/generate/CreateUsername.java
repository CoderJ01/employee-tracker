package com.employeetracker.server.generate;

import com.employeetracker.server.bcrypt.BcryptInput;
import com.employeetracker.server.model.Employee;
import com.employeetracker.server.model.Employer;

import java.util.List;
import java.util.Set;

public class CreateUsername {
    public static String setUsername(String firstname, String lastname) {
        String username = (firstname + lastname).trim().toLowerCase() + createRandomString(3);
        return username;
    }

    private static String createRandomString(int length) {
        String listOfCharacters = "0123456789";
        String result = "";
        for(int i = 0; i < length; i++) {
            result += listOfCharacters.charAt((int) (Math.floor(Math.random() * listOfCharacters.length())));
        }
        return result;
    }
}

