const utils = {
    genSidebar: function (title, children = [], collapsable = true, sidebarDepth = 2) {
        var arr = [];
        arr.push({
            title,
            children,
            collapsable,
            sidebarDepth
        })
        return arr;
    }
};

module.exports = utils;

