// priority: 0

console.info('Item & Blocks: online')

onEvent('item.registry', event => {
	//maybe
	//event.create('compressed_quartz_block').displayname('Compressed Quartz Block')
	event.create('sandesite').displayName('Sandesite')
    event.create('fortified_sandesite').displayName('Fortified Sandesite')
})

onEvent('block.registry', event => {
	//event.create('fortified_sandesite').displayName('Fortified sandesite').material(block.material.iron).hardness(7)
  	//event.create('sandesite').displayName('Sandesite').material(block.material.sand).hardness(0.6)
})
