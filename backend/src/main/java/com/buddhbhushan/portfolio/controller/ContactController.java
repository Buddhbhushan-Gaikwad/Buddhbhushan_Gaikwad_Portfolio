package com.buddhbhushan.portfolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.buddhbhushan.portfolio.dto.ContactRequest;
import com.buddhbhushan.portfolio.service.EmailService;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*") // adjust for prod
public class ContactController {

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<String> submitContact(@RequestBody ContactRequest request) {

        if (request.getEmail() == null || request.getMessage() == null) {
            return ResponseEntity.badRequest().body("Email and message required");
        }

        emailService.sendContactMail(request);
        return ResponseEntity.ok("Message sent successfully");
    }
}
