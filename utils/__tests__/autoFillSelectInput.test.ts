import { beforeEach, describe, expect, it, Mock, test, vi } from "vitest";
import { autofillFieldSelect } from "../autofillSelectInput";

function createCountryOption(country: string) {
    const liCountry = document.createElement('li')
    const div = document.createElement('div')

    div.innerText = country
    liCountry.appendChild(div)
    return liCountry
}

describe('Autofill select input Tests', () => {
    let clickHandlers: Map<string, any>;
    let ulist: HTMLUListElement;
    let button: HTMLButtonElement;

    const countries = ["Canada", "USA", "Italy"]

    beforeEach(() => {
        ulist = document.createElement('ul')
        clickHandlers = new Map(countries.map(country => [country, vi.fn()]))
        countries.map((value) => {
            const il = createCountryOption(value)
            il.addEventListener('click', clickHandlers.get(value))
            ulist.appendChild(il)
        })
        button = document.createElement('button')
    })

    it('should click Canada button', () => {
        const actual = autofillFieldSelect(button, ulist, "Canada")
        
        expect(actual).toBe(true)
        expect(clickHandlers.get("Canada")).toHaveBeenCalledTimes(1)
        expect(clickHandlers.get("USA")).toHaveBeenCalledTimes(0)
        expect(clickHandlers.get("Italy")).toHaveBeenCalledTimes(0)
    })

    it("should return false when the country is not found", () => {
        const actual = autofillFieldSelect(button, ulist, "Finland")
        
        expect(actual).toBe(false)
    }) 
})