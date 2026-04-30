# Architecture & Workload Diagrams

## 11. Multi-Region Insurance DR Topology (Detailed)
*Ensuring zero data loss for policy systems across geographic regions.*

```mermaid
graph TD
    subgraph "Region A (Primary)"
        PA[Policy App A]
        DBA[(Encrypted DB A)]
    end
    subgraph "Region B (Secondary)"
        PB[Policy App B]
        DBB[(Encrypted DB B)]
    end
    PA <->|Sync Replication| PB
    DBA <->|Global Datastore| DBB
    Traffic[Global Load Balancer] --> PA
    Traffic -.->|Failover| PB
```

## 13. Secure Data Lake Ingestion Flow
```mermaid
graph LR
    Source[On-Prem Policy DB] --> Extract[AWS Glue / Data Factory]
    Extract --> Mask[PII Masking Lambda]
    Mask --> Clean[Cleaned Parquet]
    Clean --> Lake[(S3 / Data Lake)]
    Lake --> Actuary[Actuarial Workspaces]
```

## 20. Identity Governance for Claims Adjusters
```mermaid
stateDiagram-v2
    Hire --> Role: Assign Adjuster Role
    Role --> MFA: Enforce FIDO2 MFA
    MFA --> Access: Grant Claims Portal
    Access --> Audit: Log All Adjustments
    Audit --> Termination: Revoke Access
```
