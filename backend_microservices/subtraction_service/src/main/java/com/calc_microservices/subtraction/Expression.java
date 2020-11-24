package com.calc_microservices.subtraction;

public class Expression {

    private double leftNumber;
    private double rightNumber;

    public Expression(double leftNumber, double rightNumber) {
        this.leftNumber = leftNumber;
        this.rightNumber = rightNumber;
    }

    public void setLeftNumber(double leftNumber) {
        this.leftNumber = leftNumber;
    }

    public void setRightNumber(double rightNumber) {
        this.rightNumber = rightNumber;
    }

    public double getLeftNumber() {
        return this.leftNumber;
    }

    public double getRightNumber() {
        return this.rightNumber;
    }

    public double getResult() {
        double result = 0;

        result = leftNumber - rightNumber;

        return result;
    }

}
