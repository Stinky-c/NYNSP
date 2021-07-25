onEvent('recipes',event =>{
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
    function shapedID (result, count, pattern, ingridients, ID) {
        event.shaped(item.of(result, count),
            pattern,
            ingridients
        ).id(ID)
    }
    //recipes
    event.shaped(Item.of('tetra:modular_double', {"double/handle":"double/basic_handle","double/head_left":"double/basic_hammer_left","double/head_right":"double/basic_hammer_right",id:"170dbf44-fc85-40f1-90c4-3a8c4aeef464",AS_Amulet_Holder:[426637396,1558333407,-1829425942,2084083085],"double/basic_hammer_right_material":"basic_hammer/oak",Damage:0,"double/basic_handle_material":"basic_handle/stick","double/basic_hammer_left_material":"basic_hammer/oak"}),[
        ' W ',
        ' SW',
        'S  '
    ],{
        W:'#minecraft:planks',
        S:'minecraft:stick'
    }).id('kjs:why_again')
    shaped('tetra:hammer_base',1,[
        'SSS',
        'SCS',
        'MBM'
    ],{
        S:'#forge:ingots/steel',
        C:Item.of('tetra:magmatic_cell', {Damage:0}),
        M:'tetra:metal_scrap',
        B:'mekanism:block_steel'
    })
    shapedID('tetra:magmatic_cell',1,[
        ' SS',
        'SBS',
        'SS '
    ],{
        B:'powah:crystal_blazing',
        S:'tetra:metal_scrap'
    },'kjs_tetra:magmatic_cell')
    //misc
    event.stonecutting('tetra:forged_bolt','tetra:metal_scrap').id('kjs_tetra:forged_bolt')
})