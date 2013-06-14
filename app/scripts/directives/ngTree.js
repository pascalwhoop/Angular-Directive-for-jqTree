angular.module('ngTreeDirective', [])
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
                        $scope.bindTreeEvents();
                    }
                })

                var isSelectable = function () {
                    if ($attrs.nodeSelected) {
                        return true;
                    } else {
                        return false;
                    }
                }

                var isDragAndDropEnabled = function () {
                    if ($attrs.nodeMoved) {
                        return true;
                    } else {
                        return false;
                    }
                }

                $scope.initTree = function () {

                    //check if input data is object. if yes wrap object in array. thats the least we can do

                    //Since the data is two way bound to the calling controller, we shouldn't replace the object itself but rather
                    //wrap it in an array and pass the reference to the array to our jqTree init. otherwise we would replace
                    //the object with an array containing the object and this would also affect the calling scope.


                    var dataForJQTree = $scope.wrapObjectInArrayOrReturnIfArray($scope.treeData);


                    $(function () {
                            tree.tree({
                                    data: dataForJQTree,
                                    autoOpen: $scope.treeExpanded,
                                    dragAndDrop: isDragAndDropEnabled(),
                                    selectable: isSelectable(),
                                    slide: true
                                }


                            )
                        }
                    );
                }

                $scope.wrapObjectInArrayOrReturnIfArray = function(object){
                    if (Object.prototype.toString.call(object) === '[object Array]') {
                        return object; //this object is an array already

                    }

                    var array = [];
                    array.push(object);
                    return array;
                }

                $scope.initTree();

                $scope.bindTreeEvents = function () {
                    tree.bind(
                        'tree.select',
                        function (event) {
                            if (event.node) {   // node was selected

                                var array = $scope.wrapObjectInArrayOrReturnIfArray($scope.treeData);
                                $scope.returnAngularBoundNodeOrInternalNode(event, array);
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
                }


                //util function to search a tree for its containing node with said id
                $scope.findNodeInTreeByID = function (id, node) {
                    if (node.id == id) {
                        return node;
                    }
                    for (var i = 0; i < node.children.length; i++) {
                        var returnValue = $scope.findNodeInTreeByID(id, node.children[i]);
                        if (returnValue) {
                            return returnValue;
                        }
                    }

                }

                $scope.returnAngularBoundNodeOrInternalNode = function (event, angTreeData) {
                    //If the nodes do not contain ID's we return the internal node (original one from the event)
                    if (!event.node.id) {
                        $scope.$apply(function () {
                            $scope.nodeSelected({
                                node: event.node
                            });
                        });
                    }else{
                        //find returned node in our two way data bound angular variable and return that one
                        var root = angTreeData[0];

                        $scope.$apply(function () {
                            $scope.nodeSelected({
                                node: $scope.findNodeInTreeByID(event.node.id, root)
                            });
                        });
                    }
                }


            },

            restrict: 'E',
            link: function (scope, element, attrs) {
            }
        };

    })


;


