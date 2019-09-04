module.exports = function NoMoreInventoryLag(mod) {
	["C_SHOW_ITEMLIST", "S_INVEN_USERDATA", "S_ITEMLIST"].forEach(def => 
		mod.hook(def, "raw", { "order": 10000000000, "filter": { "fake": null } }, () => !mod.game.me.inCombat)
	);
}