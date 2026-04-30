resource "aws_organizations_account" "insurance_workload" {
  name  = "insurance-workload-account"
  email = var.admin_email
}

resource "aws_vpc" "insurance_vpc" {
  cidr_block = "10.100.0.0/16"
  enable_dns_hostnames = true
  
  tags = {
    Name = "insurance-secure-vpc"
    Entity = "Life-Insurance-Primary"
  }
}

resource "aws_kms_key" "data_key" {
  description             = "KMS key for Insurance Data Encryption"
  deletion_window_in_days = 30
  enable_key_rotation     = true
}
