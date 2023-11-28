package com.employeetracker.server.generate;

import com.employeetracker.server.model.Employee;
import com.employeetracker.server.model.Employer;

import java.util.List;
import java.util.Set;

public class CreateUsername {
    public static String setUsername(String firstname, String lastname, int number) {
        String zeros = setNumberOfZeros(number);
        String username = (firstname + lastname).trim().toLowerCase() + zeros + number;
        return username;
    }

    private static String setNumberOfZeros(int number) {
        int count = 0;

        while(number != 0) {
            number = number/10;
            count++;
        }

        if (count == 1) return "00";
        if (count == 2) return "0";
        return "";
    }

    public static int checkDuplicateNames(List<Employer> databaseList, Employer request) {
        int count = 1;
        for(int i = 0; i < databaseList.size(); i++) {
            if(request.getFirstName().equals(databaseList.get(i).getFirstName()) &&
                    request.getLastName().equals(databaseList.get(i).getLastName())) {
                count++;
            }
        }
        return count;
    }
}


