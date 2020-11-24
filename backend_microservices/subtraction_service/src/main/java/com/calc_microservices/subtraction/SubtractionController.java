package com.calc_microservices.subtraction;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SubtractionController {

    @PostMapping("/subtract")
    public long sub(
        @RequestParam String leftN,
        @RequestParam String rightN
    ) {
        long leftNumber;
        long rightNumber;

        try {
            leftNumber = Long.valueOf(leftN);
        } catch (NumberFormatException ex) {
            leftNumber = 0;
        }

        try {
            rightNumber = Long.valueOf(rightN);
        } catch (NumberFormatException ex) {
            rightNumber = 0;
        }

        Expression expression = new Expression (
            leftNumber,
            rightNumber
        );

        long result = expression.getResult();

        return result;
    }
}
