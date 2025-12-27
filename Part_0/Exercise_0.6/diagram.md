```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    note right of browser: Payload:{"content":"Placeholder","date":"2025-12-27T17:25:37.673Z"}
    note right of browser: In this scenario, the front-end already redrew the note.
    activate server
    server-->>browser: STATUS 201: Created.
    deactivate server
```