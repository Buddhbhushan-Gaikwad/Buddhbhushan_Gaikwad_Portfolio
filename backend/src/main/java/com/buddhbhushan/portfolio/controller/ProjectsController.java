package com.buddhbhushan.portfolio.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/projects")
public class ProjectsController {

    @GetMapping
    public ResponseEntity<List<Map<String, Object>>> list() {

        List<Map<String, Object>> projects = List.of(
                Map.of(
                        "title", "Chat Server",
                        "link", "https://github.com/Buddhbhushan-Gaikwad/Cognifyz_Task/tree/main/Level%20-%203/ChatServerProject",
                        "technologies", List.of("Spring Boot", "WebSocket", "STOMP"),
                        "problem", "Need for a lightweight real-time messaging service.",
                        "features", List.of("Room-based chat", "Broadcast & private messages"),
                        "architecture", "Spring Boot WebSocket with STOMP messaging and in-memory sessions.",
                        "learned", List.of("WebSocket setup", "STOMP routing", "Concurrent connections")
                ),
                Map.of(
                        "title", "Journal Management System",
                        "link", "https://github.com/Buddhbhushan-Gaikwad/Journal-Application",
                        "technologies", List.of("Spring Boot", "MongoDB", "Redis"),
                        "problem", "Personal journaling app with persistent storage and caching.",
                        "features", List.of("CRUD APIs", "Pagination", "Redis caching"),
                        "architecture", "REST APIs → Service layer → MongoDB, Redis for cache.",
                        "learned", List.of("MongoDB integration", "Redis caching", "REST design")
                ),
                Map.of(
                        "title", "Travel Aggregator Backend",
                        "link", "https://github.com/Buddhbhushan-Gaikwad/CadeAlpha_travel-aggregator-full",
                        "technologies", List.of("Spring Boot", "REST APIs"),
                        "problem", "Aggregate multiple travel providers into a unified search.",
                        "features", List.of("Provider adapters", "Filtering & sorting"),
                        "architecture", "Controller → Service → Provider adapters (mocked).",
                        "learned", List.of("Adapter pattern", "API aggregation", "Error handling")
                )
        );

        return ResponseEntity.ok(projects);
    }
}
