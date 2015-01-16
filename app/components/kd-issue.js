import Ember from 'ember';

export default Ember.Component.extend({
  selected: [0],
  activatedZoom: false,
  actions: {
    next: function() {
      var view = this;
      if(this.get('activatedZoom')){
        Ember.run(function() {
          view.send('zoomOut');
        });
      }

      if (this.get('selected').contains((this.get('issues.pages').content.length-2)) && this.get('selected').length === 1) {
        this.set('selected', [this.get('issues.pages').content.length-1]);
      } else if (this.get('selected').contains((this.get('issues.pages').content.length-1))) {
        this.set('selected', [0]);
      } else {
        var currentPages = this.get('selected');
        var pageEven = (currentPages[0]) ? currentPages[0] + 2 : 1;
        var pageOdd = (currentPages[1]) ? currentPages[1] + 2 : 2;

        var selectedPages = [];
        if(pageEven < (this.get('issues.pages').content.length-1)) {
          selectedPages.push(pageEven);
        }
        if(pageOdd < (this.get('issues.pages').content.length-1)) {
          selectedPages.push(pageOdd);
        }
        if(selectedPages.length === 0) {
          selectedPages.push((this.get('issues.pages').content.length-1));
        }

        this.set('selected', selectedPages);
      }
    },
    prev: function() {
      var view = this;
      if(this.get('activatedZoom')){
        Ember.run(function() {
          view.send('zoomOut');
        });
      }

      if (this.get('selected').contains(0) ) {
        this.set('selected', [this.get('issues.pages').content.length - 1]);
      } else if (this.get('selected').contains(1) ) {
        this.set('selected', [0]);
      } else if (((this.get('issues.pages').content.length - 1) % 2 !== 0) && this.get('selected').contains((this.get('issues.pages').content.length-1))) {
        this.set('selected', [this.get('issues.pages').content.length - 2, this.get('issues.pages').content.length - 3]);
      } else if (((this.get('issues.pages').content.length - 1) % 2 === 0) && this.get('selected').contains((this.get('issues.pages').content.length-1))) {
        this.set('selected', [this.get('issues.pages').content.length - 2]);
      } else if (this.get('selected').contains((this.get('issues.pages').content.length-2)) && this.get('selected').length === 1) {
        this.set('selected', [((this.get('issues.pages').content.length-2)-1), ((this.get('issues.pages').content.length-2)-2)]);
      } else {
        var currentPages = this.get('selected');
        var pageEven = (currentPages[0]) ? currentPages[0] - 2 : (this.get('issues.pages').content.length-1)-1;
        var pageOdd = (currentPages[1]) ? currentPages[1] - 2 : (this.get('issues.pages').content.length-1)-2;

        var selectedPages = [];
        if(pageEven > 0) {
          selectedPages.push(pageEven);
        }
        if(pageOdd > 0) {
          selectedPages.push(pageOdd);
        }

        this.set('selected', selectedPages);
      }
    },
    zoomIn: function(){
      this.set('activatedZoom', true);

      var view = this;
      var image = view.$('.issue-page.show');
      image.css('width', '100%');
      //console.log('activated zoom');
    },
    zoomOut: function(){
      this.set('activatedZoom', false);

      var view = this;
      var image = view.$('.issue-page.show');
      image.css('width', '50%');
      //console.log('unactivated zoom');
    }
  }
});
