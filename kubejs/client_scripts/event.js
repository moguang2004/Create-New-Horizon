ItemEvents.entityInteracted(event => {
    const { entity, target, hand, level, server } = event;
    if (mian_hand == 'snow_city_sword' && target.type == 'player') return;
    
    /**@type {Internal.LivingEntity} */
    const livingEntity = target;

    const boolean = livingEntity.hasEffect('minecraft:haste',10);

    console.log(`尸壳是否具有夜视药水效果：${boolean}`);
});