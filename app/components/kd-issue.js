import Ember from 'ember';

export default Ember.Component.extend({
  selected: [0],
  activatedZoom: false,
  actions: {
    next: function() {
      //var view = this;
      if(this.get('activatedZoom')){
        //single page
        if (this.get('selected') === this.get('issues.pages').content.length-1) {
          this.set('selected', 0);
        } else {
          this.incrementProperty('selected');
        }
      } else {
        // double page
        if (this.get('selected').contains((this.get('issues.pages').content.length - 2)) && this.get('selected').length === 1) {
          this.set('selected', [this.get('issues.pages').content.length - 1]);
        } else if (this.get('selected').contains((this.get('issues.pages').content.length - 1))) {
          this.set('selected', [0]);
        } else {
          var currentPages = this.get('selected');
          var pageEven = (currentPages[0]) ? currentPages[0] + 2 : 1;
          var pageOdd = (currentPages[1]) ? currentPages[1] + 2 : 2;

          var selectedPages = [];
          if (pageEven < (this.get('issues.pages').content.length - 1)) {
            selectedPages.push(pageEven);
          }
          if (pageOdd < (this.get('issues.pages').content.length - 1)) {
            selectedPages.push(pageOdd);
          }
          if (selectedPages.length === 0) {
            selectedPages.push((this.get('issues.pages').content.length - 1));
          }

          this.set('selected', selectedPages);
        }
      }
    },
    prev: function() {
      //var view = this;
      if(this.get('activatedZoom')){
        //single page
        if (this.get('selected') === 0 ) {
          this.set('selected', this.get('issues.pages').content.length-1);
        } else {
          this.decrementProperty('selected');
        }
      } else {
        //double page
        if (this.get('selected').contains(0)) {
          this.set('selected', [this.get('issues.pages').content.length - 1]);
        } else if (this.get('selected').contains(1)) {
          this.set('selected', [0]);
        } else if (((this.get('issues.pages').content.length - 1) % 2 !== 0) && this.get('selected').contains((this.get('issues.pages').content.length - 1))) {
          this.set('selected', [this.get('issues.pages').content.length - 2, this.get('issues.pages').content.length - 3]);
        } else if (((this.get('issues.pages').content.length - 1) % 2 === 0) && this.get('selected').contains((this.get('issues.pages').content.length - 1))) {
          this.set('selected', [this.get('issues.pages').content.length - 2]);
        } else if (this.get('selected').contains((this.get('issues.pages').content.length - 2)) && this.get('selected').length === 1) {
          this.set('selected', [((this.get('issues.pages').content.length - 2) - 1), ((this.get('issues.pages').content.length - 2) - 2)]);
        } else {
          var currentPages = this.get('selected');
          var pageEven = (currentPages[0]) ? currentPages[0] - 2 : (this.get('issues.pages').content.length - 1) - 1;
          var pageOdd = (currentPages[1]) ? currentPages[1] - 2 : (this.get('issues.pages').content.length - 1) - 2;

          var selectedPages = [];
          if (pageEven > 0) {
            selectedPages.push(pageEven);
          }
          if (pageOdd > 0) {
            selectedPages.push(pageOdd);
          }

          this.set('selected', selectedPages);
        }
      }
    },
    zoomIn: function(page){
      var view = this;

      if(page == undefined && view.get('viewedPages') instanceof Array) {
        page = view.get('viewedPages')[0];
      } else if(page == undefined && !(view.get('viewedPages') instanceof Array) && view.get('viewedPages') != undefined) {
        page = view.get('viewedPages');
      }

      this.set('activatedZoom', true);
      this.set('selected', page);

      var image = view.$('.issue-page');
      image.css('width', '100%');
      console.log('activated zoom in page number ' + this.get('selected'));

      var imageS = view.$('.issue-page.show');
      console.log(imageS);
    },
    zoomOut: function(page){
      var view = this;

      if(page == undefined && view.get('viewedPages') instanceof Array) {
        page = view.get('viewedPages')[0];
      } else if(page == undefined && !(view.get('viewedPages') instanceof Array) && view.get('viewedPages') != undefined) {
        page = view.get('viewedPages');
      }

      this.set('activatedZoom', false);

      var selectedPages = [];

      if(page % 2 == 0 && page != 0){
        if (page-1 != 0 || page-1 != (this.get('issues.pages').content.length - 1)) {
          selectedPages.push(page-1);
        }
      }
      if (page != 0 || page != (this.get('issues.pages').content.length - 1)) {
        selectedPages.push(page);
      }
      if(page % 2 != 0){
        if (page+1 != 0 || page+1 != (this.get('issues.pages').content.length - 1)) {
          selectedPages.push(page+1);
        }
      }

      if(selectedPages.length > 0) {
        this.set('selected', selectedPages);
      } else {
        this.set('selected', page);
      }

      var image = view.$('.issue-page');
      image.css('width', '50%');
      console.log('unactivated zoom in page number ' + this.get('selected'));
    }
  }
});
