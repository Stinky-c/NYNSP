// priority: 101 

events.listen('recipes',event =>{
    var ingotType= [
        'copper',
        'constantan',
        'electrum',
        'nickel',
        'silver',
        'lead',
        'iron',
        'gold'
    ];
    ingotType.forEach(ingotType => {
        event.replaceOutput({},`immersiveengineering:plate_${ingotType}`,`thermal:${ingotType}_plate`)
        
    });
})
events.listen('recipes',event =>{

})