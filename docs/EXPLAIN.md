# How to explain projects (short bullets)

Chat Server
- Problem: Need lightweight real-time messaging for small groups; used to learn WebSocket concepts.
- Key points: WebSocket connection lifecycle, STOMP topics, message routing, simple scalability notes (stateless vs stateful sessions).
- What to show: endpoint code for WebSocket, how clients subscribe and publish.

Journal Management System
- Problem: Store and retrieve user journal entries with good read performance.
- Key points: REST endpoints for CRUD, MongoDB document model, using Redis to cache recent queries (cache invalidation), data validation.
- What to show: DTOs, controller-service-repo flow, sample queries.

Travel Aggregator Backend
- Problem: Aggregate provider data and present unified results.
- Key points: Adapter pattern for providers, error handling and fallbacks, caching and pagination.
- What to show: provider adapter interface and a sample adapter implementation.

Automation Framework
- Problem: Automate repetitive UI checks and keep tests maintainable.
- Key points: Page Object Model structure, locator strategy, TestNG test suite, sample test and assertions.
- What to show: a Page Object class and an example test using it.

General tips
- Keep answers honest and focused on what you implemented.
- Describe trade-offs and what you'd improve next (persistence, security, CI integration).
