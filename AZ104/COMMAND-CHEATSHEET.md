AZ-104 Command Cheat Sheet

Azure Login:
az login

Resource Groups:
az group create --name RG1 --location eastus
az group delete --name RG1 --yes

VM:
az vm create --resource-group RG1 --name VM1 --image UbuntuLTS
az vm start --resource-group RG1 --name VM1
az vm stop --resource-group RG1 --name VM1

Storage:
az storage account create --name mystorage --resource-group RG1 --location eastus --sku Standard_LRS

Networking:
az network vnet create --resource-group RG1 --name VNet1 --address-prefix 10.0.0.0/16
az network nsg create --resource-group RG1 --name NSG1

Monitoring:
az monitor metrics list --resource VM1 --metric "Percentage CPU"
