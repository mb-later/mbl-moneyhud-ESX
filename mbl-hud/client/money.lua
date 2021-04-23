local cashAmount = 0

ESX = nil

Citizen.CreateThread(function()
    while ESX == nil do
        TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
        Citizen.Wait(0)
    end
end)


RegisterCommand("nakit", function(source, args)
	TriggerEvent('mbl-moneyhud:ShowMoney', "cash")
end)

CreateThread(function()
    RegisterKeyMapping("nakit", "Nakit paran", "keyboard", "tab")
end)

RegisterNetEvent("mbl-moneyhud:ShowMoney")
AddEventHandler("mbl-moneyhud:ShowMoney", function(type)
    ESX.TriggerServerCallback("mbl:getMoney", function(PlayerData)
        cashAmount = PlayerData.nakitparasi
        print(PlayerData.nakitparasi)
        SendNUIMessage({
            action = "show",
            cash = cashAmount,
            type = type,
        })
    end)
end)

RegisterNetEvent("mbl:editMoney")
AddEventHandler("mbl:editMoney", function(type, amount, isMinus)
    ESX.TriggerServerCallback("mbl:getMoney", function(PlayerData)
        CashAmount = PlayerData.nakitparasi
    end)
     SendNUIMessage({
         action = "update",
         cash = CashAmount,
         amount = amount,
         minus = isMinus,
         type = type,
     })
end)
