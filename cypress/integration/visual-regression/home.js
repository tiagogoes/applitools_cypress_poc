describe('Home Page', () => {
    it('should render on 1920x1080', () => {
      cy.visit('/');
  
      //Start the test
      cy.eyesOpen({
        appName: 'ui-frontyard',
        testName: 'home page 1920x1080',
        browser: { width: 1920, height: 1080 },
        batchName: 'Home'
      });
  
      // Add checkpoint #1 (This is test step #1)
      cy.eyesCheckWindow('Main Page');
  
      //End Test
      cy.eyesClose();
    });

    it('should render on 768x1024', () => {
        cy.visit('/');
    
        //Start the test
        cy.eyesOpen({
          appName: 'ui-frontyard',
          testName: 'home page 768x1024',
          browser: { width: 768, height: 1024 },
          batchName: 'Home'
        });
    
        // Add checkpoint #1 (This is test step #1)
        cy.eyesCheckWindow('Main Page');
    
        //End Test
        cy.eyesClose();
      });

      it('should render on 320x480', () => {
        cy.visit('/');
    
        //Start the test
        cy.eyesOpen({
          appName: 'ui-frontyard',
          testName: 'home page 320x480',
          browser: { width: 320, height: 480 },
          batchName: 'Home'
        });
    
        // Add checkpoint #1 (This is test step #1)
        cy.eyesCheckWindow('Main Page');
    
        //End Test
        cy.eyesClose();
      });
  });