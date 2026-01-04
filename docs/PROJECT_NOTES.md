# Project Notes — Ready to explain in interviews

## Chat Server
Problem Statement
- Need for a lightweight real-time messaging service for small team chat and to learn WebSocket concepts.
Technologies Used
- Spring Boot, WebSocket, STOMP
Features Implemented
- Room-based chat, broadcast and private messages, simple session management.
Basic Architecture
- WebSocket endpoints in Spring Boot; clients use STOMP to subscribe/publish. Server routes messages to topics or queues.
What I Learned
- Setup WebSocket in Spring, STOMP message routing, handling client connect/disconnect.

## Journal Management System
Problem Statement
- Provide persistent storage of user journal entries with efficient reads for recent items.
Technologies Used
- Spring Boot, MongoDB, Redis
Features Implemented
- CRUD endpoints, pagination, Redis caching for recent entries.
Basic Architecture
- Controller -> Service -> Repository (MongoDB). Redis used for caching list queries.
What I Learned
- Integrating MongoDB with Spring Data, using Redis cache, designing simple REST endpoints.

## Travel Aggregator Backend
Problem Statement
- Aggregate travel provider data to present unified search results.
Technologies Used
- Spring Boot, REST APIs
Features Implemented
- Provider adapters, caching, filtering, and sorting.
Basic Architecture
- Controller accepts requests; service calls provider adapters (mocked) and aggregates results; caching used for repeated queries.
What I Learned
- Adapter pattern, API aggregation, error handling and fallbacks.

## Automation Framework
Problem Statement
- Automate UI checks and keep tests maintainable for regression checks.
Technologies Used
- Selenium, Page Object Model, TestNG
Features Implemented
- POM structure, reusable helpers, sample tests.
Basic Architecture
- Page Object classes encapsulate page actions; TestNG organizes tests and suites.
What I Learned
- Benefits of POM, structuring tests, TestNG usage and reporting.
