# Portfolio Backend (Spring Boot)

Simple Spring Boot app exposing two endpoints:

- GET /api/projects -> returns sample project metadata
- POST /api/contact -> accepts contact form submissions (stored in-memory)

Run

1. mvn clean package
2. mvn spring-boot:run

Notes

- This is intentionally minimal for a student portfolio. For production you'd add persistence, validation, and secure deployment.