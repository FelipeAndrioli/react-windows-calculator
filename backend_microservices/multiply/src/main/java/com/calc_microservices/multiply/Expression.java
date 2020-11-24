package com.calc_microservices.multiply;

public class Expression {

    private long leftNumber;
    private long rightNumber;

    public Expression(long leftNumber, long rightNumber) {
        this.leftNumber = leftNumber;
        this.rightNumber = rightNumber;
    }

    public void setLeftNumber(long leftNumber) {
        this.leftNumber = leftNumber;
    }

    public void setRightNumber(long rightNumber) {
        this.rightNumber = rightNumber;
    }

    public long getLeftNumber() {
        return this.leftNumber;
    }

    public long getRightNumber() {
        return this.rightNumber;
    }

    public long getResult() {
        long result = 0;

        result = this.leftNumber * this.rightNumber;

        return result;
    }

}
