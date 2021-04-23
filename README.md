# mbl-moneyhud-ESX


es_extended/server/player.lua

	```lua
self.addMoney = function(money, recursion)
		money = ESX.Math.Round(money)
		self.addAccountMoney('money', money)
		TriggerClientEvent("mbl:editMoney", self.source, "cash", money, false)
		if(not recursion)then
			TriggerEvent("es:getPlayerFromId", self.source, function(user) user.addMoney(money, true) end)
		end
	end```
