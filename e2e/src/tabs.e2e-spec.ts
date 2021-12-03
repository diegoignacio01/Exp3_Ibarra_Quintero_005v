import { browser, element, by } from 'protractor';

describe('Testing encargo:', () => {
    /*código de configuración, aquí le das la instrucción al browser que se dirija al index de la app
    y desde ahí comenzar a realizar el testing*/
    beforeEach(() => {
        browser.get("/inicio");
    });
    //Prueba 1
    it("La pestaña 1 se muestra por defecto", () => {
        expect(element(by.css(".titulo ion-title")).getText()).toContain("CLEAN-ENERGY");
    });



    describe('Test api', () => {
        beforeEach(() => {
            browser.get("/noticias");
        });
        it("Testiando la API", () => {
            expect(element(by.binding("noticia.title")).isPresent()).toBe;
        })
    })
});