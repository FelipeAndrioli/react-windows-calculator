package com.calc_microservices.sum;

public class Expression {
    
    private final long id;
    private final long[] expression;
    private final long result;

    public Expression(long id, long[] expression, long result) {
        this.id = id;
        this.expression = expression;
        this.result = 0;
    }

    public long getId() {
        return id;
    }

    public long[] getExpression() {
        return expression;
    }

    public long getResult() {
        return result;
    }

}
