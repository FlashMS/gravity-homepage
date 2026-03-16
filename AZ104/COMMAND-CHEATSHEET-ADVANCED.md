AZ-104 Advanced Command Cheat Sheet

Identity:
az ad user list
az ad group list
az ad sp list
az ad sp create-for-rbac --name myapp --role Contributor

Networking Advanced:
az network watcher test-ip-flow --resource-group RG1 --vm-name VM1 --direction Inbound --protocol TCP --local 10.0.1.4 --remote 52.160.10.10 --port 443
az network watcher show-next-hop --resource-group RG1 --vm-name VM1 --source-ip 10.0.1.4 --destination-ip 8.8.8.8

Private Endpoints:
az network private-endpoint create --resource-group RG1 --name pe1 --vnet-name VNet1 --subnet Subnet1 --private-connection-resource-id STORAGE_ID --group-id blob

Azure Firewall:
az network firewall create --resource-group RG1 --name FW1 --location eastus
az network firewall network-rule create --firewall-name FW1 --collection-name AllowWeb --name AllowHTTPS --protocols TCP --source-addresses "*" --destination-addresses "*" --destination-ports 443 --action Allow --priority 100

Monitoring Advanced:
az monitor diagnostic-settings create --resource VM1 --name diag1 --workspace WORKSPACE_ID --logs '[{"category":"AllLogs","enabled":true}]' --metrics '[{"category":"AllMetrics","enabled":true}]'
