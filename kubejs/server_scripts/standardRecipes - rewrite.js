// priority: 2  

onEvent('recipes', event => {
        //functions
        function multiSmelt (output, input) {
            event.smelting(output, input).xp(1.0)
            event.blasting(output, input).xp(1.0)
        }
        //smelt('kubejs:logistical_processor','kubejs:raw_logistical_processor','0.5')


        //unify
        multiSmelt('thermal:silver_ingot','immersiveengineering:ore_silver')
})
console.info('standard')