const { cyan } = require("color-name");
const pUsername   = 'kdass'
const pPassword   = 'Mast@2020'

describe('Route Testing in UI5', function() {
    //https://docs.cypress.io/api/cypress-api/cookies.html#Preserve-Once
    before(() => {
        // log in only once before any of the tests run.
        // your app will likely set some sort of session cookie.
        // you'll need to know the name of the cookie(s), which you can find
        // in your Resources -> Cookies panel in the Chrome Dev Tools.
        //cy.login()
        //https://insum.ca/unit-testing-apex-3-methods-bypass-login-using-cypress-io/
        cy.visit('/');
        cy.get('input[name="sap-user"]')
            .clear()
            .should('be.empty')
            .type(pUsername)
            .should('have.value',pUsername)

        cy.get('input[name="sap-password"]')
            .should('be.empty')
            .type(pPassword)
            .should('have.value',pPassword) 
        cy.get('button[type=submit]').click()
      })
    
      beforeEach(() => {
        // before each test, we can automatically preserve the
        // 'session_id' and 'remember_token' cookies. this means they
        // will not be cleared before the NEXT test starts.
        //
        // the name of your cookies will likely be different
        // this is an example
        //Cypress.Cookies.preserveOnce(session_id', 'remember_token'), 
        Cypress.Cookies.preserveOnce('sap-usercontext', 'xsAuthInfo', 'MYSAPSSO2', 'SAP_SESSIONID_DF1_320', 'sap-login-XSRF_DF1','sap-contextid'
        , '_RCRTX03','_RCRTX03-samesite','fpb','rx_jobid')
      })
    it('is Fiori launchad login page reacbale?', function() {
        
    });
    it('attempt to login to Fiori Launchpad', function(){
        
        //cy.get('input[name="sap-user"]').type('kdass')
        //cy.get('input[name="sap-password"]').type('July@2020')
        // cy.get('button[type=submit]')
        // cy.get('input[name="sap-user"]').should('be.visible').debug()
    });
    it('choose your app', function(){
        //cy.request('/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html/?spnego=disabled&sap-client=320&sap-language=EN#PurchaseRequisition-create')
    });
    it('should display the Master Page', function(){
        //cy.request('/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html/?spnego=disabled&sap-client=320&sap-language=EN#PurchaseRequisition-create')
        
        //cy.url().should('include', 'Objects/ObjectID_11')
    });
    it('should validate line item counts', function(){
        // cy.server()
        // cy.route('GET','https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/master-detail/webapp/localService/mockdata/LineItems.json').as('metadata')
        // //change according to your webserver
        // cy.visit('https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/master-detail/webapp/test/mockServer.html') 
        // cy.wait('@metadata')

        //cy.get('lineItemsTitle')
        //cy.get('#container-masterdetail---detail--lineItemsTitle')
        //cy.get('container-masterdetail---detail--lineItemsTitle')
    })
})