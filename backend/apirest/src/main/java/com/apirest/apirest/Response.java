package com.apirest.apirest;

public class Response {

    private boolean status;
    private String username;

    public Response(boolean status, String username) {
        this.status = status;
        this.username = username;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public boolean getStatus() {
        return this.status;
    }

    public String getUsername() {
        return this.username;
    }
}
