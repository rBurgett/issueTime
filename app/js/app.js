/*global require, Promise, console*/

var HeaderView = Backbone.View.extend({
    el: '#headerContainer',
    template: function() {
        return React.createClass({
            render: function () {
                return (
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo left">{this.props.model.brand}</a>
                        <ul className="right">
                            <li><a href="#"><i className="mdi-action-alarm"></i></a></li>
                            <li><a href="#"><i className="mdi-action-description"></i></a></li>
                            <li><a href="#"><i className="mdi-action-settings"></i></a></li>
                        </ul>
                    </div>
                )
            }
        })
    },
    render: function() {
        var Template = this.template();
        React.render(
            <Template model={this.model.attributes}/>,
            $(this.el)[0]
        );
    }
});

$('document').ready(function() {

    $('select').material_select();

    var headerView = new HeaderView({
        model: new Backbone.Model()
    });
    headerView.model.set({
        brand: 'IssueTime'
    });
    headerView.render();

});