import ReactDOM from "react-dom/client";
import { PersonalInfoFormStorage } from "@/utils/personalInfoFormStorage";
import { App } from "./App";
import "~/assets/tailwind.css"

export default defineContentScript({
  // Set "registration" to runtime so this file isn't listed in manifest
  registration: "manifest",
  // Use an empty array for matches to prevent any host_permissions be added
  //  when using `registration: "runtime"`.
  matches: ["*://*/*"],
  // Put the CSS in the shadow root
  cssInjectionMode: "ui",

  async main(ctx) {
    const ui = await createIntegratedUi(ctx, {
      position: 'overlay',
      anchor: 'main',
      append: 'first',
      onMount(container) {
        const wrapper = document.createElement("div");
        container.append(wrapper);

        const root = ReactDOM.createRoot(wrapper);
        root.render(<App/>)
        return {root, wrapper};
      }
    })
    const personalInfo = await PersonalInfoFormStorage.getValues()
    console.log("Hello world!");
    // Optionally, return a value to the background

    const mutationObserver = new MutationObserver((mutations, observer) => {
      for (const mutation of mutations) {
        for (const newNode of mutation.addedNodes) {
          console.log(newNode.nodeName)
          if (newNode.nodeName == "MAIN") {
            console.log("attached ui")
            ui.mount();
          }
          
        }
      }
      
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true, attributes: false, characterData: false });
    
  },
});

