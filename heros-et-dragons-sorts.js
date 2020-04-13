import { packSpells } from './modules/spells.js';
import { prepareSpellData } from './modules/spells.js';

async function spellCreation() {
    let srdSpell = await Compendium.create({ entity: "Item", label: "grimoire_H&D" });

    for (var spell of packSpells) {
        let spellItem = await Item.create(spell, { displaySheet: false, temporary: true });
        srdSpell.createEntity(spellItem);
    }
};

