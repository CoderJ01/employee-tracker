package com.employeetracker.server.generate;

import com.employeetracker.server.bcrypt.BcryptInput;

public class CreateSessionCookie {
    public static String createCookie(int length) {
        String listOfCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        String result = "";
        for(int i = 0; i < length; i++) {
            result += listOfCharacters.charAt((int) (Math.floor(Math.random() * listOfCharacters.length())));
        }
        return BcryptInput.bcryptInput(result);
    }
}
