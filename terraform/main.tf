terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = ">= 3.0.0, < 4.0.0"
    }
  }
  backend "azurerm" {
    resource_group_name  = "fusion"
    storage_account_name = "terraformfusion"
    container_name       = "tfstate"
    key                  = "terraform.tfstate"
    #use_oidc = true
  }
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "fusion" {
  name     = "fusion"
  location = "uksouth"
  tags = {
    "First Tag"  = "First Value"
    "Second Tag" = "Second Value"
  }
}

# Chicken/egg scenario here:
# Need this storage account to support the terraform/backend block,
# so need to create this via command-line
# (with terraform/backend block commented) instead of CI/CD initially
resource "azurerm_storage_account" "terraform" {
  name                            = "terraformfusion"
  resource_group_name             = azurerm_resource_group.fusion.name
  location                        = azurerm_resource_group.fusion.location
  account_tier                    = "Standard"
  account_replication_type        = "LRS" # Locally-redundant storage
  allow_nested_items_to_be_public = false
}

resource "azurerm_storage_container" "tfstate" {
  name                  = "tfstate"
  storage_account_name  = azurerm_storage_account.terraform.name
  container_access_type = "private"
}

resource "azurerm_static_site" "fusion" {
  name                = "fusion"
  location            = "westeurope"
  resource_group_name = azurerm_resource_group.fusion.name
  sku_tier            = "Free"
  sku_size            = "Free"
}

resource "azurerm_static_site_custom_domain" "bigmealy" {
  domain_name     = "bigmealy.co.uk"
  static_site_id  = azurerm_static_site.fusion.id
  validation_type = "dns-txt-token"
}