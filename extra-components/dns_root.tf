provider "azurerm" {
  features {}
  subscription_id = "0b82fbdb-6383-4125-a4f0-a493b3236552"
}

resource "azurerm_dns_a_record" "root" {
  name                = "@"
  zone_name           = "vscgravity.com"
  resource_group_name = "GravityBinaryRG"
  ttl                 = 3600
  records             = ["70.125.56.109"]
}
