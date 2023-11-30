package com.employeetracker.server.bcrypt;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptInput {
    public static String bcryptInput(String input) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        String bCryptedPassword = bCryptPasswordEncoder.encode(input);
        return bCryptedPassword;
    }
}
