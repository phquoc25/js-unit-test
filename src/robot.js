function sayHello(name, getUserLangFn) {
    const lang = getUserLangFn(name);
    if(lang === 'fr') {
        return 'bonjour';
    } else {
        return 'hello';
    }
}