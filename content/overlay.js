var SemanticChecker = {

  html4Elements: [],
  
  html5Elements: [],
  
  html5FalseElements: [],
  
  waiAriaElements: [],
  
  mfElements: [],

  status: 'init',

  onLoad: function() {
    // initialization code
    this.initialized = true;
  },

  checkCommand: function() {

    SemanticChecker.getAllSemanticElements();

    if (SemanticChecker.status == 'active') {
    
      SemanticChecker.status = 'inactive';
    
      SemanticChecker.deactivateAllSemanticElements();
      
    } else {
    
      if (SemanticChecker.status == 'inactive') {
      
        SemanticChecker.status = 'active';
      
        SemanticChecker.activateAllSemanticElements();
        
      } else {
      
        SemanticChecker.status = 'active';
      
        SemanticChecker.initAllSemanticElements();
        
      }
      
    }
    
  },

  deactivateAllSemanticElements: function() {
  
    var allHighlightElements = content.document.querySelectorAll('body .semantic-checker-highlight');
    var allHighlightTextElements = content.document.querySelectorAll('body .semantic-checker-highlight-text');
    var infoElements = content.document.querySelectorAll('body .semantic-checker-info');

    if (allHighlightElements.length == 0) {
    
      /* Document seems to be reloaded */
      
      SemanticChecker.status = 'active';
      
      SemanticChecker.initAllSemanticElements();
    
    }
  
    for (var i = 0; i < infoElements.length; i++) {
    
      YAHOO.util.Dom.setStyle(infoElements[i], 'display', 'none');    
    
    }
    
    for (var i = 0; i < allHighlightElements.length; i++) {
    
      YAHOO.util.Dom.setStyle(allHighlightElements[i], 'display', 'none');    
      YAHOO.util.Dom.setStyle(allHighlightTextElements[i], 'display', 'none');    
    
    }
    
  },
  
  activateAllSemanticElements: function() {
  
    var allHighlightElements = content.document.querySelectorAll('body .semantic-checker-highlight');
    var allHighlightTextElements = content.document.querySelectorAll('body .semantic-checker-highlight-text');
    var infoElements = content.document.querySelectorAll('body .semantic-checker-info');
  
    if (allHighlightElements.length == 0) {
    
      /* Document seems to be reloaded */
      
      SemanticChecker.status = 'active';
      
      SemanticChecker.initAllSemanticElements();
    
    }
  
    for (var i = 0; i < infoElements.length; i++) {
    
      YAHOO.util.Dom.setStyle(infoElements[i], 'display', 'block');    
    
    }
    
    for (var i = 0; i < allHighlightElements.length; i++) {
    
      YAHOO.util.Dom.setStyle(allHighlightElements[i], 'display', 'block');    
      YAHOO.util.Dom.setStyle(allHighlightTextElements[i], 'display', 'inline');    
    
    }
    
  },
  
  semanticHTML4Amount: function() {
  
    var totalAmount = 0;
    
    for (var element in SemanticChecker.html4Elements) {
    
      for (var i = 0; i < SemanticChecker.html4Elements[element].length; i++) {
     
        totalAmount++;
     
      }
      
    }
    
    return totalAmount;
  
  },
  
  semanticHTML5Amount: function() {
  
    var totalAmount = 0;
    
    for (var element in SemanticChecker.html5Elements) {
    
      for (var i = 0; i < SemanticChecker.html5Elements[element].length; i++) {
     
        totalAmount++;
     
      }
      
    }
    
    return totalAmount;
  
  },
  
  semanticHTML5FalseAmount: function() {
  
    var totalAmount = 0;
    
    for (var element in SemanticChecker.html5FalseElements) {
    
      for (var i = 0; i < SemanticChecker.html5FalseElements[element].length; i++) {
     
        totalAmount++;
     
      }
      
    }
    
    return totalAmount;
  
  },
  
  semanticMFAmount: function() {
  
    var totalAmount = 0;
    
    for (var element in SemanticChecker.mfElements) {
    
      for (var i = 0; i < SemanticChecker.mfElements[element].length; i++) {
     
        totalAmount++;
     
      }
      
    }
    
    return totalAmount;
  
  },
  
  semanticWaiAriaAmount: function() {
  
    var totalAmount = 0;
    
    for (var element in SemanticChecker.waiAriaElements) {
    
      for (var i = 0; i < SemanticChecker.waiAriaElements[element].length; i++) {
     
        totalAmount++;
     
      }
      
    }
    
    return totalAmount;
  
  },
  
  allElementsAmount: function() {
  
    var allElements = content.document.querySelectorAll('body *');
        
    return allElements.length;
  
  },
  
  ratio: function (value1, value2) {
    
    return Math.round(value1 / value2 * 10000) / 100;
    
  },
  
  initAllSemanticElements: function() {
  
    var infoElement = content.document.createElement('div');
    
    content.document.body.appendChild(infoElement);
    
    infoElement.setAttribute('class', 'semantic-checker-info');
    
    YAHOO.util.Dom.setStyle(infoElement, 'padding', '10px');
    YAHOO.util.Dom.setStyle(infoElement, 'background-color', '#000');
    YAHOO.util.Dom.setStyle(infoElement, 'color', '#fff');
    YAHOO.util.Dom.setStyle(infoElement, '-moz-border-radius', '5px');
    YAHOO.util.Dom.setStyle(infoElement, 'font-family', 'Verdana, Arial, sans serif');
    YAHOO.util.Dom.setStyle(infoElement, 'font-size', '10px');
    YAHOO.util.Dom.setStyle(infoElement, 'font-weight', 'normal');
    YAHOO.util.Dom.setStyle(infoElement, 'line-height', '1.0em');
    YAHOO.util.Dom.setStyle(infoElement, 'z-index', '1002');
    YAHOO.util.Dom.setStyle(infoElement, 'opacity', '0.8');
    YAHOO.util.Dom.setStyle(infoElement, 'width', '200px');
    YAHOO.util.Dom.setStyle(infoElement, 'display', 'block');
    YAHOO.util.Dom.setStyle(infoElement, 'height', 'auto');
    YAHOO.util.Dom.setStyle(infoElement, 'position', 'fixed');
    YAHOO.util.Dom.setStyle(infoElement, 'left', '20px');
    YAHOO.util.Dom.setStyle(infoElement, 'bottom', '20px');
    
    var semanticHTML4Amount = this.semanticHTML4Amount();
    var semanticHTML5Amount = this.semanticHTML5Amount();
    var semanticHTML5FalseAmount = this.semanticHTML5FalseAmount();
    var semanticMFAmount = this.semanticMFAmount();
    var semanticWaiAriaAmount = this.semanticWaiAriaAmount();
    
    var totalSemanticAmount = semanticHTML4Amount + semanticHTML5Amount + semanticHTML5FalseAmount + semanticMFAmount + semanticWaiAriaAmount;
    
    var nonSemanticHTML4Amount = this.allElementsAmount() - totalSemanticAmount;
    
    infoElement.innerHTML = '<div style="padding: 4px; margin-top: 2px; text-align: left; display: block; background-color: #ffff55; color: #000;">HTML4: ' + semanticHTML4Amount + '</div>';
    infoElement.innerHTML += '<div style="padding: 4px; margin-top: 2px; text-align: left; display: block; background-color: #ff55ff; color: #000;">HTML5: ' + semanticHTML5Amount + '</div>';
    infoElement.innerHTML += '<div style="padding: 4px; margin-top: 2px; text-align: left; display: block; background-color: #ff5555; color: #000;">HTML5 (preparation): ' + semanticHTML5FalseAmount + '</div>';
    infoElement.innerHTML += '<div style="padding: 4px; margin-top: 2px; text-align: left; display: block; background-color: #55ff55; color: #000;">Microformats: ' + semanticMFAmount + '</div>';
    infoElement.innerHTML += '<div style="padding: 4px; margin-top: 2px; text-align: left; display: block; background-color: #55ffff; color: #000;">WAI-ARIA: ' + semanticWaiAriaAmount + '</div>';
    infoElement.innerHTML += '<div style="padding: 4px; margin-top: 2px; text-align: left; display: block; background-color: #fff; color: #000;">Total semantic: ' + totalSemanticAmount + '</div>';
    infoElement.innerHTML += '<div style="padding: 4px; margin-top: 2px; text-align: left; display: block; background-color: #fff; color: #000;">Total non-semantic: ' + nonSemanticHTML4Amount + '</div>';
    infoElement.innerHTML += '<div style="padding: 4px; margin-top: 2px; text-align: left; display: block; background-color: #fff; color: #000;">Ratio: ' + this.ratio(totalSemanticAmount, nonSemanticHTML4Amount) + '</div>';
        
    this.highlightElements(SemanticChecker.mfElements, '#55ff55', '1001');
    this.highlightElements(SemanticChecker.html4Elements, '#ffff00', '999');
    this.highlightElements(SemanticChecker.html5Elements, '#ff55ff', '997');
    this.highlightElements(SemanticChecker.html5FalseElements, '#ff2222', '995');
    this.highlightElements(SemanticChecker.waiAriaElements, '#55ffff', '993');
  
  },
  
  highlightElements: function(highlightElements, bgcolor, zindex) {
  
    for (var element in highlightElements) {
    
      for (var i = 0; i < highlightElements[element].length; i++) {
      
        var singleElement = highlightElements[element][i];
      
        var region = YAHOO.util.Dom.getRegion(singleElement);
        
        var width = region.width + 'px';
        var height = region.height + 'px';
        
        var highlightElement = content.document.createElement('div');
        
        var highlightElementTextSpan = content.document.createElement('span');
        
        var highlightElementName = element.toUpperCase();
        
        if (highlightElementName == 'ROLE') {
        
          highlightElementName = highlightElementName + ' ' + singleElement.getAttribute('role').toUpperCase();
        
        }
        
        var highlightElementText = content.document.createTextNode(highlightElementName + ' (' + (i + 1) + ')');
        
        highlightElementTextSpan.appendChild(highlightElementText);
        
        content.document.body.appendChild(highlightElement);
        content.document.body.appendChild(highlightElementTextSpan);
        
        highlightElement.setAttribute('class', 'semantic-checker-highlight');
        highlightElementTextSpan.setAttribute('class', 'semantic-checker-highlight-text');
        
        YAHOO.util.Dom.setStyle(highlightElementTextSpan, 'padding', '1px 2px');
        YAHOO.util.Dom.setStyle(highlightElementTextSpan, 'background-color', '#333');
        YAHOO.util.Dom.setStyle(highlightElementTextSpan, 'color', '#fff');
        YAHOO.util.Dom.setStyle(highlightElementTextSpan, 'font-family', 'Verdana, Arial, sans serif');
        YAHOO.util.Dom.setStyle(highlightElementTextSpan, 'font-size', '8px');
        YAHOO.util.Dom.setStyle(highlightElementTextSpan, 'font-weight', 'normal');
        YAHOO.util.Dom.setStyle(highlightElementTextSpan, 'line-height', '1.0em');
        YAHOO.util.Dom.setStyle(highlightElementTextSpan, 'z-index', zindex);
        YAHOO.util.Dom.setStyle(highlightElementTextSpan, 'opacity', '0.75');
        
        YAHOO.util.Dom.setStyle(highlightElement, 'width', width);
        YAHOO.util.Dom.setStyle(highlightElement, 'height', height);
        YAHOO.util.Dom.setStyle(highlightElement, 'border', '1px #888800 solid');
        YAHOO.util.Dom.setStyle(highlightElement, 'background-color', bgcolor);
        YAHOO.util.Dom.setStyle(highlightElement, 'opacity', '0.5');
        YAHOO.util.Dom.setStyle(highlightElement, 'z-index', zindex - 1);
        
        var textSpanRegion = YAHOO.util.Dom.getRegion(highlightElementTextSpan);
        
        var textSpanXY = [0, 0];
        var textSpanWidth = YAHOO.util.Dom.getStyle(highlightElementTextSpan, 'width');
        
        textSpanXY[0] = region.right - (textSpanRegion.right - textSpanRegion.left);
        textSpanXY[1] = region.top;
        
        YAHOO.util.Dom.setXY(highlightElement, region);
        YAHOO.util.Dom.setXY(highlightElementTextSpan, textSpanXY);

      }
      
    }
        
  },
  
  getAllSemanticElements: function() {

    /* ### HTML 4 ### */

    /* Abbriviations */
    SemanticChecker.html4Elements['abbr'] = content.document.querySelectorAll('body abbr');
    SemanticChecker.html4Elements['acronym'] = content.document.querySelectorAll('body acronym');

    /* Headings */
    SemanticChecker.html4Elements['caption'] = content.document.querySelectorAll('body caption');
    SemanticChecker.html4Elements['h1'] = content.document.querySelectorAll('body h1');
    SemanticChecker.html4Elements['h2'] = content.document.querySelectorAll('body h2');
    SemanticChecker.html4Elements['h3'] = content.document.querySelectorAll('body h3');
    SemanticChecker.html4Elements['h4'] = content.document.querySelectorAll('body h4');
    SemanticChecker.html4Elements['h5'] = content.document.querySelectorAll('body h5');
    SemanticChecker.html4Elements['h6'] = content.document.querySelectorAll('body h6');
    
    /* Cites */
    SemanticChecker.html4Elements['blockquote'] = content.document.querySelectorAll('body blockquote');
    SemanticChecker.html4Elements['cite'] = content.document.querySelectorAll('body cite');

    /* Lists */
    SemanticChecker.html4Elements['dl'] = content.document.querySelectorAll('body dl');
    SemanticChecker.html4Elements['menu'] = content.document.querySelectorAll('body menu');
    SemanticChecker.html4Elements['dir'] = content.document.querySelectorAll('body dir');

    /* Emphasises */
    SemanticChecker.html4Elements['strong'] = content.document.querySelectorAll('body strong');
    SemanticChecker.html4Elements['em'] = content.document.querySelectorAll('body em');
    
    /* Other elements */
    SemanticChecker.html4Elements['address'] = content.document.querySelectorAll('body address');
    SemanticChecker.html4Elements['code'] = content.document.querySelectorAll('body code');
    SemanticChecker.html4Elements['dfn'] = content.document.querySelectorAll('body dfn');
    SemanticChecker.html4Elements['legend'] = content.document.querySelectorAll('body legend');
    SemanticChecker.html4Elements['samp'] = content.document.querySelectorAll('body samp');

    /* ### HTML 5 ### */

    /* Elements */
    
    SemanticChecker.html5Elements['article'] = content.document.querySelectorAll('body article');
    SemanticChecker.html5Elements['aside'] = content.document.querySelectorAll('body aside');
    SemanticChecker.html5Elements['header'] = content.document.querySelectorAll('body header');
    SemanticChecker.html5Elements['footer'] = content.document.querySelectorAll('body footer');
    SemanticChecker.html5Elements['nav'] = content.document.querySelectorAll('body nav');
    SemanticChecker.html5Elements['dialog'] = content.document.querySelectorAll('body dialog');
    SemanticChecker.html5Elements['figure'] = content.document.querySelectorAll('body figure');
    SemanticChecker.html5Elements['mark'] = content.document.querySelectorAll('body mark');
    SemanticChecker.html5Elements['meter'] = content.document.querySelectorAll('body meter');
    SemanticChecker.html5Elements['audio'] = content.document.querySelectorAll('body audio');
    SemanticChecker.html5Elements['video'] = content.document.querySelectorAll('body video');
    SemanticChecker.html5Elements['progress'] = content.document.querySelectorAll('body progress');
    SemanticChecker.html5Elements['time'] = content.document.querySelectorAll('body time');
    SemanticChecker.html5Elements['command'] = content.document.querySelectorAll('body command');
    SemanticChecker.html5Elements['datagrid'] = content.document.querySelectorAll('body datagrid');
    SemanticChecker.html5Elements['details'] = content.document.querySelectorAll('body details');
    SemanticChecker.html5Elements['datalist'] = content.document.querySelectorAll('body datalist');
    SemanticChecker.html5Elements['keygen'] = content.document.querySelectorAll('body keygen');
    SemanticChecker.html5Elements['bb'] = content.document.querySelectorAll('body bb');
    SemanticChecker.html5Elements['output'] = content.document.querySelectorAll('body output');
    SemanticChecker.html5Elements['ruby'] = content.document.querySelectorAll('body ruby');

    /* Input-Attributes */
    
    SemanticChecker.html5Elements['datetime'] = content.document.querySelectorAll('body input[type="datetime"]');
    SemanticChecker.html5Elements['datetime-local'] = content.document.querySelectorAll('body input[type="datetime-local"]');
    SemanticChecker.html5Elements['date'] = content.document.querySelectorAll('body input[type="date"]');
    SemanticChecker.html5Elements['month'] = content.document.querySelectorAll('body input[type="month"]');
    SemanticChecker.html5Elements['week'] = content.document.querySelectorAll('body input[type="week"]');
    SemanticChecker.html5Elements['time'] = content.document.querySelectorAll('body input[type="time"]');
    SemanticChecker.html5Elements['number'] = content.document.querySelectorAll('body input[type="number"]');
    SemanticChecker.html5Elements['range'] = content.document.querySelectorAll('body input[type="range"]');
    SemanticChecker.html5Elements['email'] = content.document.querySelectorAll('body input[type="email"]');
    SemanticChecker.html5Elements['url'] = content.document.querySelectorAll('body input[type="url"]');
    SemanticChecker.html5Elements['search'] = content.document.querySelectorAll('body input[type="search"]');
    SemanticChecker.html5Elements['color'] = content.document.querySelectorAll('body input[type="color"]');
    
    /* ### HTML 5 (false) ### */

    /* Elements */
    
    SemanticChecker.html5FalseElements['article (prep)'] = content.document.querySelectorAll('body #article, body .article');
    SemanticChecker.html5FalseElements['aside (prep)'] = content.document.querySelectorAll('body #aside, body .aside');
    SemanticChecker.html5FalseElements['header (prep)'] = content.document.querySelectorAll('body #header, body .header');
    SemanticChecker.html5FalseElements['footer (prep)'] = content.document.querySelectorAll('body #footer, body .footer');
    SemanticChecker.html5FalseElements['nav (prep)'] = content.document.querySelectorAll('body #nav, body .nav');
    SemanticChecker.html5FalseElements['dialog (prep)'] = content.document.querySelectorAll('body #dialog, body .dialog');
    SemanticChecker.html5FalseElements['figure (prep)'] = content.document.querySelectorAll('body #figure, body .figure');
    SemanticChecker.html5FalseElements['mark (prep)'] = content.document.querySelectorAll('body #mark, body .mark');
    SemanticChecker.html5FalseElements['meter (prep)'] = content.document.querySelectorAll('body #meter, body .meter');
    SemanticChecker.html5FalseElements['audio (prep)'] = content.document.querySelectorAll('body #audio, body .audio');
    SemanticChecker.html5FalseElements['video (prep)'] = content.document.querySelectorAll('body #video, body .video');
    SemanticChecker.html5FalseElements['progress (prep)'] = content.document.querySelectorAll('body #progress, body .progress');
    SemanticChecker.html5FalseElements['time (prep)'] = content.document.querySelectorAll('body #time, body .time');
    SemanticChecker.html5FalseElements['command (prep)'] = content.document.querySelectorAll('body #command, body .command');
    SemanticChecker.html5FalseElements['datagrid (prep)'] = content.document.querySelectorAll('body #datagrid, body .datagrid');
    SemanticChecker.html5FalseElements['details (prep)'] = content.document.querySelectorAll('body #details, body .details');
    SemanticChecker.html5FalseElements['datalist (prep)'] = content.document.querySelectorAll('body #datalist, body .datalist');
    SemanticChecker.html5FalseElements['keygen (prep)'] = content.document.querySelectorAll('body #keygen, body .keygen');
    SemanticChecker.html5FalseElements['bb (prep)'] = content.document.querySelectorAll('body #bb, body .bb');
    SemanticChecker.html5FalseElements['output (prep)'] = content.document.querySelectorAll('body #output, body .output');
    SemanticChecker.html5FalseElements['ruby (prep)'] = content.document.querySelectorAll('body #ruby, body .ruby');
    
    /* ### Microformats ### */

    /* hCard */
    SemanticChecker.mfElements['hCard'] = content.document.querySelectorAll('body .vcard');
    
    /* hCalendar */
    SemanticChecker.mfElements['hCalendar'] = content.document.querySelectorAll('body .vcalendar');
    
    /* rel-license */
    SemanticChecker.mfElements['relLicense'] = content.document.querySelectorAll('body a[rel="license"]');
    
    /* rel-nofollow */
    SemanticChecker.mfElements['relNofollow'] = content.document.querySelectorAll('body a[rel="nofollow"]');
    
    /* rel-tag */
    SemanticChecker.mfElements['relTag'] = content.document.querySelectorAll('body a[rel="tag"]');
    
    /* Vote Links */
    SemanticChecker.mfElements['voteFor'] = content.document.querySelectorAll('body a[rev="vote-for"]');
    SemanticChecker.mfElements['voteAbstain'] = content.document.querySelectorAll('body a[rev="vote-abstain"]');
    SemanticChecker.mfElements['voteAgainst'] = content.document.querySelectorAll('body a[rev="vote-against"]');
    
    /* ### WAI-ARIA ### */

    /* Roles */
    SemanticChecker.waiAriaElements['role'] = content.document.querySelectorAll('body *[role]');
    
    /* States from http://www.w3.org/TR/wai-aria/states_and_properties#state_prop_def */
    SemanticChecker.waiAriaElements['state'] = content.document.querySelectorAll('body *[aria-busy], body *[aria-checked], body *[aria-disabled], body *[aria-expanded], body *[aria-grabbed], body *[aria-hidden], body *[aria-invalid], body *[aria-pressed], body *[aria-selected]');
    
    /* Properties from http://www.w3.org/TR/wai-aria/states_and_properties#state_prop_def */
    SemanticChecker.waiAriaElements['property'] = content.document.querySelectorAll('body *[aria-activedescendant], body *[aria-atomic], body *[aria-autocomplete], body *[aria-controls], body *[aria-describedby], body *[aria-dropeffect], body *[aria-flowto], body *[aria-haspopup], body *[aria-label], body *[aria-labelledby], body *[aria-level], body *[aria-live], body *[aria-multiline], body *[aria-multiselectable], body *[aria-orientation], body *[aria-owns], body *[aria-posinset], body *[aria-readonly], body *[aria-relevant], body *[aria-required], body *[aria-setsize], body *[aria-sort], body *[aria-valuemax], body *[aria-valuemin], body *[aria-valuenow], body *[aria-valuetext]');
    
  },
  
  gotoSemanticCheckerHome: function() {
    //alert('go home!!');
  },
  
  onToggleOption: function(that) {
    alert(that);
  }
  
};

window.addEventListener('load', function(e) { SemanticChecker.onLoad(e); }, false); 
