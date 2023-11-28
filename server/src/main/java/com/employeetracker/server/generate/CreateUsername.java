package com.employeetracker.server.generate;

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
}


