package com.example.loginregistration.service;

import com.example.loginregistration.model.User;
import com.example.loginregistration.web.data.UserRegistration;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    User save(UserRegistration registration);
    public boolean checkIfUserExist(String email);
}
