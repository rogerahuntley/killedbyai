import 'dotenv/config';
import path from 'path';
import Neocities from 'async-neocities';
import dirname from './rootDir.js';

const build_folder = path.join(dirname, 'build');

async function deploySite(cleanup = false) {
	//const token = await Neocities.getKey('sitename', 'password')
	const token = process.env.NEOCITIES_API_KEY;
	const client = new Neocities(token);

	let lastReport = new Date().getTime();

	const report = await client.deploy(build_folder, {
		cleanup,
		statsCb: (stats) => {
			const now = new Date().getTime();
			if (now - lastReport > 1000) {
				lastReport = now;
				console.log(
					`${stats.stage}: ${stats.status} ${(parseFloat(stats.progress) * 100).toFixed(2)}%`
				);
			}
		}
	});
	console.log(
		'\nsuccessfully uploaded',
		`\nfiles uploaded: ${report.filesToUpload.length}`,
		`\nfiles deleted: ${report.filesToDelete.length}`,
		`\nfiles skipped: ${report.filesSkipped.length}`
	);
}

// this is *kind of* hacky but it will let me run multiple functions from the same file
const func = process.argv[2];
switch (func) {
	case 'deploy':
		deploySite(process.argv[3] != 'no-cleanup');
		break;
}
