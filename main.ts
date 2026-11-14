// ai-joke-03 entry (Node 22, standard library only): writes one fixed one-liner about AI coding agents to
// /output/entry.txt. The judge reads exactly the bytes written, so the joke carries no trailing line end.
// The string never changes, so both grader runs produce identical bytes.
//
// Locally, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE = 'My coding agent reviewed my pull request and left 47 comments. It wrote the pull request.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
