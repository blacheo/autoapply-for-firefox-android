import { getFieldType } from "@/utils/fieldType";
import { PersonalInfo } from "@/utils/personalInfo";
import ReactDOM from "react-dom/client";
import { PersonalInfoFormStorage } from "@/utils/personalInfoFormStorage";
import { App } from "./App";

export default defineContentScript({
  // Set "registration" to runtime so this file isn't listed in manifest
  registration: "manifest",
  // Use an empty array for matches to prevent any host_permissions be added
  //  when using `registration: "runtime"`.
  matches: ["*://*wd3.myworkday/*"],
  // Put the CSS in the shadow root
  cssInjectionMode: "ui",

  async main(ctx) {
    const ui = createShadowRootUi(ctx, {
      name: 'autofill-ui',
      position: 'inline',
      anchor: 'body',
      onMount(container) {
        const wrapper = document.createElement("div");
        container.append(wrapper);

        const root = ReactDOM.createRoot(wrapper);
        root.render(<App/>)
      }
    })
    const personalInfo = await PersonalInfoFormStorage.getValues()
    console.log("Hello world!");
    // Optionally, return a value to the background
  },
});

