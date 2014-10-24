/*jshint strict: false*/
/*globals Backbone: false, L: false, $: false, Handlebars: false, _: false, sbk: false */

sbk.FollowView = Backbone.View.extend({

    id: 'follow_container',
    template: Handlebars.compile($('#follow_template').html()),
    render: function (){
        $(this.el).html(this.template());
        return this;
    }

});