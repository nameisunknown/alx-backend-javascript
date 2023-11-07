package africa.semic.securityDenoProject2.exceptions;

public class AuthenticationNotFoundException extends RuntimeException{

    public AuthenticationNotFoundException(String message){
        super(message);
    }

}
