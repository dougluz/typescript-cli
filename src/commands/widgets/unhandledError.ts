import { widgets } from ".";
import { updateSpinnerText } from "../../utils/spinner";

widgets.command("unhandled-error").action(async () => {
  updateSpinnerText("Processing an unhandled failure");
  await new Promise(resolve => setTimeout(resolve, 3000));
  throw new Error("Unhandled error");
});