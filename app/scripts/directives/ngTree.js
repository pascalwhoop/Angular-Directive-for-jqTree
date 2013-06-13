app
    .directive('ngTree', function () {
        return {
            template: '<div></div>',

            scope: {
                treeData: '=',
                nodeSelected: '&',
                nodeMoved: '&',
                treeExpanded: '='

            },
            controller: function ($scope, $element, $attrs) {


                var tree = $element.children()[0];
                tree = $(tree);

                //when data has changed, the digest cycle will call this watch function. This in turn will
                //replace the current tree with a new one holding the updated values.
                $scope.$watch('treeData', function (newValue, oldValue) {
                    if (newValue !== oldValue) {  //ignore initialization of watcher

                        /**
                         * it should be recognized that this updates the entire tree. Large trees may be a performance issue.
                         */

                        //replaces the tree with a cleared div so we can create a new tree again with the updated data
                        var newDiv = $("<div></div>");
                        tree.replaceWith(newDiv);
                        tree = newDiv;

                        $scope.initTree();
                    }
                })

                var isSelectable = function () {
                    if ($attrs.nodeSelected) {
                        return true;
                    } else {
                        return false;
                    }
                }

                var isDragAndDropEnabled = function(){
                    if($attrs.nodeMoved){
                        return true;
                    }else{
                        return false;
                    }
                }

                $scope.initTree = function () {
                    $(function () {
                            tree.tree({
                                    data: $scope.treeData,
                                    autoOpen: $scope.treeExpanded,
                                    dragAndDrop: isDragAndDropEnabled(),
                                    selectable: isSelectable(),
                                    slide: true
                                }


                            )
                        }
                    );
                }

                $scope.initTree();


                tree.bind(
                    'tree.select',
                    function (event) {
                        if (event.node) {
                            // node was selected
                            $scope.nodeSelected({node: event.node});
                        }
                        else {
                            // event.node is null
                            // a node was deselected
                        }
                    }
                );

                tree.bind(
                    'tree.move',
                    function (event) {
                        var move = {
                            movedNode: event.move_info.moved_node,
                            targetNode: event.move_info.target_node,
                            targetPosition: event.move_info.position,
                            previousParent: event.move_info.previous_parent
                        }
                        $scope.nodeMoved({move: move});

                    }
                );


            },

            restrict: 'E',
            link: function (scope, element, attrs) {
            }
        };

    })


;

