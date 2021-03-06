package com.apirest.apirest;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="TB_EXPRESSION")
public class Expression implements Serializable {
    
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;

    private double leftNumber;
    private double rightNumber;
    private char operation;

    public Expression(double leftNumber, char operation, double rightNumber) {
        this.leftNumber = leftNumber;
        this.operation = operation;
        this.rightNumber = rightNumber;
    }

    public void setLeftNumber(double leftNumber) {
        this.leftNumber = leftNumber;
    }

    public void setOperation(char operation) {
        this.operation = operation;
    }

    public void setRightNumber(double rightNumber) {
        this.rightNumber = rightNumber;
    }

    public double getLeftNumber() {
        return this.leftNumber;
    }

    public char getOperation() {
        return this.operation;
    }

    public double getRightNumber() {
        return this.rightNumber;
    }

    public double getResult() {
        double result = 0;

        if (this.operation == '+') {
            result = this.leftNumber + this.rightNumber;
        } else if (this.operation == '-') {
            result = this.leftNumber - this.rightNumber;
        } else if (this.operation == '/') {
            result = this.leftNumber / this.rightNumber;
        } else if (this.operation == '*') {
            result = this.leftNumber * this.rightNumber;
        } 

        return result;
    }
}
