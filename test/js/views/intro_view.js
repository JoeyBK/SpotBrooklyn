    /*jshint strict: false*/
/*globals Backbone: false, L: false, $: false, Handlebars: false, _: false, sbk: false */

sbk.IntroView = Backbone.View.extend({
    id: 'intro',
    template: Handlebars.compile($('#intro_template').html()),
    render: function () {
        $(this.el).html(this.template());
        return this;
    },
    events: {
        'click .fa-caret-down' : 'down',
        'click .fa-copyright' : 'coverPhoto'
    },
    down: function() {
        $('html, body').animate({
            scrollTop: $('#voting-explained').offset().top
        }, 500);
    },
    coverPhoto: function (){
        alert('photo credit TK');
    }
});