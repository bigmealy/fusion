terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = ">= 3.0.0, < 4.0.0"
    }
  }
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "fusion" {
  name     = "fusion"
  location = "uksouth"
}

resource "azurerm_static_site" "fusion" {
  name                = "fusion"
  location            = "westeurope"
  resource_group_name = azurerm_resource_group.fusion.name
  sku_tier            = "Free"
  sku_size            = "Free"
}

resource "azurerm_static_site_custom_domain" "bigmealy" {
  domain_name = "bigmealy.co.uk"
  static_site_id = azurerm_static_site.fusion.id
  validation_type = "dns-txt-token"
}