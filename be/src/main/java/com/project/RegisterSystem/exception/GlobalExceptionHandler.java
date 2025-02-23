package com.project.RegisterSystem.exception;

import com.project.RegisterSystem.dto.response.ResponseStatusDto;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ResponseStatusDto> handleAllException(Exception ex, WebRequest request){
        ResponseStatusDto errorResponse = ResponseStatusDto.builder()
                .status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                .message(ex.getMessage())
                .build();
        return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<ResponseStatusDto> handleNotFoundException(NotFoundException ex, WebRequest request){
        ResponseStatusDto errorResponse = ResponseStatusDto.builder()
                .status(HttpStatus.NOT_FOUND.value())
                .message(ex.getMessage())
                .build();
        return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(InvalidCredentialsException.class)
    public ResponseEntity<ResponseStatusDto> handleInvalidCredentialsExceptionException(InvalidCredentialsException ex, WebRequest request){
        ResponseStatusDto errorResponse = ResponseStatusDto.builder()
                .status(HttpStatus.BAD_REQUEST.value())
                .message(ex.getMessage())
                .build();
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }
}
