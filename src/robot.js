function sayHello(name) {
    const lang = name === 'Quoc' ? 'fr' : 'en';
    if(lang === 'fr') {
        return 'bonjour';
    } else {
        return 'hello';
    }
}