ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

ESX.RegisterServerCallback("mbl:getMoney", function(source, cb)
	local xPlayer = ESX.GetPlayerFromId(source)
	if xPlayer then
		local nakit = xPlayer.getMoney()
		cb({nakitparasi = nakit})
	else
		cb(nil)
	end
end)

