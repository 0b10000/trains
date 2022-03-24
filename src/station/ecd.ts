/* eslint-disable new-cap */
import {execute, kill, MCFunction} from 'sandstone';

MCFunction('ecd', async () => {
	execute.unless.entity('@e[type=minecraft:player, distance=..1, limit=1, sort=nearest]').as('@s').run(() => {
		kill('@s');
	});
});
