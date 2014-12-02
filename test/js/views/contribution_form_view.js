/*jshint strict: false*/
/*globals Backbone: false, L: false, $: false, Handlebars: false, _: false, sbk: false */

sbk.ContributionFormView = Backbone.View.extend({
    id: 'contribution-form',
    template: Handlebars.compile($('#contribution-form-template').html()),
    render: function () {
        $(this.el).html(this.template());
        return this;
    },
    events: {
        'click input' : 'submit_idea'
    },
    submit_idea: function (event) {
        event.preventDefault();
        var idea = $('textarea').val();
        ga('send', 'event', 'ideas', 'click', idea, 1);
    }
});