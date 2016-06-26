appDirectives.directive('paginationSize', function() {
    return {
        scope: {
            pagination: "=pageInfo"
        },
        restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
        template: '<div class="pagination_length">每页显示 '+
                        '<select chosen-directive class="chosen" change-function="pagination.sizeChange" set-selected="initSize">'+
                        '<option value="5">5</option>'+
                        '<option value="10">10</option>'+
                        '<option value="20">20</option>'+
                        '<option value="50">50</option>'+
                        '<option value="100">100</option>'+
                    '</select> 条记录'+
                '</div>',
        link: function(scope, element, attr){
            scope.initSize= ['20'];
        }
    }
});
