/// Autofills a field that provides a dropdown of options
export function autofillFieldSelect(button: HTMLButtonElement, listbox: HTMLUListElement, expectedValue: string) {
    // Simulate click to open list of options
    button.click()
    // Find option that matches value
    for (const child of listbox.children) {
        
        for (const div1 of child.children) {
            const div = div1 as HTMLDivElement
            const value = div.innerText
            if (value === expectedValue) {
                const listItem = child as HTMLUListElement
                listItem.click() 
                
                return true;
            }
            
        }
        
    }

    console.log("Unable to find option")
    return false;
}