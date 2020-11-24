package com.calc_microservices.multiply;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MultiplyController {

    @PostMapping("/multiply")
    public long mult(
        @RequestParam String leftN,
        @RequestParam String rightN
    ) {

        long leftNumber, rightNumber;

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
