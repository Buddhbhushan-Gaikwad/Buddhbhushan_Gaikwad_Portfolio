import React from 'react'

export default function BackendArchitecture(){
  return (
    <section className="card">
      <h2>Backend Architecture (Simple)</h2>
      <p><strong>Controller layer:</strong> Receives HTTP requests (REST endpoints) and maps them to service calls. Keep controllers thin and focused on request/response handling.</p>
      <p><strong>Service layer:</strong> Implements business logic. Services call repositories and other helpers. This keeps the controller simple and makes logic testable.</p>
      <p><strong>Repository layer:</strong> Responsible for data access (database, cache). Use repositories or DAOs so services don't directly use low-level DB code.</p>
      <p><strong>REST flow:</strong> Client → Controller → Service → Repository → Database. The response flows back in reverse order.</p>
      <p><strong>Exception handling:</strong> Handle expected errors (validation, not found) with well-defined responses and use global handlers for unexpected errors. Keep messages developer-friendly and avoid leaking sensitive info.</p>
      <p>This simple layered approach helps explain a project in interviews: show how a request moves through these layers and where you wrote key logic or tests.</p>
    </section>
  )
}