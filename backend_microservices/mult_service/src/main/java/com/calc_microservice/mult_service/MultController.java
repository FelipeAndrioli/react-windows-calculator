package com.calc_microservice.mult_service;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MultController {
    
    @PostMapping("/multiply")
    public double mult(
        @RequestParam String leftN,
        @RequestParam String rightN
    ) {
        double leftNumber, rightNumber;

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

        Expression expression = new Expression (
            leftNumber,
            rightNumber
        );

        double result = expression.getResult();

        return result;
    }
}
