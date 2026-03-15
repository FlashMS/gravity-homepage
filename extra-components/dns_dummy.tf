resource "azurerm_dns_txt_record" "practice" {
  name                = "practice"
  zone_name           = "vscgravity.com"
  resource_group_name = "GravityBinaryRG"
  ttl                 = 300

  record {
    value = "apply-test"
  }
}
