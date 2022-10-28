#!/usr/bin/env node

import { Command } from "commander";
import { spinnerError, stopSpinner } from "./src/utils/spinner";
import { widgets } from "./src/commands/widgets";

const program = new Command();
program.description("new test CLI");
program.option("-v, --verbose", "verbose logging");
program.version("0.0.1");
program.addCommand(widgets);

process.on('unhandledRejection', function (err: Error) {
  const debug = program.opts().verbose;
  if(debug) {
    console.error(err.stack);
  };
  spinnerError();
  stopSpinner();
  program.error('', { exitCode: 1 });
})

async function main() {
  await program.parseAsync();
};
console.log();
main();
