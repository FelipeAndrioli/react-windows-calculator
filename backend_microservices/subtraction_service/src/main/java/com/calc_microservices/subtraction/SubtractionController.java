package com.calc_microservices.subtraction;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SubtractionController {

    @PostMapping("/subtract")
    public double sub(
        @RequestParam String leftN,
        @RequestParam String rightN
    ) {
        double leftNumber;
        double rightNumber;

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
