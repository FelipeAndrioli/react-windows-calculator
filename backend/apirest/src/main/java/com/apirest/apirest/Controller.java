package com.apirest.apirest;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api")
public class Controller {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ExpressionRepository expressionRepository;

    @GetMapping("/arithmeticoperation")
    public double getExpressionResult(
        @RequestParam String leftN,
        @RequestParam char arithmeticOperation,
        @RequestParam String rightN
    ) {
        double leftNumber;
        double rightNumber;
        char operation = '+';

        try {
            leftNumber = Double.parseDouble(leftN);
        } catch (NumberFormatException ex) {
            leftNumber = 0;
        }

        try {
            rightNumber = Double.parseDouble(rightN);
        } catch (NumberFormatException ex) {
            rightNumber = 0;
        }

        if (
            arithmeticOperation == '-' ||
            arithmeticOperation == '/' ||
            arithmeticOperation == '*'
        ) {
            operation = arithmeticOperation;
        }
        
        Expression expression = new Expression (
            leftNumber,
            operation,
            rightNumber
        );

        double result = expression.getResult();

        return result;
    }

    @PostMapping("/SignIn")
    public User newUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @PostMapping("/Login")
    public void login(@RequestBody Login login) {
        
    }
}