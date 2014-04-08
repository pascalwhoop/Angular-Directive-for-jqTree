# Angular Directive for jqTree

Take a look at this first if you haven't done so yet: [jqTree Official Github Page](http://mbraak.github.io/jqTree/index.html)

This directive is supposed to make a jqTree compatible with AngularJS.
I don't take any credit for jqTree. This has been done by s.o. else and he/she should get the credit. Also I don't have any licensing plans. So just make sure you follow the rules of the license that applies to jqTree.

###What I've done:

I took the jqTree and wrapped it in a directive. When the data in the scope changes, the tree will be flushed and a new one will be put in place of the old one. I do not have a way of replacing only those nodes that have changed (yet). I would have to write some form of comparator that takes the new values from scope and checks which parts have changed compared to the old ones and then call the <code>jqTree.updateNode()</code> for the changed nodes.


###What you get

```
<ng-tree tree-data="treeData" tree-expanded="treeExpanded" tree-options="treeOptions"
          node-selected="nodeSelected(node)" node-moved="nodeMoved(move)">         </ng-tree>
```
A new Element called <code>ng-tree</code> which will create a tree representation of the data passed to it via the <code>tree-data</code> attribute. 

#####Tree-Data attribute
The Data passed to the <code>tree-data</code> attribute should look like this:

```
[
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
                    }
]
```
The objects should either have an attribute of  <code>label</code> or <code>name</code>. <code>name</code> is the recommended way, since this is what will be returned by the callback functions.
<strong>All elements (nodes) MUST have an ID</strong> for the select callback to work. Otherwise the select callback will be passed an internal copy of the selected node and not the reference to the node which is within the angular "world" (your controllers's scope).

#####Tree-Expanded attribute
This attribute takes <code>true</code>, <code>false</code> or  <code>n</code> while n ∈ ℕ and indicates the number of levels to expand on initialization

#####Tree-Options attribute
This attribute takes a dictionary of options that will be passed to jQtree (e.g., onCreateLi, saveState, closedIcon,
openedIcon, ...). List of options is on [jqTree Official Github Page](http://mbraak.github.io/jqTree/#tree-options)

#####node-selected attribute
A callback function that takes the argument <code>node</code>. The argument is a reference to the node that was selected. If this attribute is missing, the tree elements will not be selectable 

#####node-moved attribute
A callback function that takes the argument <code>move</code>, which contains information about the move. the info is:

* node that has been moved
* destination node (Must not be the parent, can also be a sibbling to also inform about order of items)
* target Position as a string ("before", "after", "inside")
* previous parent node

**Please note that changes to the tree that are not handled by any callbacks are not applied to your scope data. You must take care of changes through the provided callback functions.**

