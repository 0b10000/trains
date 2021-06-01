import { data, execute, MCFunction, playsound, rel, sleep, tag} from "sandstone";

MCFunction('stop_north', async () =>{
    data.merge.entity('@s', '{Motion:[0.0d, 0.0d, 0.0d]}');
    tag('@s').add("stopped_north");
    playsound("minecraft:block.note_block.pling", "block", "@a", rel(0,0,0), 1, 0.5);
    await sleep("5s");
    execute.as('@e[tag=stopped_north]').at('@s').run(async () => {
        playsound("minecraft:block.note_block.pling", "block", "@a", rel(0,0,0), 1, 1);
        playsound("minecraft:block.note_block.pling", "block", "@a", rel(0,0,0), 1, 2);
        await sleep("1s");
        execute.as('@e[tag=stopped_north]').at('@s').run(() => {
            data.merge.entity('@s', '{Motion:[0.0d, 0.0d, -0.3d]}');
            tag('@s').remove('stopped_north');
        });

    });
});

MCFunction('stop_south', async () =>{
    data.merge.entity('@s', '{Motion:[0.0d, 0.0d, 0.0d]}');
    tag('@s').add("stopped_south");
    playsound("minecraft:block.note_block.pling", "block", "@a", rel(0,0,0), 1, 0.5);
    await sleep("5s");
    execute.as('@e[tag=stopped_south]').at('@s').run(async () => {
        playsound("minecraft:block.note_block.pling", "block", "@a", rel(0,0,0), 1, 1);
        playsound("minecraft:block.note_block.pling", "block", "@a", rel(0,0,0), 1, 2);
        await sleep("1s");
        execute.as('@e[tag=stopped_south]').at('@s').run(() => {
            data.merge.entity('@s', '{Motion:[0.0d, 0.0d, 0.3d]}');
            tag('@s').remove('stopped_south');
        });

    });
});

MCFunction('stop_east', async () =>{
    data.merge.entity('@s', '{Motion:[0.0d, 0.0d, 0.0d]}');
    tag('@s').add("stopped_east");
    playsound("minecraft:block.note_block.pling", "block", "@a", rel(0,0,0), 1, 0.5);
    await sleep("5s");
    execute.as('@e[tag=stopped_east]').at('@s').run(async () => {
        playsound("minecraft:block.note_block.pling", "block", "@a", rel(0,0,0), 1, 1);
        playsound("minecraft:block.note_block.pling", "block", "@a", rel(0,0,0), 1, 2);
        await sleep("1s");
        execute.as('@e[tag=stopped_east]').at('@s').run(() => {
            data.merge.entity('@s', '{Motion:[0.3d, 0.0d, 0.0d]}');
            tag('@s').remove('stopped_east');
        });

    });
});

MCFunction('stop_west', async () =>{
    data.merge.entity('@s', '{Motion:[0.0d, 0.0d, 0.0d]}');
    tag('@s').add("stopped_west");
    playsound("minecraft:block.note_block.pling", "block", "@a", rel(0,0,0), 1, 0.5);
    await sleep("5s");
    execute.as('@e[tag=stopped_west]').at('@s').run(async () => {
        playsound("minecraft:block.note_block.pling", "block", "@a", rel(0,0,0), 1, 1);
        await sleep("1s");
        execute.as('@e[tag=stopped_west]').at('@s').run(() => {
            data.merge.entity('@s', '{Motion:[-0.3d, 0.0d, 0.0d]}');
            tag('@s').remove('stopped_west');
        });

    });
});
