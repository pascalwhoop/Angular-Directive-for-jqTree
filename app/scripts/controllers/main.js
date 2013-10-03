'use strict';
var app = angular.module("treeDirectiveApp", ['ngTreeDirective'])


    app.controller('MainCtrl', function ($scope) {


        $scope.switchData = function(){
            var temp =$scope.treeData;
            $scope.treeData = $scope.differentTreeData;
            $scope.differentTreeData = temp;
        }



        $scope.nodeSelected = function(node){
            console.log("selected: " + node.id);
        }

        $scope.nodeMoved = function(move){
            console.log('moved_node', move.movedNode);
            console.log('target_node', move.targetNode);
            console.log('position', move.targetPosition);
            console.log('previous_parent', move.previousParent);
        }

        $scope.logTree = function(){
            console.log($scope.treeData);
        }


        $scope.treeExpanded = true;

        //data with attribute "name"
        $scope.treeData = [
            {name: "grandmother",
                children: [
                    {
                        name: "mother",
                        id: 1,
                        children: [
                            {
                                name: "sister",
                                id: 2,
                                children: []
                            },
                            {
                                name: "brother",
                                id: 3,
                                children: []
                            },
                            {
                                name: "YOU",
                                id: 4,
                                chilren: []

                            }
                        ]
                    },
                    {
                        name: "aunt",
                        id: 5,
                        children: [
                            {
                                name: "cousin1",
                                id: 6,
                                children: []
                            }, {
                                name: "cousin11",
                                id: 7,
                                children: []
                            },{
                                name: "cousin12",
                                id: 8,
                                children: []
                            },{
                                name: "cousin14",
                                id: 9,
                                children: []
                            },{
                                name: "cousin22",
                                id: 10,
                                children: []
                            },
                            {
                                name: "cousin2",
                                id: 11,
                                children: []
                            }
                        ]
                    },
                    {
                        name: "uncle1",
                        id: 12,
                        children: []
                    },
                    {
                        name: "uncle2",
                        id: 13,
                        children: [
                            {
                                name: "cousin3",
                                id: 14,
                                children: []
                            },
                            {
                                name: "cousin4",
                                id: 15,
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]

        //data with attribute "label"
        $scope.differentTreeData = [
            {label: "grandfather",
                children: [
                    {
                        label: "father",
                        id: 1,
                        children: [
                            {
                                label: "sister",
                                id: 2,
                                children: []
                            },
                            {
                                label: "brother",
                                id: 3,
                                children: []
                            },
                            {
                                label: "YOU",
                                id: 4,
                                chilren: []

                            }
                        ]
                    },
                    {
                        label: "angry aunt",
                        id: 5,
                        children: [
                            {
                                label: "cousin1",
                                id: 6,
                                children: []
                            }, {
                                label: "cousin11",
                                id: 7,
                                children: []
                            },{
                                label: "cousin12",
                                id: 8,
                                children: []
                            },{
                                label: "cousin14",
                                id: 9,
                                children: []
                            },{
                                label: "cousin22",
                                id: 10,
                                children: []
                            },
                            {
                                label: "cousin2",
                                id: 11,
                                children: []
                            }
                        ]
                    },
                    {
                        label: "uncle1",
                        id: 12,
                        children: []
                    },
                    {
                        label: "uncle2",
                        id: 13,
                        children: [
                            {
                                label: "cousin3",
                                id: 14,
                                children: []
                            },
                            {
                                label: "cousin4",
                                id: 15,
                                children: []
                            }
                        ]
                    },
                    {
                        label: "father",
                        id: 1,
                        children: [
                            {
                                label: "sister",
                                id: 2,
                                children: []
                            },
                            {
                                label: "brother",
                                id: 3,
                                children: []
                            },
                            {
                                label: "YOU",
                                id: 4,
                                chilren: []

                            }
                        ]
                    },
                    {
                        label: "angry aunt",
                        id: 5,
                        children: [
                            {
                                label: "cousin1",
                                id: 6,
                                children: []
                            }, {
                                label: "cousin11",
                                id: 7,
                                children: []
                            },{
                                label: "cousin12",
                                id: 8,
                                children: []
                            },{
                                label: "cousin14",
                                id: 9,
                                children: []
                            },{
                                label: "cousin22",
                                id: 10,
                                children: []
                            },
                            {
                                label: "cousin2",
                                id: 11,
                                children: []
                            }
                        ]
                    },
                    {
                        label: "uncle1",
                        id: 12,
                        children: []
                    },
                    {
                        label: "uncle2",
                        id: 13,
                        children: [
                            {
                                label: "cousin3",
                                id: 14,
                                children: []
                            },
                            {
                                label: "cousin4",
                                id: 15,
                                children: []
                            }
                        ]
                    },
                    {
                        label: "father",
                        id: 1,
                        children: [
                            {
                                label: "sister",
                                id: 2,
                                children: []
                            },
                            {
                                label: "brother",
                                id: 3,
                                children: []
                            },
                            {
                                label: "YOU",
                                id: 4,
                                chilren: []

                            }
                        ]
                    },
                    {
                        label: "angry aunt",
                        id: 5,
                        children: [
                            {
                                label: "cousin1",
                                id: 6,
                                children: []
                            }, {
                                label: "cousin11",
                                id: 7,
                                children: []
                            },{
                                label: "cousin12",
                                id: 8,
                                children: []
                            },{
                                label: "cousin14",
                                id: 9,
                                children: []
                            },{
                                label: "cousin22",
                                id: 10,
                                children: []
                            },
                            {
                                label: "cousin2",
                                id: 11,
                                children: []
                            }
                        ]
                    },
                    {
                        label: "uncle1",
                        id: 12,
                        children: []
                    },
                    {
                        label: "uncle2",
                        id: 13,
                        children: [
                            {
                                label: "cousin3",
                                id: 14,
                                children: []
                            },
                            {
                                label: "cousin4",
                                id: 15,
                                children: []
                            }
                        ]
                    },
                    {
                        label: "father",
                        id: 1,
                        children: [
                            {
                                label: "sister",
                                id: 2,
                                children: []
                            },
                            {
                                label: "brother",
                                id: 3,
                                children: []
                            },
                            {
                                label: "YOU",
                                id: 4,
                                chilren: []

                            }
                        ]
                    },
                    {
                        label: "angry aunt",
                        id: 5,
                        children: [
                            {
                                label: "cousin1",
                                id: 6,
                                children: []
                            }, {
                                label: "cousin11",
                                id: 7,
                                children: []
                            },{
                                label: "cousin12",
                                id: 8,
                                children: []
                            },{
                                label: "cousin14",
                                id: 9,
                                children: []
                            },{
                                label: "cousin22",
                                id: 10,
                                children: []
                            },
                            {
                                label: "cousin2",
                                id: 11,
                                children: []
                            }
                        ]
                    },
                    {
                        label: "uncle1",
                        id: 12,
                        children: []
                    },
                    {
                        label: "uncle2",
                        id: 13,
                        children: [
                            {
                                label: "cousin3",
                                id: 14,
                                children: []
                            },
                            {
                                label: "cousin4",
                                id: 15,
                                children: []
                            }
                        ]
                    },
                    {
                        label: "father",
                        id: 1,
                        children: [
                            {
                                label: "sister",
                                id: 2,
                                children: []
                            },
                            {
                                label: "brother",
                                id: 3,
                                children: []
                            },
                            {
                                label: "YOU",
                                id: 4,
                                chilren: []

                            }
                        ]
                    },
                    {
                        label: "angry aunt",
                        id: 5,
                        children: [
                            {
                                label: "cousin1",
                                id: 6,
                                children: []
                            }, {
                                label: "cousin11",
                                id: 7,
                                children: []
                            },{
                                label: "cousin12",
                                id: 8,
                                children: []
                            },{
                                label: "cousin14",
                                id: 9,
                                children: []
                            },{
                                label: "cousin22",
                                id: 10,
                                children: []
                            },
                            {
                                label: "cousin2",
                                id: 11,
                                children: []
                            }
                        ]
                    },
                    {
                        label: "uncle1",
                        id: 12,
                        children: []
                    },
                    {
                        label: "uncle2",
                        id: 13,
                        children: [
                            {
                                label: "cousin3",
                                id: 14,
                                children: []
                            },
                            {
                                label: "cousin4",
                                id: 15,
                                children: []
                            }
                        ]
                    },
                    {
                        label: "father",
                        id: 1,
                        children: [
                            {
                                label: "sister",
                                id: 2,
                                children: []
                            },
                            {
                                label: "brother",
                                id: 3,
                                children: []
                            },
                            {
                                label: "YOU",
                                id: 4,
                                chilren: []

                            }
                        ]
                    },
                    {
                        label: "angry aunt",
                        id: 5,
                        children: [
                            {
                                label: "cousin1",
                                id: 6,
                                children: []
                            }, {
                                label: "cousin11",
                                id: 7,
                                children: []
                            },{
                                label: "cousin12",
                                id: 8,
                                children: []
                            },{
                                label: "cousin14",
                                id: 9,
                                children: []
                            },{
                                label: "cousin22",
                                id: 10,
                                children: []
                            },
                            {
                                label: "cousin2",
                                id: 11,
                                children: []
                            }
                        ]
                    },
                    {
                        label: "uncle1",
                        id: 12,
                        children: []
                    },
                    {
                        label: "uncle2",
                        id: 13,
                        children: [
                            {
                                label: "cousin3",
                                id: 14,
                                children: []
                            },
                            {
                                label: "cousin4",
                                id: 15,
                                children: []
                            }
                        ]
                    },
                    {
                        label: "father",
                        id: 1,
                        children: [
                            {
                                label: "sister",
                                id: 2,
                                children: []
                            },
                            {
                                label: "brother",
                                id: 3,
                                children: []
                            },
                            {
                                label: "YOU",
                                id: 4,
                                chilren: []

                            }
                        ]
                    },
                    {
                        label: "angry aunt",
                        id: 5,
                        children: [
                            {
                                label: "cousin1",
                                id: 6,
                                children: []
                            }, {
                                label: "cousin11",
                                id: 7,
                                children: []
                            },{
                                label: "cousin12",
                                id: 8,
                                children: []
                            },{
                                label: "cousin14",
                                id: 9,
                                children: []
                            },{
                                label: "cousin22",
                                id: 10,
                                children: []
                            },
                            {
                                label: "cousin2",
                                id: 11,
                                children: []
                            }
                        ]
                    },
                    {
                        label: "uncle1",
                        id: 12,
                        children: []
                    },
                    {
                        label: "uncle2",
                        id: 13,
                        children: [
                            {
                                label: "cousin3",
                                id: 14,
                                children: []
                            },
                            {
                                label: "cousin4",
                                id: 15,
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]


    });
