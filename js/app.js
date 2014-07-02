/*jshint strict: false*/
/*globals Backbone: false, L: false, $: false, Handlebars: false, _: false */

var sbk = sbk || {};

$(document).ready(function () {
    var neighborhoodsCollection = new sbk.NeighborhoodCollection();
    var storyCollection = new sbk.StoryCollection();
    var spotsCollection = new sbk.SpotCollection();
    $.when(neighborhoodsCollection.fetch(),
           storyCollection.fetch(),
           spotsCollection.fetch())
    .then(function () {
        sbk.app = new sbk.AppRouter(neighborhoodsCollection, storyCollection, spotsCollection);
        Backbone.history.start();
    });
    //debugger;
    /*{
        success: function () {
            var storyCollection = new sbk.StoryCollection();
            storyCollection.fetch({
                success: function () {
                    var spotsCollection = new sbk.SpotCollection();
                    spotsCollection.fetch({
                        success: function () {
                            sbk.app = new sbk.AppRouter(neighborhoodsCollection, storyCollection, spotsCollection);
                            Backbone.history.start();
                        }
                    });
                }
            });
        }
    });*/
});