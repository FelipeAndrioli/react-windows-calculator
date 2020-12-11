package com.apirest.apirest;

import org.springframework.beans.factory.annotation.Autowired;

public class Login {
    
    @Autowired
    UserRepository userRepository;

    private String username;
    private String password;

    public Login(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public void setUsername(String username) {
        this.username = username;    
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return this.username;
    }

    public String getPassword() {
        return this.password;
    }

    public Boolean validateLogin() {
        boolean validate = false;
        
        User validationUser = userRepository.findByUsername(this.username);
        
        System.out.println("Validating login...");

        if (validationUser != null) {
            if (validationUser.getPassword() == this.password) {
                validate = true;
                System.out.println("Login validated!");
            }
        } else {
            System.out.println("Login failed!");
        }

        return validate;
    }

}
