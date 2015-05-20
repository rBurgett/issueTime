/*global require, Promise, console*/

var HeaderLink = React.createClass({
    clickEvent: function(e) {
        e.preventDefault();
        this.props.callback(this.props.page);
    },
    render: function() {
        return (
            <li><a title={this.props.title} onClick={this.clickEvent} href="#"><i className={this.props.iconClass}></i></a></li>
        )
    }
});

var HeaderView = React.createClass({
    headerLinkClicked: function(page) {
        this.props.callback(page);
    },
    brandClicked: function(e) {
        e.preventDefault();
    },
    render: function () {
        return (
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo left" onClick={this.brandClicked} onMouseOver={this.brandHover}>{this.props.model.brand}</a>
                <ul className="right">
                    <HeaderLink page="timer" iconClass="mdi-action-alarm" title="Timer" callback={this.headerLinkClicked} />
                    <HeaderLink page="projects" iconClass="mdi-action-description" title="Projects" callback={this.headerLinkClicked} />
                    <HeaderLink page="settings" iconClass="mdi-action-settings" title="Settings" callback={this.headerLinkClicked} />
                </ul>
            </div>
        )
    }
});

var AppController = {

    headerModel: new Backbone.Model(),
    headerContainer: $('#headerContainer')[0],
    renderHeader: function() {
        React.render(
            <HeaderView model={this.headerModel.attributes} callback={this.headerLinkClick} />,
            this.headerContainer
        );
    },
    headerLinkClick: function(page) {
        console.log(page);
    },

    appContainer: $('#appContainer')[0],
    appModel: new Backbone.Model(),

    create: function() {
        return Object.create(this);
    },
    start: function() {
        this.headerModel.set('brand', 'IssueTime');
        this.renderHeader();
        return this;
    }
};

$('document').ready(function() {

    var appController = AppController.create().start();

    $('select').material_select();

    $('button').on({
        click: function(e) {
            e.preventDefault();
            appController.headerModel.set('brand', 'TissueTime');
            appController.renderHeader();
        }
    })

});