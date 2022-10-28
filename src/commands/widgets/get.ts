import { widgets } from ".";
import { spinnerSuccess, updateSpinnerText } from "../../utils/spinner";

widgets.command("get")
  .argument("<id>", "the id of the widget")
  .option("-f, --format <format>", "the format of the widget")
  .action(async (id, options) => {
    updateSpinnerText(`Getting widget ${id}`);
    await new Promise(resolve => setTimeout(resolve, 3000));
    spinnerSuccess();
    console.table({ id: 1, name: "Tommy" });
  });