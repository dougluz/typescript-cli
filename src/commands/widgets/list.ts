import { widgets } from ".";
import { spinnerSuccess, updateSpinnerText } from "../../utils/spinner";

widgets.command("list").action(async () => {
  updateSpinnerText("Processing ");

  await new Promise(resolve => setTimeout(resolve, 1000));
  spinnerSuccess();
  console.table([{ id: 1, name: "Tommy"}, { id: 2, name: "Bob" }]);
});