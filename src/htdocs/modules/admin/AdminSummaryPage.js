'use strict';

var EventsAssociatedView = require('admin/EventsAssociatedView'),
    EventsNearbyView = require('admin/EventsNearbyView'),
    EventModulePage = require('base/EventModulePage'),
    Util = require('util/Util');


var AdminSummaryPage = function (options) {
  options = Util.extend({}, options || {});

  EventModulePage.call(this, options);
};

AdminSummaryPage.prototype = Object.create(EventModulePage.prototype);

AdminSummaryPage.prototype._setContentMarkup = function () {

  EventsAssociatedView({
    el: this._content,
    eventDetails: this._event
  });

  EventsNearbyView({
    el: this._content,
    eventDetails: this._event
  });

};


module.exports = AdminSummaryPage;
