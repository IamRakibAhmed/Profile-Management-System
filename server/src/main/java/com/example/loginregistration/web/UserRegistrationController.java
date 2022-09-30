package com.example.loginregistration.web;

import com.example.loginregistration.service.UserAlreadyExistException;
import com.example.loginregistration.service.UserService;
import com.example.loginregistration.web.data.UserRegistration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/registration")
public class UserRegistrationController {
    private final UserService userService;

    public UserRegistrationController(UserService userService) {
        super();
        this.userService = userService;
    }

    @ModelAttribute("user")
    public UserRegistration userRegistration() {
        return new UserRegistration();
    }

    @GetMapping
    public String showRegistrationForm() {
        return "registration";
    }

    @PostMapping
    public String registerUserAccount(@ModelAttribute("user") UserRegistration userRegistration) {
        try {
            userService.save(userRegistration);
        }
        catch (UserAlreadyExistException e) {
            return "redirect:/registration?error";
        }
        return "redirect:/registration?success";
    }
}
