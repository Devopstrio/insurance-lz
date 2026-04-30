resource "aws_iam_role" "actuarial_role" {
  name = "actuarial-analyst-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ec2.amazonaws.com"
        }
      },
    ]
  })
}

resource "aws_iam_policy" "regulatory_audit_policy" {
  name        = "regulatory-audit-policy"
  description = "Allows viewing audit logs and compliance metrics."

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "cloudtrail:LookupEvents",
          "config:GetComplianceDetailsByConfigRule",
          "securityhub:GetFindings"
        ]
        Effect   = "Allow"
        Resource = "*"
      },
    ]
  })
}
