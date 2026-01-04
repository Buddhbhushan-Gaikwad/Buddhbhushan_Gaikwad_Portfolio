package com.buddhbhushan.portfolio.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.buddhbhushan.portfolio.dto.ContactRequest;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${contact.mail.to}")
    private String toEmail;

    public void sendContactMail(ContactRequest request) {

        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(toEmail); // FROM application.properties
        mail.setSubject("New Contact Form Submission");

        mail.setText(
                "Name: " + request.getName() + "\n" +
                "From: " + request.getEmail() + "\n\n" +
                "Message:\n" + request.getMessage()
        );

        mailSender.send(mail);
    }
}
