onEvent('recipes',event => {
    //functions
    function modifyShaped (result, count, pattern, ingridients) {
        event.remove({
            output: result,
            type: 'minecraft:crafting_shaped'
        })
        event.shaped(item.of(result, count),
            pattern,
            ingridients
        ).id(`kjs_` + result)
    }

    function shaped (result, count, pattern, ingridients) {
        event.shaped(item.of(result, count),
            pattern,
            ingridients
        ).id(`kjs_` + result)
    }
    //recipes
    modifyShaped('bloodmagic:altar',1,[
        'W F',
        'ACE',
        'GGG'
    ],{
        W:'botania:rune_water',
        F:'botania:rune_fire',
        A:'botania:rune_air',
        E:'botania:rune_earth',
        C:'minecraft:furnace',
        G:'#forge:ingots/gold'
    })
    event.recipes.bloodmagic.altar('bloodmagic:soulsnare', 'botania:mana_string').upgradeLevel(1).id('kjs:soul_snare')
    event.recipes.bloodmagic.altar('torchmaster:feral_flare_lantern','immersiveengineering:lantern').altarSyphon(100).consumptionRate(10).drainRate(10).id('kjs:feral_flare_lantern')

})