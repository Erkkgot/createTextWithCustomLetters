
let textInput = document.getElementById('textInput')
let result = document.getElementById('results')
let botao = document.getElementById('botao')
let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 çÇ'
let customAlphabet1 = ['𝒶', '𝒷', '𝒸', '𝒹', '𝑒', '𝒻', '𝑔', '𝒽', '𝒾', '𝒿', '𝓀', '𝓁', '𝓂', '𝓃', '𝑜', '𝓅', '𝓆', '𝓇', '𝓈', '𝓉', '𝓊', '𝓋', '𝓌', '𝓍', '𝓎', '𝓏', '𝒜', '𝐵', '𝒞', '𝒟', '𝐸', '𝐹', '𝒢', '𝐻', '𝐼', '𝒥', '𝒦', '𝐿', '𝑀', '𝒩', '𝒪', '𝒫', '𝒬', '𝑅', '𝒮', '𝒯', '𝒰', '𝒱', '𝒲', '𝒳', '𝒴', '𝒵', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', 'ç', 'Ç']
let input = ''


textInput.addEventListener('input', () => {
    let textWithCustomCharacters = ''
    let input = textInput.value
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (input.at(i) == alphabet.charAt(j)) {
                textWithCustomCharacters += customAlphabet1.at(j)
                continue
            }
        }
    }
    result.textContent = textWithCustomCharacters
})

