package com.apirest.apirest;

import org.springframework.security.core.userdetails.UserDetails;

public interface SecurityService {

    String findLoggedInUsername();

    UserDetails validateLogin(String username, String password);
}
