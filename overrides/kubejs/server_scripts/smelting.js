// priority: 2  

onEvent('recipes', event => {
        //functions
        function multiSmelt (output, input) {
            event.smelting(output, input).xp(1.0)
            event.blasting(output, input).xp(1.0)
        }


        //unify
        multiSmelt('thermal:silver_ingot','immersiveengineering:ore_silver')
})