// priority: 9

settings.logAddedRecipes = false
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Server: online')


//block tag
onEvent('block.tags', event => {
	function removeBlock (tag, block) {
		event.remove(tag,block)
	}
	function addBlock (tag, block) {
		event.add(tag,block)
	}
	//why? because i wanted to
	addBlock('geode','tetra:block_geode')
	//addBlock('forge:ores','tetra:block_geode')
	removeBlock('forge:chests/electric','mekanism:personal_chest')
	//removeBlock('forge:chests/personal','mekanism:personal_chest') removed since mek is mean 
	removeBlock('forge:chests','mekanism:personal_chest')
	removeBlock('guarded_by_piglins','mekanism:personal_chest')
	removeBlock('forge:wg_stone','create:natural_scoria')
	removeBlock('forge:wg_stone','minecraft:diorite')
}) 
//item tag
onEvent('item.tags', event => {
	//kekW
	function removeItem (tag, item) {
		event.remove(tag,item)
	}
	function addItem (tag, item) {
		event.add(tag,item)
	}
	//still wanted to
	removeItem('forge:chests/electric','mekanism:personal_chest')
	//removeItem('forge:chests/personal','mekanism:personal_chest')
	removeItem('forge:chests','mekanism:personal_chest')
	//i hate misplacing commas
	//line 41 cause a headache 
	
	addItem('kjs:jetpack/t0','ironjetpacks:wood_jetpack')
	addItem('kjs:jetpack/t1',['ironjetpacks:stone_jetpack','ironjetpacks:copper_jetpack'])
	addItem('kjs:jetpack/t2',['ironjetpacks:iron_jetpack','ironjetpacks:bronze_jetpack','ironjetpacks:silver_jetpack'])
	addItem('kjs:jetpack/t3',['ironjetpacks:gold_jetpack','ironjetpacks:invar_jetpack','ironjetpacks:electrum_jetpack','ironjetpacks:steel_jetpack'])
	addItem('kjs:jetpack/t4',['ironjetpacks:diamond_jetpack','ironjetpacks:platinum_jetpack'])
	addItem('kjs:jetpack/t5','ironjetpacks:emerald_jetpack')
	addItem('kjs:jetpack',['mekanism:module_jetpack_unit','mekanism:jetpack','mekanism:jetpack_armored','ironjetpacks:wood_jetpack','ironjetpacks:stone_jetpack','ironjetpacks:copper_jetpack','ironjetpacks:iron_jetpack','ironjetpacks:bronze_jetpack','ironjetpacks:silver_jetpack','ironjetpacks:gold_jetpack','ironjetpacks:invar_jetpack','ironjetpacks:electrum_jetpack','ironjetpacks:steel_jetpack','ironjetpacks:diamond_jetpack','ironjetpacks:platinum_jetpack','ironjetpacks:emerald_jetpack'])
	//botania
	addItem('kjs:mana_items',['botania:mana_pearl','botania:mana_diamond'])
	//ingots
	addItem('forge:ingots/energized_steel','powah:steel_energized')
	addItem('forge:ingots/gaia','botania:gaia_ingot')
	addItem('forge:ingots/alfsteel','mythicbotany:alfsteel_ingot')
	
}) 