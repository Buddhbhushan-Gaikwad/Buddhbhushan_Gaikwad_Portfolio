package com.buddhbhushan.portfolio;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.mail.javamail.JavaMailSender;

@SpringBootTest
class PortfolioApplicationTest {

    // Mock JavaMailSender to prevent context load failure
    @MockBean
    private JavaMailSender javaMailSender;

    @Test
    void contextLoads() {
    }
}
